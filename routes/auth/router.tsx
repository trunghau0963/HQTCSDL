import { NextFunction, Request, Response, Router } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import mssql from "mssql";
import { Role, getDatabase } from "../../config/config";
import * as elements from "typed-html";
import Error from "../../components/Error/ErrorPage";
import LandingPage from "../../app/landing/LandingPage";
import Signup from "../../app/auth/Signup/Signup";
import Login from "../../app/auth/Login/Login";
import {
  SignupController,
  SigninController,
  LogoutController,
} from "../../controller/authController";
import { User } from "../../model/model";
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
  req.db = async () => await getDatabase("KHACH");

  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};

    const { DIENTHOAI, MATKHAU, role } = data.user;
    const user: User = {
      ...(
        await (await req.db())
          .input("DIENTHOAI", DIENTHOAI)
          .input("MATKHAU", MATKHAU)
          .input("ROLE", role)
          .execute("SIGN_IN")
      ).recordset[0],
      role,
    };
    req.user = user;
    req.db = async () => await getDatabase(user.role);
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
      console.log("user role : ", req.user?.role);
      return next();
    }

    return res.status(402).send(<Error />);
  });
};

export const patient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getRole(req, res, async () => {
    if (req.user?.role !== "KHACH" && req.user?.role !== undefined) {
      console.log("user role : ", req.user?.role);
      return next();
    }

    return res.status(401).send(<Error />);
  });
};

export const admin = async (req: Request, res: Response, next: NextFunction) =>
  role("QUANTRI", req, res, next);

export const staff = async (req: Request, res: Response, next: NextFunction) =>
  role("NHANVIEN", req, res, next);

export const dentist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => role("NHASI", req, res, next);

const authRouter = Router();

authRouter.get("/", async (req, res) => {
  return res.send(<LandingPage />);
});

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
