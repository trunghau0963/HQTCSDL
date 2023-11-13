import { Router } from "express";
import * as elements from "typed-html";
import AdminPage from "../../app/admin/admin";
import DashBoard from "../../app/admin/Dashboard/Dashboard";
import Home from "../../app/admin/Home/Home";
import Drug from "../../app/admin/Drugs/Drugs";
import Schedule from "../../app/admin/Schedule/Schedule";

const adminRouter = Router();

adminRouter.get("/", async (req, res) => {
  return res.send(
    <AdminPage/>
  );
});

adminRouter.get("/dashboard", async (req, res) => {
  return res.send(
    <DashBoard/>
  );
});

adminRouter.get("/home", async (req, res) => {
  return res.send(
    <Home/>
  );
});


adminRouter.get("/drug", async (req, res) => {
  return res.send(
    <Drug/>
  );
});


adminRouter.get("/schedule", async (req, res) => {
  return res.send(
    <Schedule/>
  );
});


export default adminRouter;
