import { Router } from "express";
import * as elements from "typed-html";
import DentistPage from "../../app/dentist/dentist";
import Dashboard from "../../app/dentist/Dashboard/Dashboard";
import Home from "../../app/dentist/Home/Home";
import Patient from "../../app/dentist/Patient/Patient";
import SchedulePage from "../../app/dentist/Schedule/Schedule";
import { dentist } from "../auth/router";
import { AppointmentDetail, Dentist, Schedule } from "../../model/model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getDentistById } from "../../controller/dentistController";
import ProfilePage from "../../app/dentist/Profile/Profile";
import NullPage from "../../components/Error/NullPage";
import {
  getScheduleOfDentist,
  getScheduleIsFreeOfDentist,
  getScheduleIsRegisteredOfDentist,
} from "../../controller/scheduleController";
import {
  directNewUrl,
  getAppointmentOfDentistByDate,
  getAppointmentPatientByDate,
} from "../../controller/appoinmentController";
import { GetAppointment } from "../../components/Dentist/Schedule/functionSchedule";

const dentistRouter = Router();

dentistRouter.get("/dashboard", dentist, async (req, res) => {
  return res.send(<Dashboard />);
});

dentistRouter.get("/home", dentist, async (req, res) => {
  return res.send(<Home />);
});

dentistRouter.get("/patient", dentist, async (req, res) => {
  return res.send(<Patient />);
});

dentistRouter.get("/schedule", dentist, async (req, res) => {
  let scheduleFree: Schedule[] = [];
  let scheduleRegistered: Schedule[] = [];

  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    scheduleFree = (await getScheduleIsFreeOfDentist(
      req,
      res,
      data.user.MANS
    )) as Schedule[];
    scheduleRegistered = (await getScheduleIsRegisteredOfDentist(
      req,
      res,
      data.user.MANS
    )) as Schedule[];
  } catch {}
  return res.send(
    <SchedulePage Free={scheduleFree} Registered={scheduleRegistered} />
  );
});

dentistRouter.post("/schedule", dentist, directNewUrl);
dentistRouter.get("/schedule/:id/:date", dentist, async (req, res) => {
  let appointments = (await getAppointmentPatientByDate(
    req,
    res
  )) as AppointmentDetail;
  console.log("appointments: ", appointments);
});

dentistRouter.get("/schedule/appointment", dentist, async (req, res) => {
  const appointment: AppointmentDetail = (await getAppointmentOfDentistByDate(
    req,
    res
  )) as AppointmentDetail;
  const time = new Date(appointment.GIOKHAM).toLocaleDateString();
  console.log("appointment: ", appointment);
  console.log(
    "time",
    appointment.GIOKHAM.toISOString().split("T")[1].split(".")[0]
  );

  if (!appointment.MABN) {
    return res.send(
      `<h1 class="text-danger">Không tìm thấy lịch khám trong ngày</h1>`
    );
  }
  const htmlContent = (appointment: AppointmentDetail) => {
    return `
  <form id="get-appointment-form" hx-post="/dentist/schedule">
    <div class="p-6 my-3 mx-3">
      <div class="d-flex align-items-center my-3">
        <img
          src="/icons/date.svg"
          alt=""
          style="width: 1.5rem; height: 1.5rem;"
        />
        <h4 class="fw-bold ms-4">Date:</h4>
        <p class="ms-4">${appointment.NGAYKHAM.toDateString()}</p>
      </div>
      

      <div class="d-flex align-items-center my-3">
        <img
          src="/icons/time.svg"
          alt=""
          style="width: 1.5rem; height: 1.5rem;"
        />
        <h4 class="fw-bold ms-4">Time:</h4>
        <p class="ms-4">${
          appointment.GIOKHAM.toISOString().split("T")[1].split(".")[0]
        }</p>
      </div>
      <div class="d-flex align-items-center my-3">
        <img
          src="/icons/location.svg"
          alt=""
          style="width: 1.5rem; height: 1.5rem;"
        />
        <h4 class="fw-bold ms-4">Location:</h4>
        <p class="ms-4">${appointment.DIACHI}</p>
      </div>
      <div class="d-flex align-items-center my-3">
        <img
          src="/icons/location.svg"
          alt=""
          style="width: 1.5rem; height: 1.5rem;"
        />
        <h4 class="fw-bold ms-4">Description:</h4>
      </div>
    </div>
    <div class="row"> 
      <div class="form-outline mb-4 col-6">
        <label class="form-label font-weight-bold d-flex" for="HOTENNHASI">
          Name of Dentist 
          <img
          src="/icons/warning.svg"
          class="mx-2"
          style="width: 20px; height: 20px;"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="ID : ${appointment.MANS}"
          />
        </label>
        <input
          type="text"
          id="HOTENNHASI"
          class="form-control form-control-lg"
          name="HOTENNHASI"
          required=""
          value="${appointment.HOTENNHASI}"
          placeholder="${appointment.HOTENNHASI}"
          readonly="true"
        />
      </div>
      <div class="form-outline mb-4 col-6">
        <label
          class="form-label font-weight-bold d-flex"
          for="HOTENBENHNHAN"
        >
          Name of Patient
          <img
          src="/icons/warning.svg"
          class="mx-2"
          style="width: 20px; height: 20px;"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="ID : ${appointment.MABN}"
          />
        </label>
        <input
          type="text"
          id="HOTENBENHNHAN"
          class="form-control form-control-lg"
          name="HOTENBENHNHAN"
          required=""
          value="${appointment.HOTENBENHNHAN}"
          placeholder="${appointment.HOTENBENHNHAN}"
          readonly="true"
          />
      </div>
    </div>
    <div class="form-outline mb-4">
      <label class="form-label font-weight-bold" for="DIENTHOAI">
        Phone of Patient <span class="text-danger"></span>
      </label>
      <input
        type="text"
        id="DIENTHOAI"
        class="form-control form-control-lg"
        name="DIENTHOAI"
        required=""
        value="${appointment.DIENTHOAI}"
        placeholder="${appointment.DIENTHOAI}"
        readonly="true"
      />
    </div>
    <div class="form-outline mb-4">
      <label class="form-label" for="NGAYSINH">
        Date of Birth
      </label>
      <input
        type="text"
        id="NGAYSINH"
        class="form-control form-control-lg"
        name="NGAYSINH"
        value="${appointment.NGAYSINH.toLocaleDateString()}"
        readonly="true"
        placeholder="${appointment.NGAYSINH.toLocaleDateString()}"
      />
    </div>
  </form>`;
  };

  return res.send(htmlContent(appointment));
});

dentistRouter.get("/schedule/failed", dentist, async (req, res) => {
  return res.send(<NullPage title="Appointment" />);
});

dentistRouter.get("/information", dentist, async (req, res) => {
  let dentist: Dentist | undefined;
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    console.log("data: ", data.user.HOTEN);
    dentist = (await getDentistById(req, res, data.user.MANS)) as Dentist;
    console.log("dentist: ", dentist);
  } catch {}
  return res.send(<ProfilePage data={dentist} />);
});

export default dentistRouter;
