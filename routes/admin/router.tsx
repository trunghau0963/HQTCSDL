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
  Schedule,
  AppointmentDetail,
  User,
} from "../../model/model";
import { admin } from "../auth/router";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getAdminById } from "../../controller/adminController";
import {
  getAllStaff,
  createStaff,
  getStaffByNameCharacter,
} from "../../controller/staffController";
import {
  createPatient,
  getAllPatient,
  getPatientByNameChar,
  updatePatient,
} from "../../controller/patientController";
import {
  getAllDentist,
  createDentist,
  getDentistByNameChar,
} from "../../controller/dentistController";
import ProfilePage from "../../app/admin/Profile/Profile";
import {
  addDrug,
  deleteDrug,
  getDrugByName,
  getDrugByNameChar,
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
  getServiceByNameChar,
} from "../../controller/serviceController";

import {
  registerAppointment,
  deleteAppointment,
  updateAppointment,
  getAppointment,
  getAppointmentIsDoneOfDentist,
  getAppointmentIsDone,
  getAppointmentUnfinished,
} from "../../controller/appoinmentController";

import { getInvoice } from "../../controller/invoiceController";
import EditProfile from "../../app/patient/Profile/EditProfile";
import EditProfilePage from "../../app/admin/Profile/EditProfile";
import { getFreeSchedule } from "../../controller/scheduleController";
import SchedulePage from "../../app/admin/Schedule/Schedule";
import {
  SearchDrugResult,
  SearchResult,
  SearchServiceResult,
} from "../../components/Table/functionSearchResult";
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
    const input = req.query;
    const searchValue = input.search as string;

    console.log("Search value in get:", searchValue);
    const dentists: Dentist[] = (
      await (await req.db()).execute("GET_INFO_NHASI")
    ).recordset;
    return res.send(<DentistPage />);
  } catch (error) {
    console.log(error);
  }
});

adminRouter.post("/dentist/search", admin, async (req, res) => {
  const { name } = req.body;
  let dentist: Dentist[] = [];
  console.log("name", name);
  try {
    dentist = (await getDentistByNameChar(req, res, name)) as Dentist[];
  } catch (error) {
    console.log(error);
  }
  return res.send(<SearchResult users={dentist} role="dentist" />);
});

adminRouter.post("/patient/search", admin, async (req, res) => {
  const { name } = req.body;
  let Patient: Patient[] = [];
  console.log("name", name);
  try {
    Patient = (await getPatientByNameChar(req, res, name)) as Patient[];
  } catch (error) {
    console.log(error);
  }
  return res.send(<SearchResult users={Patient} role="patient" />);
});

adminRouter.post("/staff/search", admin, async (req, res) => {
  const { name } = req.body;
  let Staff: Staff[] = [];
  console.log("name", name);
  try {
    Staff = (await getStaffByNameCharacter(req, res, name)) as Staff[];
  } catch (error) {
    console.log(error);
  }
  return res.send(<SearchResult users={Staff} role="staff" />);
});

adminRouter.post("/drug/search", admin, async (req, res) => {
  const { name } = req.body;
  let Drug: drugProps[] = [];
  console.log("name", name);
  try {
    Drug = (await getDrugByNameChar(req, res, name)) as drugProps[];
  } catch (error) {
    console.log(error);
  }
  return res.send(<SearchDrugResult drugs={Drug} role="drug" url="admin" />);
});

adminRouter.post("/service/search", admin, async (req, res) => {
  const { name } = req.body;
  let Service: Service[] = [];
  console.log("name", name);
  try {
    Service = (await getServiceByNameChar(req, res, name)) as Service[];
  } catch (error) {
    console.log(error);
  }
  return res.send(<SearchServiceResult services={Service} role="service" url="admin" />);
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
    const input = req.body;
    console.log(input);
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
    const input = req.body;
    console.log(input);
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

adminRouter.get("/edit-profile", admin, async (req, res) => {
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

adminRouter.put("/edit-profile", admin, async (req, res) => {
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

    let viRole;
    if (role === "patient") {
      viRole = "BENHNHAN";
    } else if (role === "dentist") {
      viRole = "NHASI";
    } else if (role === "staff") {
      viRole = "NHANVIEN";
    }

    if (isBlock === "false") {
      const result: User[] = (
        await (await req.db())
          .input("MA", id)
          .input("ROLE", viRole)
          .execute("BLOCK_ACCOUNT")
      ).recordset;
    } else {
      const result: User[] = (
        await (await req.db())
          .input("MA", id)
          .input("ROLE", viRole)
          .execute("UNBLOCK_ACCOUNT")
      ).recordset;
    }
    return res
      .header("HX-Redirect", `/admin/${role}`)
      .json("Directed")
      .status(200);
  } catch (err) {
    console.error(err);
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

adminRouter.get("/schedule", admin, async (req, res) => {
  let scheduleFree: Schedule[] = [];
  let scheduleRegistered: AppointmentDetail[] = [];
  let scheduleRegistereFinished: AppointmentDetailProps[] = [];
  scheduleFree = (await getFreeSchedule(req, res)) || [];
  scheduleRegistered = (await getAppointmentUnfinished(req, res)) as [];
  scheduleRegistereFinished = (await getAppointmentIsDone(req, res)) as [];

  return res.send(
    <SchedulePage
      Free={scheduleFree}
      Registered={scheduleRegistered}
      RegisteredFinished={scheduleRegistereFinished}
    />
  );
});

export default adminRouter;
