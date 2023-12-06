import { Router } from "express";
import * as elements from "typed-html";
import AdminPage from "../../app/admin/admin";
import DashBoard from "../../app/admin/Dashboard/Dashboard";
import Drug from "../../app/admin/Drugs/Drugs";
import Schedule from "../../app/admin/Schedule/Schedule";
import AddAppointmentPage from "../../app/admin/Schedule/AddAppointment";
import DeleteAppointmentPage from "../../app/admin/Schedule/DeleteAppointment";
import EditAppointmentPage from "../../app/admin/Schedule/EditAppointment";
import DentistPage from "../../app/admin/Dashboard/Dentists/Dentist";
import StaffPage from "../../app/admin/Dashboard/Staffs/Staff";
import PatientPage from "../../app/admin/Dashboard/Patients/Patient";
import Service from "../../app/admin/Service/Service";
import Profile from "../../components/info/Profile";
import { DentistProps } from "../../config/model";
import { admin } from "../auth/router";

const adminRouter = Router();
let dentists: DentistProps[] = [];

adminRouter.get("/dashboard", async (req, res) => {
  return res.send(<DashBoard />);
});

adminRouter.get("/drug", async (req, res) => {
  return res.send(<Drug />);
});

adminRouter.get("/schedule", async (req, res) => {
  return res.send(<Schedule />);
});

adminRouter.get("/schedule/add_appointment", async (req, res) => {
  return res.send(<AddAppointmentPage />);
});

adminRouter.get("/schedule/delete_appointment", async (req, res) => {
  return res.send(<DeleteAppointmentPage />);
});

adminRouter.get("/schedule/edit_appointment", async (req, res) => {
  return res.send(<EditAppointmentPage />);
});

adminRouter.get("/dentist", async (req, res) => {
  return res.send(<DentistPage />);
});

adminRouter.get("/staff", async (req, res) => {
  return res.send(<StaffPage />);
});

adminRouter.get("/patient", async (req, res) => {
  return res.send(<PatientPage />);
});

adminRouter.get("/service", async (req, res) => {
  return res.send(<Service />);
});

adminRouter.get("/profile", async (req, res) => {
  return res.send(<Profile />);
});

export default adminRouter;
