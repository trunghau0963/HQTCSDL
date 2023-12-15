import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, Response } from "express";
import { Invoice } from "../model/model";

export const addInvoice = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    console.log("input", input);
    const user = await (await req.db())
      .input("MABN", input.MABN)
      .input("MANS", input.MANS)
      .input("TRIEUCHUNG", input.TRIEUCHUNG)
      .input("CHANDOAN", input.CHANDOAN)
      .input("NGAYKHAM", input.NGAYKHAM)
      .input("GIOKHAM", input.GIOKHAM)
      .execute("INSERT_INTO_CHITIETPHIENKHAM");
    res
      .header("HX-Redirect", "/staff/invoice")
      .status(200)
      .json(user.recordset[0])
      .send("successful registe Appointment");
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
    const data: Invoice[] = (
      await (await req.db()).execute("GET_CHITIETPHIENKHAM_DETAIL_ALL")
    ).recordset as Invoice[];
    // console.log("Invoice", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    console.error("Can't get Appointment information. Please try again later.");
    return undefined;
  }
};

export const getIdInvoice = async (req: Request, res: Response) => {
  try {
    const data: Invoice[] = (
      await (await req.db()).execute("GET_CHITIETPHIENKHAM_DETAIL_ALL")
    ).recordset as Invoice[];
    const idArray: string[] = data.map((invoice) => invoice.MACT.toString());
    return idArray;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    console.error("Can't get Appointment information. Please try again later.");
    return undefined;
  }
};

export const directNewUrl = async (req: Request, res: Response) => {
  try {
    const { MABN, NGAYKHAM, GIOKHAM } = req.body;
    console.log("MABN", MABN);
    console.log("NGAYKHAM", NGAYKHAM);
    console.log("GIOKHAM", GIOKHAM);

    const data: Invoice = (
      await (await req.db())
        .input("MABN", MABN)
        .input("NGAYKHAM", NGAYKHAM)
        .input("GIOKHAM", GIOKHAM)
        .execute("GET_CHITIETPHIENKHAM_DETAIL")
    ).recordset[0];

    // console.log("data", data);
    if (!data || data.MACT === undefined || data.MACT === null) {
      res
        .header("HX-Redirect", "/staff/invoice/failed")
        .status(404)
        .send("Not found Invoice");
    } else {
      const invoiceURL = `/staff/invoice/${data.MACT}`;
      res
        .header("HX-Redirect", invoiceURL)
        .status(200)
        .send("successful found Invoice");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Appointment information. Please try again later.");
    return undefined;
  }
};

export const getInvoiceDetailById = async (req: Request, res: Response) => {
  console.log("getInvoiceDetail");
  try {
    const { id } = req.params;
    const invoice: Invoice = (
      await (await req.db())
        .input("MACT", id)
        .execute("GET_CHITIETPHIENKHAM_BY_ID")
    ).recordset[0];

    const data: Invoice = (
      await (await req.db())
        .input("MABN", invoice.MABN)
        .input("NGAYKHAM", invoice.NGAYKHAM)
        .input("GIOKHAM", invoice.GIOKHAM)
        .execute("GET_CHITIETPHIENKHAM_DETAIL")
    ).recordset[0];
    // console.log("Invoice detail", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    console.error("Can't get Appointment information. Please try again later.");
    return undefined;
  }
};
