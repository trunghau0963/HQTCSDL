import { Request, RequestHandler, response, Response } from "express";
import Connection from "../../middleware/connection";
import middlewareToken from "../../middleware/tokenMiddleware";
import { User } from "../../config/model";
// import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
          .execute("INSERT_INTO_BENHNHAN")
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
    const user: User = {
      ...(
        await (await req.db())
          .input("DIENTHOAI", req.body.phone)
          .input("MATKHAU", req.body.password)
          .input("ROLE", req.body.role)
          .execute("SIGIN")
      ).recordset[0],
      role,
    };

    const token = await middlewareToken.generateToken(
      req.body.phone,
      req.body.password,
      user.role,
      res
    );
    console.log(token);
    return res
      .json("Login successfully" + `<a href='/${role}/dashboard'>Continue<a>`)
      .status(201);
  } catch (error: any) {
    console.log(error);

    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }

    return res.status(500).send("Login failed. Please try again later.");
  }
};

export const LogoutController = async (req: Request, res: Response) => {
  return res
    .header("HX-Redirect", "/login")
    .clearCookie("token")
    .status(200)
    .json("Logged out successfully!")
    .end();
};

// export const getUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await (await db.exec("getAllUsers")).recordset;
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(400).json({ error: "something went wrong" });
//   }
// };

// export const deleteUsers: RequestHandler<{ id: string }> = async (
//   req: Request,
//   res: Response
// ) => {
//   const id = req.params.id;

//   try {
//     await db.exec("deleteUsers", { id });

//     res.status(201).json({ message: "user is deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ error: "something went wrong" });
//   }
// };

// export const getDoctors = async (req: Request, res: Response) => {
//   try {
//     const doctors = await (await db.exec("getDoctors")).recordset;

//     res.status(200).json(doctors);
//   } catch (error) {
//     res.status(500).json({ error: "something went wrong" });
//   }
// };
