import { Request, RequestHandler, response, Response } from "express";
import { Patient } from "../model/model";

export const createPatient = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("HOTEN", input.name)
      .input("MATKHAU", input.password)
      .input("DIENTHOAI", input.phone)
      .input("NGAYSINH", input.dob)
      .input("DIACHI", input.address)
      .input("ROLE", "BENHNHAN")
      .execute("SIGN_UP");
    res
      .header("HX-Redirect", "/admin/patient")
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

export const getPatientById = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const user: Patient = (
      await (await req.db())
        .input("MABN", id)
        .execute("GET_INFO_BENHNHAN_BY_ID")
    ).recordset[0];
    return user;
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send(error.message);
      }
      return res
        .status(500)
        .send("Can't get patient by id. Please try again later.");
    }
  }
};

export const getPatientByName = async (
  req: Request,
  res: Response,
  name: string
) => {
  // const { name } = req.body;
  try {
    const user: Patient = (
      await (await req.db())
        .input("HOTEN", name)
        .execute("GET_INFO_BENHNHAN_BY_NAME")
    ).recordset[0];
    console.log(user);
    return user;
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send(error.message);
      }
      return res
        .status(500)
        .send("Can't get patient by id. Please try again later.");
    }
  }
};

export const getPatientByPhone = async (req: Request, res: Response) => {
  const { phone } = req.body;
  try {
    const user: Patient = (
      await (await req.db())
        .input("DIENTHOAI", phone)
        .execute("GET_INFO_BENHNHAN_BY_PHONENUMBER")
    ).recordset[0];
    console.log(user);
    return res.json("successful get patient").status(201);
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send(error.message);
      }
      return res
        .status(500)
        .send("Can't get patient by id. Please try again later.");
    }
  }
};

export const getAllPatient = async (req: Request, res: Response) => {
  try {
    const patients: Patient[] = (
      await (await req.db()).execute("GET_INFO_BENHNHAN")
    ).recordset as Patient[];
    return patients;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
    return res
      .status(500)
      .send("Can't get all patient. Please try again later.");
  }
};

export const deletePatient = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const db = await (await req.db())
      .input("MABN", input.id)
      .execute("REMOVE_BENHNHAN");
    res.header("HX-Redirect", "/auth/patient").status(200).json(db.recordset);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
    return res.status(500).send("Action Failed");
  }
};

export const updatePatient= async (req: Request, res: Response) => {
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

export const blockPatient = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const user: Patient = (
      await (await req.db()).input("MABN", id).execute("BLOCK_ACCOUNT_BENHNHAN")
    ).recordset[0];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
    return res.status(500).send("Somthg went wrong. Please try again later.");
  }
};
