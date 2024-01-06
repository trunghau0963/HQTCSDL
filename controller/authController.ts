import { Request, RequestHandler, response, Response } from "express";
import Connection from "../middleware/connection";
import middlewareToken from "../middleware/tokenMiddleware";
import { User } from "../model/model";
import jwt from "jsonwebtoken";
import { convertRoleViToEn } from "../utils/convertRole";

export const SignupController = async (req: Request, res: Response) => {
  const input = req.body;
  try {
    console.log("da vao try");
    const user: User = {
      ...(
        await (await req.db())
          .input("TEN", input.name)
          .input("MATKHAU", input.password)
          .input("DIENTHOAI", input.phone)
          .input("NGAYSINH", input.dob)
          .input("DIACHI", input.address)
          .execute("SIGN_UP_BENHNHAN")
      ).recordset[0],
      role: "patient",
    };
    console.log(user);
    return res
      .json("Registered successfully" + `<a href='/login'>Continue Login<a>`)
      .status(201);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
    return res
      .status(500)
      .send("Something went wrong. Please try again later.");
  }
};

export const SigninController = async (req: Request, res: Response) => {
  try {
    const { phone, password, role } = req.body;
    console.log({ phone, password, role });
    const configRole = convertRoleViToEn(role);
    const user: User = {
      ...(
        await (await req.db())
          .input("DIENTHOAI", req.body.phone)
          .input("MATKHAU", req.body.password)
          .input("ROLE", req.body.role)
          .execute("SIGN_IN")
      ).recordset[0],
      role,
    };

    console.log(
      "user login : ",
      user.id,
      user.DIENTHOAI,
      user.MATKHAU,
      user.role
    );
    const token = await middlewareToken.generateToken(user, res);
    console.log(token);
    const url = `/${configRole}/dashboard`;
    return res
      .header("HX-Redirect", url)
      .status(200)
      .json("Login successfully");
  } catch (error: any) {
    console.log(error);

    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(`
      <div class="alert alert-danger" role="alert">
        ${error.message}
      </div>
      `);
    }

    return res.status(500).send("Login failed. Please try again later.");
  }
};

export const LogoutController = async (req: Request, res: Response) => {
  return res
    .header("HX-Redirect", "/auth/login")
    .clearCookie("token")
    .status(200)
    .json("Logged out successfully!")
    .end();
};
