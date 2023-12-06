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
import { Dentist } from "../../model/model";
import { admin } from "../auth/router";

const adminRouter = Router();
adminRouter.get("/dashboard", admin, async (req, res) => {
  return res.send(<DashBoard />);
});

adminRouter.get("/drug", admin, async (req, res) => {
  return res.send(<Drug />);
});

adminRouter.get("/schedule", admin, async (req, res) => {
  return res.send(<Schedule />);
});

adminRouter.get("/schedule/add_appointment", admin, async (req, res) => {
  return res.send(<AddAppointmentPage />);
});

adminRouter.get("/schedule/delete_appointment", admin, async (req, res) => {
  return res.send(<DeleteAppointmentPage />);
});

adminRouter.get("/schedule/edit_appointment", admin, async (req, res) => {
  return res.send(<EditAppointmentPage />);
});

adminRouter.get("/dentist", admin, async (req, res) => {
  return res.send(<DentistPage />);
});

adminRouter.get("/staff", admin, async (req, res) => {
  return res.send(<StaffPage />);
});

adminRouter.get("/patient", admin, async (req, res) => {
  return res.send(<PatientPage />);
});

adminRouter.get("/service", admin, async (req, res) => {
  return res.send(<Service />);
});

adminRouter.get("/profile", admin, async (req, res) => {
  return res.send(<Profile />);
});

export default adminRouter;
