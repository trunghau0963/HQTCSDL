import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { drugProps, Staff } from "../model/model";

export const addDrug = async (req: Request, res: Response, url: string) => {
  try {
    const input = req.body;
    const directUrl = `/${url}/drug`;
    const drug: drugProps = {
      ...(
        await (await req.db())
          .input("TENTHUOC", input.name)
          .input("DONVI", input.unit)
          .input("CHIDINH", input.drugIndicate)
          .input("SOLUONG", input.quantity)
          .input("NGAYHETHAN", input.exp)
          .input("DONGIA", input.price)
          .execute("INSERT_INTO_THUOC")
      ).recordset[0],
    };

    console.log(drug);

    return res
      .header("HX-Redirect", "/admin/drug")
      .json({ message: "Success" })
      .status(200);
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

export const getDrugInfo = async (
  req: Request,
  res: Response
): Promise<drugProps[] | undefined> => {
  try {
    const drugs: drugProps[] = (
      await (await req.db()).execute("GET_INFO_THUOC")
    ).recordset;

    return drugs;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get drug information. Please try again later.");
    return undefined;
  }
};

export const getNameOfDrug = async (req: Request, res: Response) => {
  try {
    const drugs: drugProps[] = (
      await (await req.db()).execute("GET_INFO_THUOC")
    ).recordset as drugProps[];
    const drugInfoArray: { name: string; quantity: number }[] = drugs.map(
      (drug) => ({
        name: drug.TENTHUOC.toString(),
        quantity: drug.SOLUONG || 0, // Use 0 if SOLUONG is undefined
      })
    );
    // const nameArray: string[] = drugs.map((drug) => drug.TENTHUOC.toString());
    return drugInfoArray;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get drug information. Please try again later.");
    return undefined;
  }
};

export const getDrugByName = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    let drugs: drugProps[] = [];
    if (name !== "") {
      drugs = (
        await (await req.db())
          .input("TENTHUOC", name)
          .execute("GET_INFO_THUOC_BY_NAME")
      ).recordset;
    } else {
      drugs = (await (await req.db()).execute("GET_INFO_THUOC")).recordset;
    }
    console.log(drugs);
    return drugs;
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send(error.message);
      }
      return res
        .status(500)
        .send("Can't get info of patients. Please try again later.");
    }
  }
};

export const getDrugByNameChar = async (
  req: Request,
  res: Response,
  name: string
) => {
  try {
    let drugs: drugProps[] = [];
    if (name !== "") {
      drugs = (
        await (await req.db())
          .input("TENTHUOC", name)
          .execute("GET_INFO_THUOC_BY_NAME_CHARACTER")
      ).recordset;
    } else {
      drugs = (await (await req.db()).execute("GET_INFO_THUOC")).recordset;
    }
    console.log(drugs);
    return drugs;
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send(error.message);
      }
      return res
        .status(500)
        .send("Can't get info of patients. Please try again later.");
    }
  }
};

export const deleteDrug = async (req: Request, res: Response, url: string) => {
  const { IDC, IDD } = req.body;
  const directUrl = `/${url}/drug`;
  try {
    console.log(IDC);
    await (await req.db())
      .input("MALO", IDC)
      .input("MATHUOC", IDD)
      .execute("DROP_THUOC");

    return res
      .header("HX-Redirect", directUrl)
      .json({ message: "Success" })
      .status(200);
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send(error.message);
      }
      return res
        .status(500)
        .send("Delete drug failed. Please try again later.");
    }
  }
};

export const updateInfoDrug = async (
  req: Request,
  res: Response,
  url: string
) => {
  const info = req.body;
  const directUrl = `/${url}/drug`;
  try {
    console.log(req.body);
    await (await req.db())
      .input("MALO", info.IDC)
      .input("MATHUOC", info.IDD)
      .input("TENTHUOC", info.name)
      .input("DONVI", info.unit)
      .input("CHIDINH", info.assign)
      .input("SOLUONG", info.quantity)
      .input("NGAYHETHAN", info.exp)
      .input("DONGIA", info.price)
      .execute("UPDATE_INFO_THUOC");

    return res
      .header("HX-Redirect", directUrl)
      .json({ message: "Success" })
      .status(200);
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send(error.message);
      }
      return res
        .status(500)
        .send("Can't get staff by id. Please try again later.");
    }
  }
};
