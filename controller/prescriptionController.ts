import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { Prescription } from "../model/model";

export const addDrugIntoPrescription = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = (
      await (await req.db())
        .input("MACT", input.MACT)
        .input("TENTHUOC", input.TENTHUOC)
        .input("SOLUONG", input.SOLUONG)
        .input("LIEULUONG", input.LIEULUONG)
        .execute("INSERT_INTO_TOATHUOC")
    ).recordset;

    console.log("user", user);
    res
      .header("HX-Redirect", "/dentist/schedule")
      .status(200)
      .send("successful add drug into Prescription");
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

export const deleteDrugIntoPrescription = async (
  req: Request,
  res: Response
) => {
  try {
    console.log("hello");
    const input = req.body;
    console.log("input", input);
    const user = await (await req.db())
      .input("MACT", input.MACT)
      .input("MATHUOC", input.MATHUOC)
      .input("MALO", input.MALO)
      .execute("DROP_THUOC_IN_TOATHUOC");
    res
      .header("HX-Redirect", "/dentist/schedule")
      .status(200)
      .json(user.recordset[0])
      .send("successful delete drug into Prescription");
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

export const getPrescription = async (req: Request, res: Response) => {
  try {
    const Prescription: Prescription[] = (
      await (await req.db()).execute("GET_TOATHUOC")
    ).recordset as Prescription[];

    return Prescription;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Prescription information. Please try again later."
    );
    return undefined;
  }
};

export const getPrescriptionById = async (
  req: Request,
  res: Response,
  id?: string
) => {
  try {
    const Prescription: Prescription[] = (
      await (await req.db()).input("MACT", id).execute("GET_TOATHUOC_DETAIL")
    ).recordset;
    return Prescription;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Prescription information. Please try again later."
    );
    return undefined;
  }
};
