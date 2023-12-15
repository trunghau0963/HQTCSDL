import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { Dentist } from "../model/model";

export const createDentist = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("HOTEN", input.name)
      .input("MATKHAU", input.password)
      .input("DIENTHOAI", input.phone)
      .input("NGAYSINH", input.dob)
      .input("DIACHI", input.address)
      .input("ROLE", "NHASI")
      .execute("SIGN_UP");
    res
      .header("HX-Redirect", "/admin/dentist")
      .status(200)
      .json(user.recordset[0])
      .send("successful create patient");
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

export const getDentistById = async (
  req: Request,
  res: Response,
  id: string
) => {
  // const { id } = req.body;
  try {
    const user: Dentist = (
      await (await req.db()).input("MANS", id).execute("GET_INFO_NHASI_BY_ID")
    ).recordset[0];

    // console.log(user);
    return user;
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
    return dentists;
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

export const getIdAllDentist = async (req: Request, res: Response) => {
  try {
    const dentists: Dentist[] = (
      await (await req.db()).execute("GET_INFO_NHASI")
    ).recordset as Dentist[];
    const idArray: string[] = dentists.map((dentist) =>
      dentist.MANS.toString()
    );
    return idArray;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    console.error("Can't get Appointment information. Please try again later.");
    return undefined;
  }
};

export const updateDentist = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    console.log(input);
    const user = await (await req.db())
      .input("MABN", input.id)
      .input("MATKHAU", input.password)
      .input("HOTEN", input.name)
      .input("NGAYSINH", input.dob)
      .input("DIACHI", input.address)
      .execute("UPDATE_INFO_BENHNHAN");
    res
      .header("HX-Redirect", "/admin/patient")
      .status(200)
      .json(user.recordset[0])
      .send("successful update patient");
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
    return res.status(500).send("Action Failed");
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
