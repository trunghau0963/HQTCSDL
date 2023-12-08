import { getDatabase } from "../config/config";
import { getRole } from "../routes/auth/router";
import { Request, RequestHandler, response, Response } from "express";
import { Schedule } from "../model/model";

export const addSchedule = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("MANS", input.MANS)
      .input("NGAYKHAM", input.NGAYKHAM)
        .input("GIOKHAM", input.GIOKHAM)
      .execute("INSERT_INTO_LICHLAMVIEC");
    res
      .header("HX-Redirect", "/admin/schedule")
      .status(200)
      .json(user.recordset[0])
      .send("successful register Schedule");
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

export const deleteSchedule = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const user = await (await req.db())
      .input("MANS", input.MANS)
      .input("NGAYKHAM", input.NGAYKHAM)
      .input("GIOKHAM", input.GIOKHAM)
      .execute("DROP_LICHLAMVIEC");
    res
      .header("HX-Redirect", "/admin/schedule")
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
    ).recordset as Schedule[];

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

export const getScheduleIsFree = async (req: Request, res: Response) => {
    try {
      const data: Schedule[] = (
        await (await req.db()).execute("GET_LICHLAMVIEC_DETAIL_FREE")
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
      console.error("Can't get Schedule which is registerd. Please try again later.");
      return undefined;
    }
  };

export const getScheduleOfDentist = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: Schedule = (
      await (await req.db())
        .input("MANS", id)
        .execute("GET_LICHLAMVIEC_DETAIL_FREE_OF_NHASI")
    ).recordset[0];
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
      const data: Schedule = (
        await (await req.db())
          .input("MANS", id)
          .execute("GET_LICHLAMVIEC_DETAIL_OF_NHASI")
      ).recordset[0];
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        throw new Error(error.message);
      }
      console.error("Can't get Schedule of dentist which is free. Please try again later.");
      return undefined;
    }
  };

  export const getScheduleIsRegisteredOfDentist = async (
    req: Request,
    res: Response,
    id: string
  ) => {
    try {
      const data: Schedule = (
        await (await req.db())
          .input("MANS", id)
          .execute("GET_LICHLAMVIEC_DETAIL_REGISTRED_OF_NHASI")
      ).recordset[0];
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        throw new Error(error.message);
      }
      console.error("Can't get Schedule of dentist which is registered. Please try again later.");
      return undefined;
    }
  };

export const getScheduleOfPatient = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: Schedule = (
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
    console.error(
      "Can't get Schedule which is done. Please try again later."
    );
    return undefined;
  }
};

export const getScheduleIsDoneOfDentist = async (
  req: Request,
  res: Response,
  id: string
) => {
  try {
    const data: Schedule = (
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
    const data: Schedule = (
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
      "Can't get Schedule which is unfinished. Please try again later."
    );
    return undefined;
  }
};

