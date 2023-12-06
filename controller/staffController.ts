import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { Staff } from "../model/model";

export const createStaff = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user: Staff = {
      ...(
        await (await req.db())
          .input("HOTEN", input.name)
          .input("MATKHAU", input.password)
          .input("DIENTHOAI", input.phone)
          .input("NGAYSINH", input.dob)
          .input("DIACHI", input.address)
          .input("ROLE", "staff")
          .execute("SIGN_UP")
      ).recordset[0],
    };
    console.log(user);
    res.status(200).send("successful create staff");
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

export const getStaffById = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const user: Staff = (
      await (await req.db())
        .input("MANV", id)
        .execute("GET_INFO_NHANVIEN_BY_ID")
    ).recordset[0];

    console.log(user);
    return res.json("successful get staff").status(201);
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

export const getStaffByName = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const user: Staff = (
      await (await req.db())
        .input("HOTEN", name)
        .execute("GET_INFO_NHANVIEN_BY_NAME")
    ).recordset[0];
    console.log(user);
    return res.json("successful get staff").status(201);
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

export const getStaffByPhone = async (req: Request, res: Response) => {
  const { phone } = req.body;
  try {
    const user: Staff = (
      await (await req.db())
        .input("DIENTHOAI", phone)
        .execute("GET_INFO_NHANVIEN_BY_PHONENUMBER")
    ).recordset[0];
    console.log(user);
    return res.json("successful get staff").status(201);
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

export const getAllStaff = async (req: Request, res: Response) => {
  try {
    const staffs: Staff[] = (
      await (await req.db()).execute("GET_INFO_NHANVIEN")
    ).recordset as Staff[];
    console.log(staffs);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
    return res
      .status(500)
      .send("Can't get all staff. Please try again later.");
  }
};

export const blockStaff = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const user: Staff = (
      await (await req.db()).input("MANV", id).execute("BLOCK_ACCOUNT_NHANVIEN")
    ).recordset[0];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
    return res.status(500).send("Somthg went wrong. Please try again later.");
  }
};
