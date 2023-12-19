import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { serviceIndicators } from "../model/model";

export const addServiceIndicators = async (
  req: Request,
  res: Response,
  url: string
) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("MACT", input.MACT)
      .input("TENDV", input.TENDV)
      .execute("INSERT_INTO_DICHVUCHIDINH");
    const directNewUrl = `${url}`;
    res
      .header("HX-Redirect", directNewUrl)
      .status(200)
      .json(user.recordset[0])
      .send("successful add drug into ServiceIndicators");
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

export const deleteServiceIndicators = async (req: Request, res: Response, url: string) => {
  try {
    const input = req.body;
    console.log("input", input);
    const user = await (await req.db())
      .input("MACT", input.MACT)
      .input("MADV", input.MADV)
      .execute("DROP_DICHVUCHIDINH");
    const directNewUrl = `${url}`;
    res
      .header("HX-Redirect", directNewUrl)
      .status(200)
      .json(user.recordset[0])
      .send("successful delete drug into ServiceIndicators");
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

export const updateServiceIndicators = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("MADV", input.MADV)
      .input("TENDV", input.TENDV)
      .input("DONGIA", input.DONGIA)
      .execute("UPDATE_INFO_DICHVU");
    res
      .header("HX-Redirect", "/admin/serviceIndicators")
      .status(200)
      .json(user.recordset[0])
      .send("successful delete drug into ServiceIndicators");
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

export const getServiceIndicators = async (req: Request, res: Response) => {
  try {
    const data: serviceIndicators[] = (
      await (await req.db()).execute("GET_DICHVUCHIDINH")
    ).recordset as serviceIndicators[];

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get ServiceIndicators information. Please try again later."
    );
    return undefined;
  }
};

export const getServiceIndicatorsById = async (
  req: Request,
  res: Response,
  id?: string
) => {
  try {
    const data: serviceIndicators[] = (
      await (await req.db())
        .input("MACT", id)
        .execute("GET_DICHVUCHIDINH_DETAIL")
    ).recordset;
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get ServiceIndicators information. Please try again later."
    );
    return undefined;
  }
};
