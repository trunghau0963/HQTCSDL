import { NextFunction, Request, Response, Router } from "express";
import { getAllDentist } from "../../controller/dentistController";
import { Dentist, Schedule, Service } from "../../model/model";
import * as elements from "typed-html";
import LandingPage from "../../app/landing/landing";
import HomeComponent from "../../components/Home/Home";
import {
  getScheduleIsFreeOfDentist,
  getScheduleIsRegisteredOfDentist,
} from "../../controller/scheduleController";
import { registerAppointment } from "../../controller/appoinmentController";
import { getService } from "../../controller/serviceController";
import { getScheduleDentist } from "../../components/Guest/function";

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
        role={""}
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
  if (schedules.length === 0 && scheduleRegistered.length === 0) return res.send("No schedule is registered!");
  return res.send(
    getScheduleDentist({
      idDentist,
      nameOfDentist,
      schedules,
      scheduleRegistered,
    })
  );
});

guestRouter.post("/add-new-appointment", async (req, res) => {
  registerAppointment(req, res, "/");
});

export default guestRouter;
