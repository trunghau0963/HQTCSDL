import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../model/model";
import { Role } from "../config/config";
dotenv.config();

declare module "jsonwebtoken" {
  export interface JwtPayload {
    phone: string;
    password: string;
    role: Role;
  }
}

const cookieOptions = {
  secure: true,
  httpOnly: true,
};

interface Extended extends Request {
  user?: User;
}
const middlewareToken = {
  generateToken: async (
    phone: string,
    password: string | undefined,
    role: Role,
    res: Response
  ) => {
    console.log("data", { phone, password, role });
    const token = jwt.sign({ phone, password, role }, process.env.JWT_TOKEN!, {
      expiresIn: "1d",
    });
    res.cookie("token", token, cookieOptions);
    return token;
  },
  verifyToken: async (req: Extended, res: Response): Promise<User | JwtPayload> => {
    const token = req.cookies.token as string;

    if (!token) {
      throw new Error("You are not Login or token expired");
    }

    const data= jwt.verify(token, process.env.JWT_TOKEN! as string) as User | JwtPayload || {} ;
    return data;
  },
  verifyTokenMiddleware: async (
    req: Extended,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.cookies.token as string;
      // console.log("token ", token);
      if (!token) {
        return res.json({ message: "You are not authenticated" });
      }
      const data = jwt.verify(token, process.env.JWT_TOKEN! as string) as User;
      req.user = data;
      return next();
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  },
};

export const verifyTokenAndUserAuthorization = (
  req: Extended,
  res: Response,
  next: NextFunction
) => {
  middlewareToken.verifyTokenMiddleware(req, res, () => {
    if (req.user?.id === req.params.id || req.user?.role === "admin") {
      next();
    } else {
      res.status(403).json("You're not allowed to do that!");
    }
  });
};

export const verifyTokenAndAdmin = (
  req: Extended,
  res: Response,
  next: NextFunction
) => {
  middlewareToken.verifyTokenMiddleware(req, res, () => {
    if (req.user?.role === "admin") {
      next();
    } else {
      res.status(403).json("You're not allowed to do that!");
    }
  });
};

export default middlewareToken;
