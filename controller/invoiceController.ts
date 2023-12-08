import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { Invoice } from "../model/model";

export const addDrugIntoInvoice = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("MACT", input.MACT)
      .input("TENTHUOC", input.TENTHUOC)
      .input("SOLUONG", input.SOLUONG)
      .input("LIEULUONG", input.LIEULUONG)
      .execute("INSERT_INTO_TOATHUOC");
    res
      .header("HX-Redirect", "/admin/drug")
      .status(200)
      .json(user.recordset[0])
      .send("successful add drug into Invoice");
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

export const deleteDrugIntoInvoice = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("MACT", input.MACT)
      .input("MATHUOC", input.MATHUOC)
      .input("MALO", input.MALO)
      .execute("DROP_THUOC_IN_TOATHUOC");
    res
      .header("HX-Redirect", "/admin/drug")
      .status(200)
      .json(user.recordset[0])
      .send("successful delete drug into Invoice");
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

export const getInvoice = async (req: Request, res: Response) => {
  try {
    const Invoice: Invoice[] = (await (await req.db()).execute("GET_TOATHUOC"))
      .recordset as Invoice[];

    return Invoice;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get invoice information. Please try again later.");
    return undefined;
  }
};

export const getInvoiceById = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const invoice: Invoice = (
      await (await req.db()).input("MACT", id).execute("GET_TOATHUOC_DETAIL")
    ).recordset[0];
    return invoice;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get invoice information. Please try again later.");
    return undefined;
  }
};
