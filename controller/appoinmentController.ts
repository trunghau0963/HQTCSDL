import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { AppointmentDetailProps } from "../model/model";
import { Appointment, AppointmentDetail } from "../model/model";

export const registerAppointment = async (
  req: Request,
  res: Response,
  url: string
) => {
  try {
    const input = req.body;
    console.log(input);

    const user = (
      await (await req.db())
        .input("TEN", input.patient_name)
        .input("DIENTHOAI", input.phoneNum)
        .input("NGAYSINH", input.dob)
        .input("DIACHI", input.address)
        .input("MANS", input.MANS)
        .input("NGAYKHAM", input.doa)
        .input("GIOKHAM", input.hour)
        .execute("REGISTER_LICHKHAM")
    ).recordset;

    console.log("success register appointment");
    // /patient/schedule/

    const directNewUrl = `${url}`;
    return res
      .header("HX-Redirect", directNewUrl)
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
    const { MANS, MABN, NGAYKHAM, GIOKHAM } = req.body;

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

export const deleteAppointmentHtmx = async (req: Request, res: Response) => {
  try {
    const { MANS, MABN, NGAYKHAM, GIOKHAM } = req.body;

    console.log("query", req.body);

    const user = await (await req.db())
      .input("MANS", MANS)
      .input("NGAYKHAM", NGAYKHAM)
      .input("GIOKHAM", GIOKHAM)
      .execute("DROP_LICHKHAM");
    return res
      .header("HX-Redirect", "/dentist/schedule")
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
    const data: AppointmentDetail[] = (
      await (await req.db())
        .input("MANS", id)
        .execute("GET_LICHKHAM_DETAIL_OF_NHASI")
    ).recordset;
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

export const getAppointmentIsDone = async (req: Request, res: Response) => {
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

export const getAppointmentUnfinished = async (req: Request, res: Response) => {
  try {
    const data: AppointmentDetail[] = (
      await (await req.db()).execute("GET_LICHKHAM_DETAIL_UNFINISHED")
    ).recordset as AppointmentDetail[];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Appointment which is Unfinished. Please try again later."
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
    const data: AppointmentDetail[] = (
      await (await req.db())
        .input("MABN", id)
        .execute("GET_LICHKHAM_DETAIL_DONE_OF_BENHNHAN")
    ).recordset as AppointmentDetail[];
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
    const data: AppointmentDetail[] = (
      await (await req.db())
        .input("MANS", id)
        .execute("GET_LICHKHAM_DETAIL_DONE_OF_NHASI")
    ).recordset as AppointmentDetail[];
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
    const data: AppointmentDetail[] = (
      await (await req.db())
        .input("MANS", id)
        .execute("GET_LICHKHAM_DETAIL_UNFINISHED_OF_NHASI")
    ).recordset as AppointmentDetail[];
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

export const directNewUrl = async (req: Request, res: Response) => {
  try {
    const { MANS, NGAYKHAM } = req.body;
    console.log("MANS", MANS);
    console.log("NGAYKHAM: ", NGAYKHAM);

    const data: AppointmentDetail = (
      await (await req.db())
        .input("MANS", MANS)
        .input("NGAYKHAM", NGAYKHAM)
        .execute("GET_LICHKHAM_DETAIL_OF_NHASI_BY_DATE")
    ).recordset[0];

    console.log("data", data);
    const parts = data.NGAYKHAM.toLocaleDateString().split("/");
    const formattedDate = `${parts[0]}-${parts[1]}-${parts[2]}`;
    // console.log("formattedDate", formattedDate);
    if (!data || data.MABN === undefined || data.MABN === null) {
      res
        .header("HX-Redirect", "/dentist/schedule/failed")
        .status(404)
        .send("Not found schedule");
    } else {
      const scheduleURL = `/dentist/schedule/${data.MABN}/${formattedDate}`;
      res
        .header("HX-Redirect", scheduleURL)
        .status(200)
        .send("successful found schedule");
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

export const getAppointmentOfDentistByDate = async (
  req: Request,
  res: Response
) => {
  try {
    const { MANS, NGAYKHAM } = req.query;
    console.log("MANS", MANS);
    console.log("NGAYKHAM: ", NGAYKHAM);

    const data: AppointmentDetail = (
      await (await req.db())
        .input("MANS", MANS)
        .input("NGAYKHAM", NGAYKHAM)
        .execute("GET_LICHKHAM_DETAIL_OF_NHASI_BY_DATE")
    ).recordset[0];

    // console.log("data", data);
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

export const getAppointmentPatientByDate = async (
  req: Request,
  res: Response
) => {
  try {
    // console.log("getAppointmentPatientByDate")
    const { id, date } = req.params;
    console.log("MABN", id);
    console.log("NGAYKHAM", date);

    const data: AppointmentDetail = (
      await (await req.db())
        .input("MABN", id)
        .input("NGAYKHAM", date)
        .execute("GET_LICHKHAM_DETAIL_FOR_BENHNHAN_BY_DATE")
    ).recordset[0];

    // console.log("data", data);
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
