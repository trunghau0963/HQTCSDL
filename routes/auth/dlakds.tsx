import { Request, RequestHandler, response, Response } from "express";
import Connection from "../../middleware/connection";
import { loginSchema, registerSchema } from "../../middleware/useValidation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Signup = (req: Request, res: Response) => {
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
    return res
      .status(500)
      .send("Something went wrong. Please try again later.");
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { error, value } = loginSchema.validate(req.body);

    if (value) {
      const user = await db.exec("signin", { email });

      if (!user.recordset[0]) {
        return res.status(400).json({ mes-sage: "user is not found" });
      }

      const userData = user.recordset[0] as {
        id: number;
        name: string;
        email: string;
        password: string;
        role: string;
      };

      bcrypt.compare(password, userData.password, (err, data) => {
        if (data) {
          const { role, name, id, email, ...others } = userData;

          const user = { role, name, id, email };

          const token = jwt.sign(user, process.env.KEY as string, {
            expiresIn: "30 days",
          });

          res.status(200).json({ user, token });
        } else {
          res.status(400).json({ message: "Wrong password" });
        }
      });
    } else {
      res.status(400).json(error?.details[0].message);
    }
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await (await db.exec("getAllUsers")).recordset;
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: "something went wrong" });
  }
};

export const deleteUsers: RequestHandler<{ id: string }> = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;

  try {
    await db.exec("deleteUsers", { id });

    res.status(201).json({ message: "user is deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "something went wrong" });
  }
};

export const getDoctors = async (req: Request, res: Response) => {
  try {
    const doctors = await (await db.exec("getDoctors")).recordset;

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};
