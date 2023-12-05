import { Router } from "express";
import * as elements from "typed-html";
import LandingPage from "../../app/landing/LandingPage";
import Info from "../../components/info/info";
import Kham from "../../components/kham/kham";
import Checkappointment from "../../components/checkappointment";
import Calendar from "../../components/Appointment/patientAppointment/calendar";

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  return res.send(<LandingPage />);
});

indexRouter.get("/info", async (req, res) => {
  return res.send(
    <Info/>
  );
});

indexRouter.get("/kham", async (req, res) => {
  return res.send(
    <Kham/>
  );
});

indexRouter.get("/calendar", async (req, res) => {
  return res.send(
    <Calendar/>
  );
});

indexRouter.get("/checkappointment", async (req, res) => {
  return res.send(
    <Checkappointment/>
  );
});

export default indexRouter;
