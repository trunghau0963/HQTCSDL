import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { Staff } from "../model/model";

export const createStaff = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("HOTEN", input.name)
      .input("MATKHAU", input.password)
      .input("DIENTHOAI", input.phone)
      .input("NGAYSINH", input.dob)
      .input("DIACHI", input.address)
      .input("ROLE", "NHANVIEN")
      .execute("SIGN_UP");
    res
      .header("HX-Redirect", "/admin/staff")
      .status(200)
      .json(user.recordset[0])
      .send("successful create patient");
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

export const getStaffById = async (req: Request, res: Response, id: string) => {
  try {
    const user: Staff = (
      await (await req.db())
        .input("MANV", id)
        .execute("GET_INFO_NHANVIEN_BY_ID")
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
        .send("Can't get staff by name. Please try again later.");
    }
  }
};

export const getStaffByNameCharacter = async (
  req: Request,
  res: Response,
  character: string
) => {
  try {
    const staff: Staff[] = (
      await (await req.db())
        .input("HOTEN", character)
        .execute("GET_INFO_NHANVIEN_BY_NAME_CHARACTER")
    ).recordset;
    return staff;
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof Error) {
        console.error(error.message);
        return res.status(400).send(error.message);
      }
      return res
        .status(500)
        .send("Can't get staff by name char. Please try again later.");
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
    return staffs;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
    return res.status(500).send("Can't get all staff. Please try again later.");
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
