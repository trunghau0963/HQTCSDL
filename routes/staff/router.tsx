import { Router } from "express";
import * as elements from "typed-html";
import StaffPage from "../../app/staff/staff";
import Dashboard from "../../app/staff/Dashboard/Dashboard";
import Home from "../../app/staff/Home/Home";
import Schedule from "../../app/staff/Schedule/Schedule";
import Drug from "../../app/staff/Drug/Drug";

const staffRouter = Router();

staffRouter.get("/", async (req, res) => {
  return res.send(
    <StaffPage/>
  );
});

staffRouter.get("/dashboard", async (req, res) => {
  return res.send(
    <Dashboard/>
  );
});

staffRouter.get("/home", async (req, res) => {
  return res.send(
    <Home/>
  );
});


staffRouter.get("/drug", async (req, res) => {
  return res.send(
    <Drug/>
  );
});


staffRouter.get("/schedule", async (req, res) => {
  return res.send(
    <Schedule/>
  );
});


export default staffRouter;
