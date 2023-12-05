import { Request, RequestHandler, response, Response } from "express";
import Connection from "../../middleware/connection";
import { loginSchema, registerSchema } from "../../middleware/useValidation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const db = new Connection();

export const signUp = async (req: Request, res: Response) => {
  const input = req.body;
  console.log(input);

  try {
    const { error, value } = registerSchema.validate(req.body);

    if (error) {
      res.status(400).json({ message: error.details[0].message });
    }

    const hashedPassword = await bcrypt.hash(input.password, 10);
    const name: input.name,
        password: hashedPassword,
        phone: input.phone,
        dob: input.dob,
        address: input.address,
    }

    await db.exec("INSERT_INTO_BENHNHAN", {
        name
    });

    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
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
