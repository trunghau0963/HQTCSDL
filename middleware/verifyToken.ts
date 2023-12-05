import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../config/model";
dotenv.config();

interface Extended extends Request {
  info?: User;
}

export const verifyToken = (
  req: Extended,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers["token"] as string;
    if (!token) {
      return res.json({ message: "You are not authenticated" });
    }
    const data = jwt.verify(token, process.env.JWT_TOKEN as string) as User;
    req.info = data;
  } catch (error) {
    return res.status(500).json({ error: "something went" });
  }

  next();
};
