import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { PatientProps } from "../model/model";

export const createPatient = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user: PatientProps = {
      ...(
        await (await req.db())
          .input("HOTEN", input.name)
          .input("MATKHAU", input.password)
          .input("DIENTHOAI", input.phone)
          .input("NGAYSINH", input.dob)
          .input("DIACHI", input.address)
          .input("ROLE", "patient")
          .execute("SIGN_UP")
      ).recordset[0],
    };
    console.log(user);
    res.status(200).send("successful create patient");
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

export const getPatientById = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const user: PatientProps = (
      await (await req.db())
        .input("MABN", id)
        .execute("GET_INFO_BENHNHAN_BY_ID")
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

export const getPatientByName = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const user: PatientProps = (
      await (await req.db())
        .input("HOTEN", name)
        .execute("GET_INFO_BENHNHAN_BY_NAME")
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

export const getPatientByPhone = async (req: Request, res: Response) => {
  const { phone } = req.body;
  try {
    const user: PatientProps = (
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
    const patients: PatientProps[] = (
      await (await req.db()).execute("GET_INFO_BENHNHAN")
    ).recordset as PatientProps[];
    console.log(patients);
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

export const blockPatient = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const user: PatientProps = (
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
