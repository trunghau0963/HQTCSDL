import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../config/model";
import { Role } from "../config/config";
dotenv.config();

const cookieOptions = {
  secure: true,
  httpOnly: true,
};

interface Extended extends Request {
  info?: User;
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
  verifyToken: async (req: Extended, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies.token as string;
      // console.log("token ", token);
      if (!token) {
        return res.json({ message: "You are not authenticated" });
      }
      const data = jwt.verify(token, process.env.JWT_TOKEN! as string) as User;
      req.info = data;
      next();
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  },
};

export const verifyTokenAndUserAuthorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  middlewareToken.verifyToken(req, res, () => {
    if (req.user?.id === req.params.id || req.user?.role === "admin") {
      next();
    } else {
      res.status(403).json("You're not allowed to do that!");
    }
  });
};

export const verifyTokenAndAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  middlewareToken.verifyToken(req, res, () => {
    if (req.user?.role === "admin") {
      next();
    } else {
      res.status(403).json("You're not allowed to do that!");
    }
  });
};

export default middlewareToken;

// export const generateToken = (user: User, res: Response) => {
//   const token = jwt.sign(user, process.env.JWT_TOKEN as string, {
//     expiresIn: "1h",
//   });
//   res.cookie("token", token, cookieOptions);
//   return token;
// };

// export const verifyToken = (
//   req: Extended,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const token = req.headers["token"] as string;
//     if (!token) {
//       return res.json({ message: "You are not authenticated" });
//     }
//     const data = jwt.verify(token, process.env.JWT_TOKEN as string) as User;
//     req.info = data;
//   } catch (error) {
//     return res.status(500).json({ error: "something went" });
//   }

//   next();
// };
