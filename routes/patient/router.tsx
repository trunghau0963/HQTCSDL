import { Router } from "express";
import * as elements from "typed-html";
import Home from "../../app/patient/Home/Home";
import Drug from "../../app/patient/Drug/Drug";
import Dashboard from "../../app/patient/Dashboard/Dashboard";
import Dentist from "../../app/patient/Dentist/Dentist";
import ScheduleComponent from "../../app/patient/Schedule/Schedule";
import ProfilePage from "../../app/patient/Profile/Profile";
import AddAppointment from "../../components/Appointment/patientAppointment/addAppoinment";
import Service from "../../app/patient/Service/Service";
import Security from "../../app/patient/Security/Security";
import { patient } from "../auth/router";
import { Patient, Schedule } from "../../model/model";
import middlewareToken from "../../middleware/tokenMiddleware";
import { getPatientById } from "../../controller/patientController";
import jwt, { JwtPayload } from "jsonwebtoken";
import DentistAvailable from "../../components/Appointment/patientAppointment/dentistList";
import {
  getSchedule,
  getScheduleIsFree,
} from "../../controller/scheduleController";

const patientRouter = Router();

patientRouter.get("/dashboard", patient, async (req, res) => {
  return res.send(<Dashboard />);
});

patientRouter.get("/home", patient, async (req, res) => {
  return res.send(<Home />);
});

patientRouter.get("/drug", patient, async (req, res) => {
  return res.send(<Drug />);
});

patientRouter.get("/dentist", patient, async (req, res) => {
  return res.send(<Dentist />);
});

patientRouter.get("/schedule", patient, async (req, res) => {
  return res.send(<ScheduleComponent />);
});

patientRouter.get("/schedule/:date", patient, async (req, res) => {
  console.log(req.query);
  const dentistSchedule: Schedule[] = (await getScheduleIsFree(req, res)) || [];

  const htmlContent = dentistSchedule
    .map((item) => {
      return `
    <div class="row w-auto py-3 m-3">
      <img class="col-sm-3 col-md-3 p-0 rounded-2 w-auto" src={../../public/img/hero-bg.jpg} />
      <div class="col-sm-9 col-md-9">
        <div class="d-flex justify-content-between align-items-center">
          <h1 class="text-4xl">${item.HOTEN}</h1>
          <a href="/patient/schedule/add_appointment" class="btn btn-primary">
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

  console.log(`${htmlContent}`);

  return res.send(htmlContent);
});

patientRouter.get("/information", patient, async (req, res) => {
  let patient: Patient | undefined;
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    patient = (await getPatientById(req, res, data.user.MABN)) as Patient;
    console.log("data: ", patient);
  } catch {}
  return res.send(<ProfilePage data={patient} />);
});

patientRouter.get("/schedule/add_appointment", patient, async (req, res) => {
  return res.send(<AddAppointment />);
});

patientRouter.get("/service", patient, async (req, res) => {
  return res.send(<Service />);
});

patientRouter.get("/about", patient, async (req, res) => {
  return res.send(<Security />);
});

export default patientRouter;
