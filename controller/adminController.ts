import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { Admin } from "../model/model";

export const createAdmin = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user: Admin = {
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

export const getAdminById = async (req: Request, res: Response, id : string) => {
  try {
    const user: Admin = (
      await (await req.db())
        .input("MAQT", id)
        .execute("GET_INFO_QUANTRI_BY_ID")
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

export const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const patients: Admin[] = (
      await (await req.db()).execute("GET_INFO_QUANTRI")
    ).recordset as Admin[];
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
