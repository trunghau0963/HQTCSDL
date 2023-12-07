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
import { Admin, Patient, Dentist, Staff } from "../../model/model";
import ProfilePage from "../../app/admin/Profile/Profile";
import { admin } from "../auth/router";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getAdminById } from "../../controller/adminController";
import { getAllStaff } from "../../controller/staffController";
import {
  createPatient,
  getAllPatient,
  deletePatient,
  updatePatient,
} from "../../controller/patientController";
import { getAllDentist } from "../../controller/dentistController";
import { addDrug } from "../../controller/drugController";

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
  let dentists: Dentist[] = [];
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    dentists = (await getAllDentist(req, res)) as Dentist[];
  } catch {}
  return res.send(<DentistPage Data={dentists} />);
});

adminRouter.get("/staff", admin, async (req, res) => {
  let staffs: Staff[] = [];
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    staffs = (await getAllStaff(req, res)) as Staff[];
  } catch {}
  return res.send(<StaffPage Data={staffs} />);
});

adminRouter.get("/patient", admin, async (req, res) => {
  let patients: Patient[] = [];
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    patients = (await getAllPatient(req, res)) as Patient[];
  } catch {}
  return res.send(<PatientPage Data={patients} />);
});

adminRouter.post("/patient", admin, createPatient);

// adminRouter.delete("/patient", admin, deletePatient);

adminRouter.put("/patient", admin, updatePatient);


adminRouter.get("/service", admin, async (req, res) => {
  return res.send(<Service />);
});

adminRouter.get("/profile", admin, async (req, res) => {
  return res.send(<Profile />);
});

adminRouter.get("/information", admin, async (req, res) => {
  let admin: Admin | undefined;
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    admin = (await getAdminById(req, res, data.user.MAQT)) as Admin;
  } catch {}
  return res.send(<ProfilePage data={admin} />);
});

adminRouter.post("/drug", addDrug);

export default adminRouter;
