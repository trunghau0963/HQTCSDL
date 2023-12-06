import { NextFunction, Request, Response, Router } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import mssql from "mssql";
import { Role, getDatabase } from "../../config/config";
import * as elements from "typed-html";
import Signup from "../../app/auth/Signup/Signup";
import Login from "../../app/auth/Login/Login";
// import Warning from "../../components/warning";
// import Topbar from "../../components/topbar";
import {
  SignupController,
  SigninController,
  LogoutController,
} from "../../controller/authController";
import { User } from "../../config/model";
import middlewareToken from "../../middleware/tokenMiddleware";

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
    const token = req.cookies.token as string;
    // console.log('token',token);
    const {
      phone: phone,
      password: password,
      role: role,
    } = (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};

    const user: User = {
      ...(
        await (await req.db())
          .input("DIENTHOAI", phone)
          .input("MATKHAU", password)
          .input("ROLE", role)
          .execute("SIGN_IN")
      ).recordset[0],
      role,
    };

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

    return res.status(402).send("You are not authenticated");
  });
};

export const patient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getRole(req, res, async () => {
    if (req.user?.role !== "guest" && req.user?.role !== undefined) {
      console.log("user role : ", req.user?.role);
      console.log("patient can view");
      return next();
    }

    return res.status(401).send("You are not authenticated");
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

authRouter.post("/signup", SignupController);

authRouter.post("/login", SigninController);

authRouter.post(
  "/logout",
  patient,
  middlewareToken.verifyTokenMiddleware,
  LogoutController
);

export default authRouter;
