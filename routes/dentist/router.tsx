import { Request, Response, Router } from "express";
import * as elements from "typed-html";
import DentistPage from "../../app/dentist/dentist";
import Dashboard from "../../app/dentist/Dashboard/Dashboard";
import SchedulePage from "../../app/dentist/Schedule/Schedule";
import { dentist } from "../auth/router";
import {
  AppointmentDetail,
  Dentist,
  Invoice,
  Schedule,
  serviceIndicators,
  Prescription,
  Patient,
  Service,
} from "../../model/model";
import jwt, { JwtPayload } from "jsonwebtoken";
import {
  getAllDentist,
  getDentistById,
} from "../../controller/dentistController";
import ProfilePage from "../../app/dentist/Profile/Profile";
import NullPage from "../../components/Error/NullPage";
import {
  getScheduleOfDentist,
  getScheduleIsFreeOfDentist,
  getScheduleIsRegisteredOfDentist,
  addSchedule,
  getScheduleIsFreeOfDentistByDateAndTime,
} from "../../controller/scheduleController";
import {
  deleteAppointmentHtmx,
  directNewUrl,
  getAppointmentIsDoneOfDentist,
  getAppointmentIsDoneOfDentistByName,
  getAppointmentNotDoneOfDentist,
  getAppointmentNotDoneOfDentistByName,
  getAppointmentOfDentist,
  getAppointmentOfDentistByDate,
  getAppointmentPatientByDate,
  registerAppointment,
} from "../../controller/appoinmentController";
import {
  addDrugIntoPrescription,
  deleteDrugIntoPrescription,
  getPrescriptionById,
} from "../../controller/prescriptionController";
import {
  addServiceIndicators,
  deleteServiceIndicators,
  getServiceIndicatorsById,
} from "../../controller/serviceIndicatorsController";
import {
  addInvoice,
  getIdInvoice,
  getIdInvoiceByIdPatientParameter,
} from "../../controller/invoiceController";
import { getNameOfDrug } from "../../controller/drugController";
import {
  getNameOfService,
  getService,
} from "../../controller/serviceController";
import {
  getNameAllPatient,
  getPatientByName,
} from "../../controller/patientController";
import {
  GetAddAppointment,
  GetSchedule,
} from "../../components/Dentist/Schedule/functionSchedule";
import EditProfilePage from "../../app/dentist/Profile/EditProfile";
import { SearchScheduleResultOfNhasi } from "../../components/Table/functionSearchResult";
import HomeComponent from "../../components/Home/Home";

const dentistRouter = Router();

dentistRouter.get("/dashboard", dentist, async (req, res) => {
  return res.send(<Dashboard />);
});

dentistRouter.get("/home", dentist, async (req, res) => {
  let listDentist: Dentist[] = [];
  let listService: Service[] = [];

  listDentist = (await getAllDentist(req, res)) as Dentist[];
  listService = (await getService(req, res)) as Service[];
  return res.send(
    <DentistPage>
      <HomeComponent
        listDentist={listDentist}
        listService={listService}
        role={"dentist"}
      />
    </DentistPage>
  );
});

dentistRouter.get("/schedule", dentist, async (req, res) => {
  let scheduleFree: Schedule[] = [];
  let scheduleRegistereFinished: AppointmentDetail[] = [];
  let scheduleRegistered: AppointmentDetail[] = [];
  let idDentist;
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    idDentist = data.user.MANS;
    scheduleFree =
      (await getScheduleIsFreeOfDentist(req, res, data.user.MANS)) || [];
    scheduleRegistered = (await getAppointmentNotDoneOfDentist(
      req,
      res,
      data.user.MANS
    )) as [];
    scheduleRegistereFinished = (await getAppointmentIsDoneOfDentist(
      req,
      res,
      data.user.MANS
    )) as [];
    // console.log("scheduleRegistereFinished: ", scheduleRegistereFinished);
  } catch {}
  return res.send(
    <SchedulePage
      Free={scheduleFree}
      Registered={scheduleRegistered}
      RegisteredFinished={scheduleRegistereFinished}
      idDentist={idDentist}
    />
  );
});

dentistRouter.post("/schedule/search", dentist, async (req, res) => {
  const { name } = req.body;
  let scheduleFree: Schedule[] = [];
  let scheduleRegistered: AppointmentDetail[] = [];
  let scheduleRegistereFinished: AppointmentDetail[] = [];
  let idDentist;
  console.log("name", name);
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    idDentist = data.user.MANS;
    scheduleFree =
      (await getScheduleIsFreeOfDentistByDateAndTime(
        req,
        res,
        idDentist,
        name
      )) || [];
    scheduleRegistered = (await getAppointmentNotDoneOfDentistByName(
      req,
      res,
      idDentist,
      name
    )) as [];
    scheduleRegistereFinished = (await getAppointmentIsDoneOfDentistByName(
      req,
      res,
      idDentist,
      name
    )) as [];
  } catch (error) {
    console.log(error);
  }
  return res.send(
    <SearchScheduleResultOfNhasi
      Free={scheduleFree}
      Registered={scheduleRegistered}
      RegisteredFinished={scheduleRegistereFinished}
      role="schedule"
    />
  );
});

dentistRouter.post("/schedule", dentist, directNewUrl);

dentistRouter.post(
  "/schedule/freeSchedule",
  dentist,
  (req: Request, res: Response) => addSchedule(req, res, "dentist")
);

dentistRouter.get("/schedule/appointment", dentist, async (req, res) => {
  let services: serviceIndicators[] = [];
  let prescriptions: Prescription[] = [];
  let nameServices: string[] = (await getNameOfService(req, res)) || [];
  let nameDrugs: any[] = (await getNameOfDrug(req, res)) || [];
  const appointment: AppointmentDetail = (await getAppointmentOfDentistByDate(
    req,
    res
  )) as AppointmentDetail;
  console.log("appointment: ", appointment);

  const IdInvoice: string = (await getIdInvoiceByIdPatientParameter(
    req,
    res,
    appointment.MABN,
    appointment.NGAYKHAM,
    appointment.GIOKHAM
  )) as string;

  console.log("IdInvoice: ", IdInvoice);

  if (IdInvoice) {
    prescriptions = (await getPrescriptionById(
      req,
      res,
      IdInvoice
    )) as Prescription[];
    services = (await getServiceIndicatorsById(
      req,
      res,
      IdInvoice
    )) as serviceIndicators[];
    nameDrugs = nameDrugs.filter(
      (drug) =>
        !prescriptions.some(
          (prescription) => prescription.TENTHUOC === drug.name
        )
    );
    nameServices = nameServices.filter(
      (service) =>
        !services.some((serviceIndicator) => serviceIndicator.TENDV === service)
    );
  }

  if (!appointment.MABN) {
    return res.send(`Không tìm thấy lịch khám trong ngày`);
  }

  return res.send(
    <GetSchedule
      appointment={appointment}
      IdInvoice={IdInvoice}
      prescriptions={prescriptions}
      nameDrugs={nameDrugs}
      services={services}
      nameServices={nameServices}
    />
  );
});

dentistRouter.get("/schedule/add-appointment", dentist, async (req, res) => {
  const { MANS, HOTENNHASI, NGAYKHAM, GIOKHAM } = req.query;

  console.log("query: ", req.query);
  const idDentist = MANS as string;
  const dateOfAppointment = NGAYKHAM as string;
  const hourOfAppointment = GIOKHAM as string;
  const nameOfDentist = HOTENNHASI as string;
  const patientsName: string[] =
    ((await getNameAllPatient(req, res)) as string[]) || [];
  return res.send(
    <GetAddAppointment
      patientsName={patientsName}
      idDentist={idDentist}
      dateOfAppointment={dateOfAppointment}
      hourOfAppointment={hourOfAppointment}
      nameOfDentist={nameOfDentist}
    />
  );
});

dentistRouter.post(
  "/schedule/add-prescription",
  dentist,
  addDrugIntoPrescription
);

dentistRouter.post(
  "/schedule/delete-drug-prescription",
  dentist,
  deleteDrugIntoPrescription
);

dentistRouter.post(
  "/schedule/add-service-indicators",
  dentist,
  async (req, res) => {
    addServiceIndicators(req, res, "/dentist/schedule");
  }
);

dentistRouter.post(
  "/schedule/delete-service-indicators",
  dentist,
  async (req, res) => {
    deleteServiceIndicators(req, res, "/dentist/schedule");
  }
);

dentistRouter.post("/schedule/add-appointment", dentist, async (req, res) => {
  try {
    const { MANS, TEN, NGAYKHAM, GIOKHAM } = req.body;

    const patient: Patient = (await getPatientByName(req, res, TEN)) as Patient;
    const dob = patient.NGAYSINH.toISOString().split("T")[0];
    const convertTime = `${GIOKHAM}:00`;

    const user = (
      await (await req.db())
        .input("TEN", patient.HOTEN)
        .input("DIENTHOAI", patient.DIENTHOAI)
        .input("NGAYSINH", dob)
        .input("DIACHI", patient.DIACHI)
        .input("MANS", MANS)
        .input("NGAYKHAM", NGAYKHAM)
        .input("GIOKHAM", convertTime)
        .execute("REGISTER_LICHKHAM")
    ).recordset;

    console.log("user: ", user);
    return res
      .header("HX-Redirect", "/dentist/schedule")
      .json({ message: "Success" })
      .status(200);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return res.status(400).send(error.message);
    }
    return res
      .status(500)
      .send("Something went wrong. Please try again later.");
  }
});

dentistRouter.post(
  "/schedule/add-new-appointment",
  dentist,
  async (req, res) => {
    registerAppointment(req, res, "/dentist/schedule");
  }
);

dentistRouter.post(
  "/schedule/delete-appointment",
  dentist,
  deleteAppointmentHtmx
);

dentistRouter.post("/schedule/add-action", dentist, addInvoice);

dentistRouter.get("/schedule/failed", dentist, async (req, res) => {
  return res.send(<NullPage title="Appointment" />);
});

dentistRouter.get("/information", dentist, async (req, res) => {
  let dentist: Dentist | undefined;
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    console.log("data: ", data.user.HOTEN);
    dentist = (await getDentistById(req, res, data.user.MANS)) as Dentist;
    console.log("dentist: ", dentist);
  } catch {}
  return res.send(<ProfilePage data={dentist} />);
});

dentistRouter.get("/edit-profile", dentist, async (req, res) => {
  let dentist: Dentist | undefined;
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    console.log("data: ", data.user.HOTEN);
    dentist = (await getDentistById(req, res, data.user.MANS)) as Dentist;
    console.log("dentist: ", dentist);
  } catch (error) {
    console.log(error);
  }
  return res.send(<EditProfilePage data={dentist} />);
});

dentistRouter.put("/edit-profile", dentist, async (req, res) => {
  try {
    const { MA, HOTEN, DIACHI, NGAYSINH, MATKHAU } = req.body;
    console.log(req.body);
    const data: Dentist = (
      await (await req.db())
        .input("MABN", MA)
        .input("MATKHAU", MATKHAU)
        .input("HOTEN", HOTEN)
        .input("NGAYSINH", NGAYSINH)
        .input("DIACHI", DIACHI)
        .execute("UPDATE_INFO_NHASI")
    ).recordset[0];

    return res
      .header("HX-Redirect", `/auth/login`)
      .clearCookie("token")
      .json("Directed")
      .status(200);
  } catch (err) {
    console.error(err);
  }
});

export default dentistRouter;
