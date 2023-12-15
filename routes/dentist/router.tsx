import { Router } from "express";
import * as elements from "typed-html";
import DentistPage from "../../app/dentist/dentist";
import Dashboard from "../../app/dentist/Dashboard/Dashboard";
import Home from "../../app/dentist/Home/Home";
import Patient from "../../app/dentist/Patient/Patient";
import SchedulePage from "../../app/dentist/Schedule/Schedule";
import { dentist } from "../auth/router";
import { Dentist, Schedule } from "../../model/model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getDentistById } from "../../controller/dentistController";
import ProfilePage from "../../app/dentist/Profile/Profile";
import {
  getScheduleOfDentist,
  getScheduleIsFreeOfDentist,
  getScheduleIsRegisteredOfDentist,
} from "../../controller/scheduleController";

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
