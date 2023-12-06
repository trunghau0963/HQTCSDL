import { Router } from "express";
import * as elements from "typed-html";
import StaffPage from "../../app/staff/staff";
import Dashboard from "../../app/staff/Dashboard/Dashboard";
import Home from "../../app/staff/Home/Home";
import Schedule from "../../app/staff/Schedule/Schedule";
import Drug from "../../app/staff/Drug/Drug";
import { staff } from "../auth/router";
import Service from "../../app/staff/Service/Service";

const staffRouter = Router();

staffRouter.get("/", staff, async (req, res) => {
  return res.send(
    <StaffPage/>
  );
});

staffRouter.get("/dashboard", staff, async (req, res) => {
  return res.send(
    <Dashboard/>
  );
});

staffRouter.get("/home", staff, async (req, res) => {
  return res.send(
    <Home/>
  );
});


staffRouter.get("/drug", staff, async (req, res) => {
  return res.send(
    <Drug/>
  );
});


staffRouter.get("/schedule", staff, async (req, res) => {
  return res.send(
    <Schedule/>
  );
});

staffRouter.get("/service", staff, async (req, res) => {
  return res.send(
    <Service/>
  );
});


export default staffRouter;
