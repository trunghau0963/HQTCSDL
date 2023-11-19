import { Router } from "express";
import * as elements from "typed-html";
import AdminPage from "../../app/admin/admin";
import DashBoard from "../../app/admin/Dashboard/Dashboard";
import Home from "../../app/admin/Home/Home";
import Drug from "../../app/admin/Drugs/Drugs";
import Schedule from "../../app/admin/Schedule/Schedule";
import AddAppointmentPage from "../../app/admin/Schedule/AddAppointment";
import DeleteAppointmentPage from "../../app/admin/Schedule/DeleteAppointment";
import EditAppointmentPage from "../../app/admin/Schedule/EditAppointment";
import DentistPage from "../../app/admin/Dashboard/Dentists/Dentist";
import StaffPage from "../../app/admin/Dashboard/Staffs/Staff";
import PatientPage from "../../app/admin/Dashboard/Patients/Patient";
const adminRouter = Router();

adminRouter.get("/", async (req, res) => {
  return res.send(<AdminPage />);
});

adminRouter.get("/dashboard", async (req, res) => {
  return res.send(<DashBoard />);
});

adminRouter.get("/home", async (req, res) => {
  return res.send(<Home />);
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

// adminRouter.get("/dentist/add_dentist", async (req, res) => {
//   return res.send(<AddDentistPage />);
// });

adminRouter.get("/staff", async (req, res) => {
  return res.send(<StaffPage />);
});

// adminRouter.get("/Staff/add_staff", async (req, res) => {
//   return res.send(<AddStaffPage />);
// });


adminRouter.get("/patient", async (req, res) => {
  return res.send(<PatientPage />);
});

// adminRouter.get("/dentist/delete_dentist", async (req, res) => {
//   return res.send(
//     <BaseHtml>
//       <DeleteDentistPage Data={}/>
//     </BaseHtml>
//   );
// });

export default adminRouter;
