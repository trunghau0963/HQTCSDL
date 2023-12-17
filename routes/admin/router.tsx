import { Router } from "express";
import { Request, Response } from "express";
import * as elements from "typed-html";
import AdminPage from "../../app/admin/admin";
import DashBoard from "../../app/admin/Dashboard/Dashboard";
import DrugPage from "../../app/admin/Drugs/Drugs";
import DentistPage from "../../app/admin/Dashboard/Dentists/Dentist";
import StaffPage from "../../app/admin/Dashboard/Staffs/Staff";
import PatientPage from "../../app/admin/Dashboard/Patients/Patient";
import ServicePage from "../../app/admin/Service/Service";
import Profile from "../../components/info/Profile";
import {
  Admin,
  drugProps,
  Patient,
  Dentist,
  Staff,
  Appointment,
  Service,
  Invoice,
  AppointmentDetailProps,
} from "../../model/model";
import { admin } from "../auth/router";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getAdminById } from "../../controller/adminController";
import { getAllStaff, createStaff } from "../../controller/staffController";
import {
  createPatient,
  getAllPatient,
  updatePatient,
} from "../../controller/patientController";
import {
  getAllDentist,
  createDentist,
} from "../../controller/dentistController";
import ProfilePage from "../../app/admin/Profile/Profile";
import {
  addDrug,
  deleteDrug,
  getDrugByName,
  getDrugInfo,
  updateInfoDrug,
} from "../../controller/drugController";
import {
  getService,
  getServiceById,
  getServiceByName,
  deleteService,
  updateService,
  addService,
} from "../../controller/serviceController";

import {
  registerAppointment,
  deleteAppointment,
  updateAppointment,
  getAppointment,
} from "../../controller/appoinmentController";

import { getInvoice } from "../../controller/invoiceController";
import ListAccounts from "../../app/admin/Account/ListAccount";
import EditProfile from "../../app/patient/Profile/EditProfile";

const adminRouter = Router();
adminRouter.get("/dashboard", admin, async (req, res) => {
  return res.send(<DashBoard />);
});

adminRouter.get("/drug", [
  admin,
  async (req: any, res: any) => {
    try {
      const drugs: drugProps[] = (await getDrugInfo(req, res)) || [];
      const invoices: Invoice[] = (await getInvoice(req, res)) || [];
      return res.send(<DrugPage drugs={drugs} invoices={invoices} />);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },
]);

adminRouter.post("/drug", admin, async (req: any, res: any) => {
  addDrug(req, res, "admin");
});
adminRouter.delete("/drug", admin, async (req: any, res: any) => {
  deleteDrug(req, res, "admin");
});
adminRouter.put("/drug", admin, async (req: any, res: any) => {
  updateInfoDrug(req, res, "admin");
});

adminRouter.get("/dentist", admin, async (req, res) => {
  let dentists: Dentist[] = [];
  try {
    dentists = (await getAllDentist(req, res)) as Dentist[];
  } catch {}
  return res.send(<DentistPage Data={dentists} />);
});

adminRouter.post("/dentist", admin, createDentist);

adminRouter.get("/staff", admin, async (req, res) => {
  let staffs: Staff[] = [];
  try {
    staffs = (await getAllStaff(req, res)) as Staff[];
  } catch {}
  return res.send(<StaffPage Data={staffs} />);
});

adminRouter.post("/staff", admin, createStaff);

adminRouter.get("/patient", admin, async (req, res) => {
  let patients: Patient[] = [];
  try {
    patients = (await getAllPatient(req, res)) as Patient[];
  } catch {}
  return res.send(<PatientPage Data={patients} />);
});

adminRouter.post("/patient", admin, createPatient);

adminRouter.put("/patient", admin, updatePatient);

adminRouter.get("/service", admin, async (req, res) => {
  let data: Service[] = [];
  try {
    data = (await getService(req, res)) as Service[];
  } catch {}
  return res.send(<ServicePage services={data} />);
});

adminRouter.post("/service", admin, (req: Request, res: Response) =>
  addService(req, res, "admin")
);
adminRouter.put("/service", admin, (req: Request, res: Response) =>
  updateService(req, res, "admin")
);
adminRouter.delete("/service", admin, (req: Request, res: Response) =>
  deleteService(req, res, "admin")
);
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

adminRouter.get("/home/edit-profile", admin, async (req, res) => {
  let data: Admin | undefined;
  try {
    const token = req.cookies.token as string;
    const admin =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    data = (await getAdminById(req, res, admin.user.MAQT)) as Admin;
  } catch {}
  return res.send(<EditProfile data={data} role={'admin'}/>);
});

adminRouter.put("/home/edit-profile", admin, async (req, res) => {
  const { MA, HOTEN, DIACHI, NGAYSINH, MATKHAU } = req.body;

  const data: Patient = (
    await (await req.db())
      .input("MAQT", MA)
      .input("MATKHAU", MATKHAU)
      .input("HOTEN", HOTEN)
      .input("NGAYSINH", NGAYSINH)
      .input("DIACHI", DIACHI)
      .execute("UPDATE_INFO_QUANTRI")
  ).recordset[0];
  console.log("aaa");

  return res
    .header("HX-Redirect", `/admin/information`)
    .json("Directed")
    .status(200);
});

adminRouter.get("/manageAccount", admin, async (req, res) => {
  const patients: Patient[] = (
    await (await req.db()).execute("GET_INFO_BENHNHAN")
  ).recordset;
  const staffs: Staff[] = (await (await req.db()).execute("GET_INFO_NHANVIEN"))
    .recordset;
  const dentists: Dentist[] = (await (await req.db()).execute("GET_INFO_NHASI"))
    .recordset;
  return res.send(
    <ListAccounts patients={patients} dentists={dentists} staffs={staffs} />
  );
});

adminRouter.put("/manageAccount", admin, async (req, res) => {
  const { id, role, isBlock } = req.body;

  if (isBlock === "false") {
    const result: Dentist[] = (
      await (await req.db())
        .input("MA", id)
        .input("ROLE", role)
        .execute("BLOCK_ACCOUNT")
    ).recordset;
  } else {
    const result: Dentist[] = (
      await (await req.db())
        .input("MA", id)
        .input("ROLE", role)
        .execute("UNBLOCK_ACCOUNT")
    ).recordset;
  }
  return res
    .header("HX-Redirect", `/admin/manageAccount`)
    .json("Directed")
    .status(200);
});

export default adminRouter;
