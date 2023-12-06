import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { Dentist } from "../model/model";

export const createDentist = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user: Dentist = {
      ...(
        await (await req.db())
          .input("HOTEN", input.name)
          .input("MATKHAU", input.password)
          .input("DIENTHOAI", input.phone)
          .input("NGAYSINH", input.dob)
          .input("DIACHI", input.address)
          .input("ROLE", "admin")
          .execute("SIGN_UP")
      ).recordset[0],
    };
    console.log(user);
    res.status(200).send("successful create dentist");
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

export const getDentistById = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const user: Dentist = (
      await (await req.db()).input("MANS", id).execute("GET_INFO_NHASI_BY_ID")
    ).recordset[0];

    console.log(user);
    return res.json("successful get dentist").status(201);
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send(error.message);
      }
      return res
        .status(500)
        .send("Can't get dentist by id. Please try again later.");
    }
  }
};

export const getDentistByName = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const user: Dentist = (
      await (await req.db())
        .input("HOTEN", name)
        .execute("GET_INFO_NHASI_BY_NAME")
    ).recordset[0];
    console.log(user);
    return res.json("successful get dentist").status(201);
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send(error.message);
      }
      return res
        .status(500)
        .send("Can't get dentist by id. Please try again later.");
    }
  }
};

export const getDentistByPhone = async (req: Request, res: Response) => {
  const { phone } = req.body;
  try {
    const user: Dentist = (
      await (await req.db())
        .input("DIENTHOAI", phone)
        .execute("GET_INFO_NHASI_BY_PHONENUMBER")
    ).recordset[0];
    console.log(user);
    return res.json("successful get dentist").status(201);
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send(error.message);
      }
      return res
        .status(500)
        .send("Can't get dentist by id. Please try again later.");
    }
  }
};

export const getAllDentist = async (req: Request, res: Response) => {
  try {
    const dentists: Dentist[] = (
      await (await req.db()).execute("GET_INFO_NHASI")
    ).recordset as Dentist[];
    console.log(dentists);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
    return res
      .status(500)
      .send("Can't get all dentist. Please try again later.");
  }
};

export const blockDentist = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const user: Dentist = (
      await (await req.db()).input("MANS", id).execute("BLOCK_ACCOUNT_NHASI")
    ).recordset[0];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
    return res.status(500).send("Somthg went wrong. Please try again later.");
  }
};
