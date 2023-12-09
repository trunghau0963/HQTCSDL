import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { Service } from "../model/model";

export const addService = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("TENDV", input.TENDV)
      .input("DONGIA", input.DONGIA)
      .execute("INSERT_INTO_DICHVU");
    res
      .header("HX-Redirect", "/admin/service")
      .status(200)
      .json(user.recordset[0])
      .send("successful add drug into Service");
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

export const deleteService = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    console.log(input.MADV);
    const user = await (await req.db())
      .input("MADV", input.MADV)
      .execute("DROP_DICHVU");
    res
      .header("HX-Redirect", "/admin/service")
      .status(200)
      .json(user.recordset[0])
      .send("successful delete drug into Service");
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

export const updateService = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("MADV", input.MADV)
      .input("TENDV", input.TENDV)
      .input("DONGIA", input.DONGIA)
      .execute("UPDATE_INFO_DICHVU");
    res
      .header("HX-Redirect", "/admin/service")
      .status(200)
      .json(user.recordset[0])
      .send("successful delete drug into Service");
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

export const getService = async (req: Request, res: Response) => {
  try {
    const data: Service[] = (await (await req.db()).execute("GET_INFO_DICHVU"))
      .recordset as Service[];

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Service information. Please try again later.");
    return undefined;
  }
};

export const getServiceById = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: Service = (
      await (await req.db()).input("MADV", id).execute("GET_INFO_DICHVU_BY_ID")
    ).recordset[0];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Service information. Please try again later.");
    return undefined;
  }
};

export const getServiceByName = async (
  req: Request,
  res: Response,
  name: string
) => {
  try {
    const data: Service = (
      await (await req.db())
        .input("TENDV", name)
        .execute("GET_INFO_DICHVU_BY_NAME")
    ).recordset[0];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Service information. Please try again later.");
    return undefined;
  }
};
