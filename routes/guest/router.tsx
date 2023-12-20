import { NextFunction, Request, Response, Router } from "express";
import { getAllDentist } from "../../controller/dentistController";
import { Dentist, Schedule, Service } from "../../model/model";
import * as elements from "typed-html";
import LandingPage from "../../app/landing/landing";
import HomeComponent from "../../components/Home/Home";
import {
  getFreeSchedule,
  getScheduleIsFree,
  getScheduleIsFreeByDate,
  getScheduleIsFreeOfDentist,
  getScheduleIsRegisteredOfDentist,
} from "../../controller/scheduleController";
import { registerAppointment } from "../../controller/appoinmentController";
import { getService } from "../../controller/serviceController";
import {
  GuestAddAppointment,
  getScheduleDentist,
} from "../../components/Guest/function";
import {
  GetYearFreeSchedule,
  GetFreeSchedule,
  ListSchedule,
} from "../../components/Home/functionHome";
import PreviewAppointment from "../../app/staff/Invoice/Preview/previewAppointmentCard";

const guestRouter = Router();

guestRouter.get("/", async (req, res) => {
  let listDentist: Dentist[] = [];
  let listService: Service[] = [];

  listDentist = (await getAllDentist(req, res)) as Dentist[];
  listService = (await getService(req, res)) as Service[];
  return res.send(
    <LandingPage>
      <HomeComponent
        listDentist={listDentist}
        listService={listService}
        role={"guest"}
      />
    </LandingPage>
  );
});

guestRouter.get("/dentist-schedule", async (req, res) => {
  const { MANS, HOTENNHASI } = req.query;
  const idDentist = MANS as string;
  const nameOfDentist = HOTENNHASI as string;

  const schedules: Schedule[] =
    ((await getScheduleIsFreeOfDentist(req, res, idDentist)) as Schedule[]) ||
    [];

  const scheduleRegistered: Schedule[] =
    ((await getScheduleIsRegisteredOfDentist(
      req,
      res,
      idDentist
    )) as Schedule[]) || [];
  if (schedules.length === 0 && scheduleRegistered.length === 0)
    return res.send("No schedule is registered!");
  return res.send(
    getScheduleDentist({
      idDentist,
      nameOfDentist,
      schedules,
      scheduleRegistered,
    })
  );
});

guestRouter.get("/calendar-schedule", async (req, res) => {
  try {
    const dentistSchedule: Schedule[] =
      (await getScheduleIsFreeByDate(req, res)) || [];

    if (dentistSchedule.length === 0) {
      return res.send(
        `<h1 class="text-danger">Không tìm thấy lịch khám trong ngày</h1>`
      );
    }

    return res.send(<ListSchedule dentistSchedule={dentistSchedule} />);
  } catch (error) {
    console.log(error);
  }
});

guestRouter.get("/free-schedule", async (req, res) => {
  let listFreeSchedule: Schedule[] =
    ((await getFreeSchedule(req, res)) as Schedule[]) || [];

  const uniqueYears = new Set();

  listFreeSchedule.forEach((schedule) => {
    const date = new Date(schedule.NGAYKHAM);
    const year = date.getFullYear();

    uniqueYears.add(year);
  });

  const uniqueDates = new Set();

  listFreeSchedule.forEach((schedule) => {
    const date = new Date(schedule.NGAYKHAM);
    uniqueDates.add(date.toISOString().split("T")[0]);
  });
  const yearsArray = Array.from(uniqueYears) as string[];
  const daysArray = Array.from(uniqueDates) as string[];

  return res.send(
    <GetYearFreeSchedule yearsArray={yearsArray} daysArray={daysArray} />
  );
});

guestRouter.post("/add-new-appointment", async (req, res) => {
  registerAppointment(req, res, "/");
});

guestRouter.get("/guest/schedule/date", async (req, res) => {
  try {
    const dentistSchedule: Schedule[] =
      (await getScheduleIsFree(req, res)) || [];

    if (dentistSchedule.length === 0) {
      return res.send(
        `<h1 class="text-danger">Không tìm thấy lịch khám trong ngày</h1>`
      );
    }

    const htmlContent = dentistSchedule
      .map((item) => {
        return `
      <div class="row w-auto py-3 m-3">
        <img class="col-sm-3 col-md-3 p-0 rounded-2 w-auto" />
        <div class="col-sm-9 col-md-9">
          <div class="d-flex justify-content-between align-items-center">
            <h1 class="text-4xl">${item.HOTEN}</h1>
            <a 
              href="/guest/schedule/date/${item.MANS}/${item.HOTEN}/${
          item.NGAYKHAM
        }/${item.GIOKHAM}" 
              class="btn btn-primary">
              <h1 class="text-lg text-success">Available</h1>
            </a>
          </div>
          <h2 class="fw-lighter text-2xl">${
            item.NGAYKHAM.toISOString().split("T")[0]
          }</h2>
          <h2 class="fw-lighter text-xl">${
            item.GIOKHAM.toISOString().split("T")[1].split(".")[0]
          }</h2>
        </div>
      </div>`;
      })
      .join("");

    return res.send(htmlContent);
  } catch (error) {
    console.log(error);
  }
});
guestRouter.get("/guest/schedule/date/add_appointment", async (req, res) => {
  try {
    let detailSchedule: Schedule = {
      MANS: "",
      HOTEN: "",
      NGAYKHAM: new Date(),
      GIOKHAM: new Date(),
    };
    if (Object.entries(req.query).length !== 0) {
      detailSchedule.MANS = (req.query.MANS as string) || "";
      detailSchedule.HOTEN = (req.query.HOTEN as string) || "";
      detailSchedule.NGAYKHAM = new Date(req.query.NGAYKHAM as string) || "";
      detailSchedule.GIOKHAM = new Date(req.query.GIOKHAM as string) || "";
    }
    return res.send(<GuestAddAppointment detailSchedule={detailSchedule} />);
  } catch (error) {
    console.log(error);
  }
});

guestRouter.get(
  "/guest/schedule/date/:MANS/:HOTEN/:NGAYKHAM/:GIOKHAM",
  async (req, res) => {
    try {
      const { MANS, HOTEN, NGAYKHAM, GIOKHAM } = req.params;

      return res
        .header(
          "HX-Redirect",
          `/guest/schedule/date/add_appointment?MANS=${encodeURIComponent(
            MANS
          )}&HOTEN=${encodeURIComponent(HOTEN)}&NGAYKHAM=${encodeURIComponent(
            NGAYKHAM
          )}&GIOKHAM=${encodeURIComponent(GIOKHAM)}`
        )
        .json("Directed")
        .status(200);
    } catch (error) {
      console.log(error);
    }
  }
);

guestRouter.post("/guest/schedule/date/add_appointment", async (req, res) => {
  try {
    const input = req.body;

    const user = (
      await (await req.db())
        .input("TEN", input.patient_name)
        .input("DIENTHOAI", input.phoneNum)
        .input("NGAYSINH", input.dob)
        .input("DIACHI", input.address)
        .input("MANS", input.dentist_id)
        .input("NGAYKHAM", input.doa)
        .input("GIOKHAM", input.hour)
        .execute("REGISTER_LICHKHAM")
    ).recordset[0];

    return res
      .header(
        "HX-Redirect",
        `/guest/schedule/previewAppointment?MANS=${encodeURIComponent(
          user.MANS
        )}&HOTEN=${encodeURIComponent(
          user.HOTENNHASI
        )}&NGAYKHAM=${encodeURIComponent(
          user.NGAYKHAM
        )}&GIOKHAM=${encodeURIComponent(user.GIOKHAM)}`
      )
      .json({ message: "Success" })
      .status(200);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
  }
});

guestRouter.get("/guest/schedule/previewAppointment", async (req, res) => {
  try {
    let infoSchedule: Schedule = {
      MANS: "",
      HOTEN: "",
      NGAYKHAM: new Date(),
      GIOKHAM: new Date(),
    };
    if (Object.entries(req.query).length !== 0) {
      infoSchedule.MANS = (req.query.MANS as string) || "";
      infoSchedule.HOTEN = (req.query.HOTEN as string) || "";
      infoSchedule.NGAYKHAM = new Date(req.query.NGAYKHAM as string) || "";
      infoSchedule.GIOKHAM = new Date(req.query.GIOKHAM as string) || "";
    }

    const detailSchedule = (
      await (await req.db())
        .input("MANS", infoSchedule.MANS)
        .input("NGAYKHAM", infoSchedule.NGAYKHAM.toISOString().split("T")[0])
        .input(
          "GIOKHAM",
          infoSchedule.GIOKHAM.toISOString().split("T")[1].split(".")[0]
        )
        .execute("GET_LICHKHAM_DETAIL_BY_ID_DATE")
    ).recordset[0];

    return res.send(
      <PreviewAppointment detailSchedule={detailSchedule} url="/" />
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
  }
});
export default guestRouter;
