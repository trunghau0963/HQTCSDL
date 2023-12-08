import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { Invoice } from "../model/model";

export const addInvoice = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("MABN", input.MABN)
      .input("MANS", input.MANS)
      .input("TRIEUCHUNG", input.TRIEUCHUNG)
      .input("CHANDOAN", input.CHANDOAN)
      .input("NGAYKHAM", input.NGAYKHAM)
      .execute("INSERT_INTO_CHITIETPHIENKHAM");
    res
      // .header("HX-Redirect", "/admin/appointment")
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
      throw new Error(error.message);
    }
    console.error("Can't get Appointment information. Please try again later.");
    return undefined;
  }
};

export const getInvoiceDetail = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const data: Invoice = (
      await (await req.db())
        .input("MABN", input.id)
        .input("NGAYKHAM", input.date)
        .input("GIOKHAM", input.time)
        .execute("GET_CHITIETPHIENKHAM_DETAIL")
    ).recordset[0];
    console.log("Invoice detail", data);
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
