import { NextFunction, Request, Response, Router } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import mssql from "mssql";
import { Role, getDatabase } from "../../config/config";
import * as elements from "typed-html";
import Signup from "../../app/auth/Signup/Signup";
import Login from "../../app/auth/Login/Login";
// import Warning from "../../components/warning";
// import Topbar from "../../components/topbar";
import { User } from "../../config/model";

const cookieOptions = {
  secure: true,
  httpOnly: true,
  signed: true,
};

declare global {
  namespace Express {
    interface Request {
      user?: User;
      db: () => Promise<mssql.Request>;
    }
  }
}

declare module "jsonwebtoken" {
  export interface JwtPayload {
    phone: string;
    password: string;
    role: Role;
  }
}

export const getRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.db = async () => await getDatabase("guest");

  try {
    const token = req.signedCookies.token;
    const {
      phone: phone,
      password: password,
      role: role,
    } = (jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload) || {};

    const user: User = {
      ...(
        await (await req.db())
          .input("phone", phone)
          .input("password", password)
          .input("role", role)
          .execute("getUserByCred")
      ).recordset?.[0],
      role,
    };

    if (
      phone == null ||
      password == null ||
      user == null ||
      user.id == null ||
      user.isLocked
    ) {
      throw null;
    }

    req.user = user;
    req.db = async () => await getDatabase(role);
    return next();
  } catch {
    return next();
  }
};

const role = async (
  role: Role,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getRole(req, res, async () => {
    if (req.user?.role === role) {
      return next();
    }

    return res
      .status(402)
      .send
      // <Topbar user={req.user}>
      //   <Warning fullscreen>
      //     You are not authorized to perform this action.
      //   </Warning>
      // </Topbar>
      ();
  });
};

export const patient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getRole(req, res, async () => {
    if (req.user?.role !== "guest") {
      return next();
    }

    return res
      .status(401)
      .send
      // <Topbar user={req.user}>
      //   <Warning fullscreen>
      //     You have to be logged in to perform this action.
      //   </Warning>
      // </Topbar>
      ();
  });
};

export const admin = async (req: Request, res: Response, next: NextFunction) =>
  role("admin", req, res, next);

export const staff = async (req: Request, res: Response, next: NextFunction) =>
  role("staff", req, res, next);

export const dentist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => role("dentist", req, res, next);

const authRouter = Router();

authRouter.get("/signup", async (req, res) => {
  return res.send(<Signup />);
});

authRouter.get("/login", async (req, res) => {
  return res.send(<Login />);
});

authRouter.post("/signup", async (req, res) => {
  try {
    console.log("da vao try");
    const input = req.body;
    console.log(input);
    const user: User = {
      ...(
        await (await req.db())
          .input("TEN", input.name)
          .input("MATKHAU", input.password)
          .input("DIENTHOAI", input.phone)
          .input("NGAYSINH", input.dob)
          .input("DIACHI", input.address)
          .execute("INSERT_INTO_BENHNHAN")
      ).recordset[0],
      role: "patient",
    };
    // console.log(user);
    // return res.json({ ...user, password: undefined });
    return res.json('Đăng ký thành công').status(200);
  } catch (error: any) {
    console.log(error);
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message.split("'.")[0].split("'")[1]);
    }

    return res.status(500).send("Signup failed. Please try again later.");
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { phone, password, role } = req.body;

    const user: User = {
      ...(
        await (await req.db())
          .input("phone", phone)
          .input("password", password)
          .input("role", role)
          .execute("getUserByCred")
      ).recordset?.[0],
      role,
    };

    if (user.isLocked) {
      return res.status(401).send("This account has been locked.");
    }

    if (
      phone == null ||
      password == null ||
      user == null ||
      user.id == null ||
      user.isLocked
    ) {
      return res.status(401).send("Phone and password do not match.");
    }

    res.cookie(
      "token",
      jwt.sign(
        { phone: user.phone, password: user.password, role: user.role },
        process.env.JWT_SECRET!
      ),
      cookieOptions
    );

    return res
      .header("HX-Redirect", "/users")
      .json({ ...user, password: undefined });
  } catch (error: any) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message.split("'.")[0].split("'")[1]);
    }

    return res.status(500).send("Login failed. Please try again later.");
  }
});

authRouter.get("/logout", patient, async (req, res) => {
  return res.clearCookie("token").header("HX-Redirect", "/users").end();
});

export default authRouter;
