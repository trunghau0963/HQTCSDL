import { Router } from "express";
import * as elements from "typed-html";
import StaffPage from "../../app/staff/staff";
import Dashboard from "../../app/staff/Dashboard/Dashboard";
import Home from "../../app/staff/Home/Home";
import Schedule from "../../app/staff/Schedule/Schedule";
import Drug from "../../app/staff/Drug/Drug";
import { staff } from "../auth/router";
import Service from "../../app/staff/Service/Service";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Staff } from "../../model/model";
import { getStaffById } from "../../controller/staffController";
import ProfilePage from "../../app/staff/Profile/Profile";

const staffRouter = Router();

staffRouter.get("/", staff, async (req, res) => {
  return res.send(<StaffPage />);
});

staffRouter.get("/dashboard", staff, async (req, res) => {
  return res.send(<Dashboard />);
});

staffRouter.get("/home", staff, async (req, res) => {
  return res.send(<Home />);
});

staffRouter.get("/drug", staff, async (req, res) => {
  return res.send(<Drug />);
});

staffRouter.get("/schedule", staff, async (req, res) => {
  return res.send(<Schedule />);
});

staffRouter.get("/service", staff, async (req, res) => {
  return res.send(<Service />);
});

staffRouter.get("/information", staff, async (req, res) => {
  let staff: Staff | undefined;
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    console.log("data: ", data.user.HOTEN);
    staff = (await getStaffById(req, res, data.user.MANV)) as Staff;
  } catch {}
  return res.send(<ProfilePage data={staff} />);
});

export default staffRouter;
