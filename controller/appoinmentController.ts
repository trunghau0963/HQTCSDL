import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { AppointmentDetailProps } from "../model/model";

export const registerAppointment = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    console.log(input)
    
    const user = (await (await req.db())
      .input("TEN", input.patient_name)
      .input("DIENTHOAI", input.phoneNum)
      .input("NGAYSINH", input.dob)
      .input("DIACHI", input.address)
      .input("MANS", input.dentist_id)
      .input("NGAYKHAM", input.doa)
      .input("GIOKHAM", input.hour)
      .execute("REGISTER_LICHKHAM")).recordset;

    return res
      .header("HX-Redirect", "/patient/schedule/")
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

export const deleteAppointment = async (req: Request, res: Response) => {
  try {
    const {MANS, MABN, NGAYKHAM, GIOKHAM} = req.body

    const user = await (await req.db())
      .input("MANS", MANS)
      .input("NGAYKHAM", NGAYKHAM)
      .input("GIOKHAM", GIOKHAM)
      .execute("DROP_LICHKHAM");
  
      return res
        .header("HX-Redirect", "/patient/appointment")
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

export const updateAppointment = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("SODIENTHOAI", input.SODIENTHOAI)
      .input("MANS_OLD", input.MANS_OLD)
      .input("NGAYKHAM_OLD", input.NGAYKHAM_OLD)
      .input("GIOKHAM_OLD", input.GIOKHAM_OLD)
      .input("MANS_NEW", input.MANS_NEW)
      .input("NGAYKHAM_NEW", input.NGAYKHAM_NEW)
      .input("GIOKHAM_NEW", input.GIOKHAM_NEW)
      .execute("CHANGE_LICHKHAM");
    res
      // .header("HX-Redirect", "/admin/appointment")
      .status(200)
      .json(user.recordset[0])
      .send("successful delete Appointment");
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

export const getAppointment = async (req: Request, res: Response) => {
  try {
    const data: AppointmentDetailProps[] = (
      await (await req.db()).execute("GET_LICHKHAM_DETAIL")
    ).recordset as AppointmentDetailProps[];

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

export const getAppointmentOfDentist = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: AppointmentDetailProps = (
      await (await req.db())
        .input("MANS", id)
        .execute("GET_LICHKHAM_DETAIL_OF_NHASI")
    ).recordset[0];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Appointment of dentist. Please try again later.");
    return undefined;
  }
};

export const getAppointmentOfPatient = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: AppointmentDetailProps = (
      await (await req.db())
        .input("MABN", id)
        .execute("GET_LICHKHAM_DETAIL_FOR_BENHNHAN")
    ).recordset[0];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Appointment of patient. Please try again later.");
    return undefined;
  }
};

export const getAppointmentIsDone = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: AppointmentDetailProps[] = (
      await (await req.db()).execute("GET_LICHKHAM_DETAIL_DONE")
    ).recordset as AppointmentDetailProps[];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Appointment which is done. Please try again later."
    );
    return undefined;
  }
};
export const getAppointmentIsDoneOfPatient = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: AppointmentDetailProps[] = (
      await (await req.db())
      .input("MABN", id)
      .execute("GET_LICHKHAM_DETAIL_DONE_OF_BENHNHAN")
    ).recordset as AppointmentDetailProps[];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Appointment which is done. Please try again later."
    );
    return undefined;
  }
};

export const getAppointmentIsDoneOfDentist = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: AppointmentDetailProps = (
      await (await req.db())
        .input("MANS", id)
        .execute("GET_LICHKHAM_DETAIL_DONE_OF_NHASI")
    ).recordset[0];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Appointment of dentist which is done. Please try again later."
    );
    return undefined;
  }
};

export const getAppointmentNotDone = async (
  req: Request,
  res: Response,
  id: Number
) => {
  try {
    const data: AppointmentDetailProps[] = (
      await (await req.db())
      .input("MABN", id)
      .execute("GET_LICHKHAM_DETAIL_UNFINISHED_OF_BENHNHAN")
    ).recordset as AppointmentDetailProps[];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Appointment which is unfinished. Please try again later."
    );
    return undefined;
  }
};

export const getAppointmentNotDoneOfDentist = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: AppointmentDetailProps[] = (
      await (await req.db())
        .input("MANS", id)
        .execute("GET_LICHKHAM_DETAIL_UNFINISHED_OF_NHASI")
    ).recordset[0];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Appointment which is unfinished. Please try again later."
    );
    return undefined;
  }
};

