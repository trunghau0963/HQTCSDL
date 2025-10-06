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
    return res
      .header("HX-Redirect", "/dentist/schedule")
      .status(200)
      .send("successful registe Appointment");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res
      .header("HX-Redirect", "/dentist/schedule/err")
      .status(404)
      .send("failed registe Appointment");
    }
    return undefined;
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
    const idArray: string[] = data.map((Invoice) => Invoice.MACT.toString());
    return idArray;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    console.error("Can't get Appointment information. Please try again later.");
    return undefined;
  }
};

export const getInvoiceByIdPatientParameter = async (
  req: Request,
  res: Response,
  id: string,
  date: Date,
  time: Date
) => {
  try {
    console.log("MABN", id);
    console.log("NGAYKHAM", date);
    console.log("GIOKHAM", time);

    const data: Invoice = (
      await (await req.db())
        .input("MABN", id)
        .input("NGAYKHAM", date)
        .input("GIOKHAM", time)
        .execute("GET_CHITIETPHIENKHAM_DETAIL")
    ).recordset[0];

    console.log("data", data);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Appointment information. Please try again later.");
    return undefined;
  }
};

export const getIdInvoiceByIdPatientParameter = async (
  req: Request,
  res: Response,
  id: string,
  date: Date,
  time: Date
) => {
  try {
    // console.log("MABN", id);
    // console.log("NGAYKHAM", date);
    // console.log("GIOKHAM", time);

    const data: Invoice = (
      await (await req.db())
        .input("MABN", id)
        .input("NGAYKHAM", date)
        .input("GIOKHAM", time)
        .execute("GET_CHITIETPHIENKHAM_DETAIL")
    ).recordset[0];

    return data.MACT;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
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
        .header("HX-Redirect", "/staff/Invoice/failed")
        .status(404)
        .send("Not found Invoice");
    } else {
      const InvoiceURL = `/staff/Invoice/${data.MACT}`;
      res
        .header("HX-Redirect", InvoiceURL)
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
    const Invoice: Invoice = (
      await (await req.db())
        .input("MACT", id)
        .execute("GET_CHITIETPHIENKHAM_BY_ID")
    ).recordset[0];

    const data: Invoice = (
      await (await req.db())
        .input("MABN", Invoice.MABN)
        .input("NGAYKHAM", Invoice.NGAYKHAM)
        .input("GIOKHAM", Invoice.GIOKHAM)
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

export const getInvoiceDetailByIdWithHtmx = async (
  req: Request,
  res: Response
) => {
  try {
    const { MANS, MABN, NGAYKHAM, GIOKHAM } = req.query;

    const data: Invoice = (
      await (await req.db())
        .input("MABN", MABN)
        .input("NGAYKHAM", NGAYKHAM)
        .input("GIOKHAM", GIOKHAM)
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
