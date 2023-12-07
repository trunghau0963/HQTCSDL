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
import { Admin, drugProps } from "../../model/model";
import { admin } from "../auth/router";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getAdminById } from "../../controller/adminController";
import ProfilePage from "../../app/admin/Profile/Profile";
import { addDrug, deleteDrug, getDrugByName, getDrugInfo, updateInfoDrug } from "../../controller/drugController";
import { Upload } from "lucide-react";

const adminRouter = Router();
adminRouter.get("/dashboard", admin, async (req, res) => {
  return res.send(<DashBoard />);
});

adminRouter.get("/drug", [admin, async (req: any, res:any) => {
  try {
    const drugInfo: drugProps[] = (await getDrugInfo(req, res)) || [];

    // Sử dụng dữ liệu trong hàm xử lý của route
    return res.send(<Drug drugs = {drugInfo} />);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
}]);

adminRouter.post("/drug", addDrug);
adminRouter.delete("/drug", deleteDrug);
adminRouter.put("/drug", updateInfoDrug);

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

adminRouter.get("/information", admin, async (req, res) => {
  let dentist: Admin | undefined;
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    console.log("data: ", data.user.HOTEN);
    dentist = (await getAdminById(req, res, data.user.MAQT)) as Admin;
  } catch {}
  return res.send(<ProfilePage data={dentist} />);
});


export default adminRouter;
