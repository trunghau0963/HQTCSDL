import { Router } from "express";
import * as elements from "typed-html";
import DentistPage from "../../app/dentist/dentist";
import Dashboard from "../../app/dentist/Dashboard/Dashboard";
import Home from "../../app/dentist/Home/Home";
import Patient from "../../app/dentist/Patient/Patient";
import Schedule from "../../app/dentist/Schedule/Schedule";
import { dentist } from "../auth/router";
import AddAppointment from "../../components/Appointment/patientAppointment/addAppoinment";

const dentistRouter = Router();

dentistRouter.get("/dashboard", dentist, async (req, res) => {
  return res.send(
    <Dashboard/>
  );
});

dentistRouter.get("/home", async (req, res) => {
  return res.send(
    <Home/>
  );
});


dentistRouter.get("/patient", async (req, res) => {
  return res.send(
    <Patient/>
  );
});


dentistRouter.get("/schedule", async (req, res) => {
  return res.send(
    <Schedule/>
  );
});


export default dentistRouter;
