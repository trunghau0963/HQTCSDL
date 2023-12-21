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
import EditProfile from "../../app/patient/Profile/EditProfile";
import EditProfilePage from "../../app/admin/Profile/EditProfile";

const adminRouter = Router();
adminRouter.get("/dashboard", admin, async (req, res) => {
  try {
    return res.send(<DashBoard />);
  } catch (error) {
    console.log(error);
  }
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
  try {
    addDrug(req, res, "admin");
  } catch (error) {
    console.log(error);
  }
});
adminRouter.delete("/drug", admin, async (req: any, res: any) => {
  try {
    deleteDrug(req, res, "admin");
  } catch (error) {
    console.log(error);
  }
});
adminRouter.put("/drug", admin, async (req: any, res: any) => {
  try {
    updateInfoDrug(req, res, "admin");
  } catch (error) {
    console.log(error);
  }
});

adminRouter.get("/dentist", admin, async (req, res) => {
  try {
    const dentists: Dentist[] = (
      await (await req.db()).execute("GET_INFO_NHASI")
    ).recordset;
    return res.send(<DentistPage dentists={dentists} />);
  } catch (error) {
    console.log(error);
  }
});

adminRouter.put("/dentist", admin, async (req, res) => {
  try {
    const { id, name, pwd, dob, address } = req.body;
    const dentist: Dentist[] = (
      await (await req.db())
        .input("MANS", id)
        .input("MATKHAU", pwd)
        .input("HOTEN", name)
        .input("NGAYSINH", dob)
        .input("DIACHI", address)
        .execute("UPDATE_INFO_NHASI")
    ).recordset;

    return res
      .header("HX-Redirect", `/admin/dentist`)
      .json("Directed")
      .status(200);
  } catch (error) {
    console.log(error);
  }
});

adminRouter.post("/dentist", admin, createDentist);

adminRouter.get("/staff", admin, async (req, res) => {
  try {
    const staffs: Staff[] = (
      await (await req.db()).execute("GET_INFO_NHANVIEN")
    ).recordset;
    return res.send(<StaffPage staffs={staffs} />);
  } catch (error) {
    console.log(error);
  }
});

adminRouter.post("/staff", admin, createStaff);

adminRouter.put("/staff", admin, async (req, res) => {
  try {
    const { id, name, pwd, dob, address } = req.body;
    const patient: Patient[] = (
      await (await req.db())
        .input("MANV", id)
        .input("MATKHAU", pwd)
        .input("HOTEN", name)
        .input("NGAYSINH", dob)
        .input("DIACHI", address)
        .execute("UPDATE_INFO_NHANVIEN")
    ).recordset;

    return res
      .header("HX-Redirect", `/admin/staff`)
      .json("Directed")
      .status(200);
  } catch (error) {
    console.log(error);
  }
});

adminRouter.get("/patient", admin, async (req, res) => {
  try {
    const patients: Patient[] = (
      await (await req.db()).execute("GET_INFO_BENHNHAN")
    ).recordset;

    return res.send(<PatientPage patients={patients} />);
  } catch (error) {
    console.log(error);
  }
});

adminRouter.post("/patient", admin, createPatient);

adminRouter.put("/patient", admin, async (req, res) => {
  try {
    const { id, name, pwd, dob, address } = req.body;
    const patient: Patient[] = (
      await (await req.db())
        .input("MABN", id)
        .input("MATKHAU", pwd)
        .input("HOTEN", name)
        .input("NGAYSINH", dob)
        .input("DIACHI", address)
        .execute("UPDATE_INFO_BENHNHAN")
    ).recordset;

    return res
      .header("HX-Redirect", `/admin/patient`)
      .json("Directed")
      .status(200);
  } catch (error) {
    console.log(error);
  }
});

adminRouter.get("/service", admin, async (req, res) => {
  let data: Service[] = [];
  try {
    data = (await getService(req, res)) as Service[];
    return res.send(<ServicePage services={data} />);
  } catch (error) {
    console.log(error);
  }
});

adminRouter.post("/service", admin, async (req: Request, res: Response) => {
  try {
    addService(req, res, "admin");
  } catch (error) {
    console.log(error);
  }
});
adminRouter.put("/service", admin, async (req: Request, res: Response) => {
  try {
    updateService(req, res, "admin");
  } catch (error) {
    console.log(error);
  }
});
adminRouter.delete("/service", admin, async (req: Request, res: Response) => {
  try {
    deleteService(req, res, "admin");
  } catch (error) {
    console.log(error);
  }
});

adminRouter.get("/information", admin, async (req, res) => {
  let admin: Admin | undefined;
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    admin = (await getAdminById(req, res, data.user.MAQT)) as Admin;
  } catch (error) {
    console.log(error);
  }
  return res.send(<ProfilePage data={admin} />);
});

adminRouter.get("/home/edit-profile", admin, async (req, res) => {
  let data: Admin | undefined;
  try {
    const token = req.cookies.token as string;
    const admin =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    data = (await getAdminById(req, res, admin.user.MAQT)) as Admin;
    return res.send(<EditProfilePage data={data} />);
  } catch (error) {
    console.log(error);
  }
});

adminRouter.put("/home/edit-profile", admin, async (req, res) => {
  try {
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

    return res
      .header("HX-Redirect", `/admin/information`)
      .json("Directed")
      .status(200);
  } catch (error) {
    console.log(error);
  }
});

adminRouter.put("/manageAccount", admin, async (req, res) => {
  try {
    let { id, role, isBlock } = req.body;

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
    if (role === "BENHNHAN") {
      role = "patient";
    } else if (role === "NHASI") {
      role = "dentist";
    } else if (role === "NHANVIEN") {
      role = "staff";
    }
    return res
      .header("HX-Redirect", `/admin/${role}`)
      .json("Directed")
      .status(200);
  } catch (err) {
    console.error(err);
  }
});

export default adminRouter;
