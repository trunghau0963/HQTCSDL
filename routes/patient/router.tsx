import { Router } from "express";
import * as elements from "typed-html";
import Home from "../../app/patient/Home/Home";
import Drug from "../../app/patient/Drug/Drug";
import PatientPage from "../../app/patient/patient";
import Dashboard from "../../app/patient/Dashboard/Dashboard";
import Dentist from "../../app/patient/Dentist/Dentist";
import Schedule from "../../app/patient/Schedule/Schedule";
import Profile from "../../app/patient/Profile/Profile";
import AddAppointment from "../../components/Appointment/patientAppointment/addAppoinment";
import Service from "../../app/patient/Service/Service";
import Security from "../../app/patient/Security/Security";
import { patient } from "../auth/router";

const patientRouter = Router();


patientRouter.get("/dashboard", patient, async (req, res) => {
  return res.send(
    <Dashboard/>
  );
});

patientRouter.get("/home", patient, async (req, res) => {
  return res.send(
    <Home/>
  );
});


patientRouter.get("/drug", patient, async (req, res) => {
  return res.send(
    <Drug/>
  );
});

patientRouter.get("/dentist", patient, async (req, res) => {
  return res.send(
    <Dentist/>
  );
});


patientRouter.get("/schedule", patient, async (req, res) => {
  return res.send(
    <Schedule/>
  );
});

patientRouter.get("/information", patient, async (req, res) => {
  return res.send(
    <Profile/>
  );
});

patientRouter.get("/schedule/add_appointment", patient, async (req, res) => {
  return res.send(
    <AddAppointment/>
  );
});

patientRouter.get("/service", patient, async (req, res) => {
  return res.send(
    <Service/>
  );
});

patientRouter.get("/about",patient, async (req, res) => {
  return res.send(
    <Security/>
  );
});



export default patientRouter;
