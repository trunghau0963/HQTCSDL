import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { Schedule } from "../model/model";
import { number } from "joi";

export const addSchedule = async (req: Request, res: Response, url: string) => {
  try {
    const { NGAYKHAM, GIOKHAM, MANS } = req.body;
    console.log(req.body);
    // const formattedGIOKHAM = GIOKHAM.toISOString().split("T")[1].split(".")[0];

    // console.log("format time", formattedGIOKHAM);

    await (await req.db())
      .input("MANS", MANS)
      .input("NGAYKHAM", NGAYKHAM)
      .input("GIOKHAM", GIOKHAM)
      .execute("INSERT_INTO_LICHLAMVIEC");

    console.log("da insert");
    const directNewUrl = `/${url}/schedule`;
    return res
      .header("HX-Redirect", directNewUrl)
      .status(200)
      .send("successful register Schedule");
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed register Schedule', error.message);
      return res.status(400).send('Failed register Schedule, your time or your date is not available');
    }
    return res
      .status(500)
      .send("Something went wrong. Please try again later.");
  }
};

export const deleteSchedule = async (
  req: Request,
  res: Response,
  url: string
) => {
  try {
    const directUrl = `/${url}/schedule`;
    const input = req.body;
    console.log(input);
    const user = await (await req.db())
      .input("MANS", input.MANS)
      .input("NGAYKHAM", input.NGAYKHAM)
      .input("GIOKHAM", input.GIOKHAM)
      .execute("DROP_LICHLAMVIEC");
    
    return res
      .header("HX-Redirect", directUrl)
      .status(200)
      .json(user.recordset[0])
      .send("successful delete Schedule");
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

export const updateSchedule = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("SODIENTHOAI", input.SODIENTHOAI)
      .input("NGAYKHAM_OLD", input.NGAYKHAM_OLD)
      .input("GIOKHAM_OLD", input.GIOKHAM_OLD)
      .input("NGAYKHAM_NEW", input.NGAYKHAM_NEW)
      .input("GIOKHAM_NEW", input.GIOKHAM_NEW)
      .execute("CHANGE_LICHLAMVIEC");
    res
      // .header("HX-Redirect", "/admin/Schedule")
      .status(200)
      .json(user.recordset[0])
      .send("successful delete Schedule");
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

export const getSchedule = async (req: Request, res: Response) => {
  try {
    const data: Schedule[] = (
      await (await req.db()).execute("GET_LICHLAMVIEC_DETAIL")
    ).recordset;

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Schedule information. Please try again later.");
    return undefined;
  }
};

//for calendar

export const getScheduleIsFree = async (req: Request, res: Response) => {
  try {
    const { year, mon, day } = req.query;
    const date = `${year}-${mon}-${day}`;

    console.log(date);
    const getDaysInMonth = (year: number, month: number) => {
      return new Date(year, month, 0).getDate();
    };

    if (getDaysInMonth(Number(year), Number(mon)) < Number(day)) {
      return [];
    }
    console.log("date", date);
    const data: Schedule[] = (
      await (await req.db())
        .input("NGAYKHAM", date)
        .execute("GET_LICHLAMVIEC_DETAIL_FREE_BY_DATE")
    ).recordset as Schedule[];

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Schedule which is free. Please try again later.");
    return undefined;
  }
};
// for button

export const getScheduleIsFreeByDate = async (req: Request, res: Response) => {
  try {
    const { date } = req.query;
    console.log(date);
    const data: Schedule[] = (
      await (await req.db())
        .input("NGAYKHAM", date)
        .execute("GET_LICHLAMVIEC_DETAIL_FREE_BY_DATE")
    ).recordset as Schedule[];
    // console.log(data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Schedule which is free. Please try again later.");
    return undefined;
  }
};

export const getFreeSchedule = async (req: Request, res: Response) => {
  try {
    const data: Schedule[] = (
      await (await req.db()).execute("GET_LICHLAMVIEC_DETAIL_FREE")
    ).recordset;

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Schedule which is free. Please try again later.");
    return undefined;
  }
};

export const getFreeScheduleByName = async (
  req: Request,
  res: Response,
  name: string
) => {
  try {
    const data: Schedule[] = (
      await (await req.db())
        .input("NAME", name)
        .execute("GET_LICHLAMVIEC_DETAIL_FREE_BY_NAME")
    ).recordset;

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Schedule which is free. Please try again later.");
    return undefined;
  }
};

export const getScheduleIsRegistered = async (req: Request, res: Response) => {
  try {
    const data: Schedule[] = (
      await (await req.db()).execute("GET_LICHLAMVIEC_DETAIL_REGISTRED")
    ).recordset as Schedule[];

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Schedule which is registerd. Please try again later."
    );
    return undefined;
  }
};

export const getScheduleOfDentist = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: Schedule[] = (
      await (await req.db())
        .input("MANS", id)
        .execute("GET_LICHLAMVIEC_DETAIL_OF_NHASI")
    ).recordset;
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Schedule of dentist. Please try again later.");
    return undefined;
  }
};

export const getScheduleIsFreeOfDentist = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: Schedule[] = (
      await (await req.db())
        .input("MANS", id)
        .execute("GET_LICHLAMVIEC_DETAIL_FREE_OF_NHASI")
    ).recordset;
    // console.log("data", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Schedule of dentist which is free. Please try again later."
    );
    return undefined;
  }
};

export const getScheduleIsFreeOfDentistByDateAndTime = async (
  req: Request,
  res: Response,
  id: string,
  search: string
) => {
  try {
    const data: Schedule[] = (
      await (await req.db())
        .input("MANS", id)
        .input("NGAYKHAM", search)
        .input("GIOKHAM", search)
        .execute("GET_LICHLAMVIEC_DETAIL_FREE_OF_NHASI_BY_DATE_AND_TIME")
    ).recordset;
    // console.log("data", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Schedule of dentist which is free. Please try again later."
    );
    return undefined;
  }
};

export const getScheduleIsRegisteredOfDentist = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: Schedule[] = (
      await (await req.db())
        .input("MANS", id)
        .execute("GET_LICHLAMVIEC_DETAIL_REGISTRED_OF_NHASI")
    ).recordset;
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Schedule of dentist which is registered. Please try again later."
    );
    return undefined;
  }
};

export const getScheduleOfPatient = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: Schedule[] = (
      await (await req.db())
        .input("MABN", id)
        .execute("GET_LICHKHAM_DETAIL_FOR_BENHNHAN")
    ).recordset;
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Schedule of patient. Please try again later.");
    return undefined;
  }
};

export const getScheduleIsDone = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: Schedule[] = (
      await (await req.db()).execute("GET_LICHKHAM_DETAIL_DONE")
    ).recordset as Schedule[];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error("Can't get Schedule which is done. Please try again later.");
    return undefined;
  }
};

export const getScheduleIsDoneOfDentist = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: Schedule[] = (
      await (await req.db())
        .input("MANS", id)
        .execute("GET_LICHKHAM_DETAIL_DONE_OF_NHASI")
    ).recordset;
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Schedule of dentist which is done. Please try again later."
    );
    return undefined;
  }
};

export const getScheduleNotDone = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: Schedule[] = (
      await (await req.db()).execute("GET_LICHKHAM_DETAIL_UNFINISHED")
    ).recordset as Schedule[];
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Schedule which is unfinished. Please try again later."
    );
    return undefined;
  }
};

export const getScheduleNotDoneOfDentist = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: Schedule[] = (
      await (await req.db())
        .input("MANS", id)
        .execute("GET_LICHKHAM_DETAIL_UNFINISHED_OF_NHASI")
    ).recordset;
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
    console.error(
      "Can't get Schedule which is unfinished. Please try again later."
    );
    return undefined;
  }
};
