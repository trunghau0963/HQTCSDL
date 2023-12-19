import { Router } from "express";
import * as elements from "typed-html";
import Home from "../../app/patient/Home/Home";
import Drug from "../../app/patient/Drug/Drug";
import Dashboard from "../../app/patient/Dashboard/Dashboard";
import Dentist from "../../app/patient/Dentist/Dentist";
import ScheduleComponent from "../../app/patient/Schedule/Schedule";
import ProfilePage from "../../app/patient/Profile/Profile";
import AddAppointment from "../../components/Appointment/patientAppointment/addAppoinment";
import Security from "../../app/patient/Security/Security";
import { patient } from "../auth/router";
import {
  AppointmentDetailProps,
  AppointmentDetail,
  Dentist as DentistProps,
  Invoice,
  Patient,
  Prescription,
  Schedule,
  drugProps,
  serviceIndicators,
} from "../../model/model";
import middlewareToken from "../../middleware/tokenMiddleware";
import { getPatientById } from "../../controller/patientController";
import jwt, { JwtPayload } from "jsonwebtoken";
import DentistAvailable from "../../components/Appointment/patientAppointment/dentistList";
import {
  getSchedule,
  getScheduleIsFree,
} from "../../controller/scheduleController";
import {
  deleteAppointment,
  getAppointmentIsDoneOfPatient,
  getAppointmentNotDone,
  registerAppointment,
} from "../../controller/appoinmentController";
import Appointment from "../../app/patient/Appointment/Appointment";
import PreviewPage from "../../app/patient/Invoice/previewPage";
import {
  getInvoiceDetailById,
  getInvoiceDetailByIdWithHtmx,
} from "../../controller/invoiceController";
import { getPrescriptionById } from "../../controller/prescriptionController";
import { getServiceById } from "../../controller/serviceController";
import { getServiceIndicatorsById } from "../../controller/serviceIndicatorsController";
import { getAllDentist } from "../../controller/dentistController";
import EditProfile from "../../app/patient/Profile/EditProfile";

const patientRouter = Router();

patientRouter.get("/dashboard", patient, async (req, res) => {
  return res.send(<Dashboard />);
});

patientRouter.get("/appointment/id", patient, async (req, res) => {
  let services: serviceIndicators[] = [];
  let prescriptions: Prescription[] = [];
  let invoices: Invoice | undefined = await getInvoiceDetailByIdWithHtmx(
    req,
    res
  );
  prescriptions = (await getPrescriptionById(
    req,
    res,
    invoices?.MACT
  )) as Prescription[];

  services = (await getServiceIndicatorsById(
    req,
    res,
    invoices?.MACT
  )) as serviceIndicators[];

  const htmlContent = `
    <div class="modal-dialog modal-lg">
      <div class="modal-content rounded bg-light">
        <div class="card">
          <div class="modal-header">
            <h5 class="modal-title" id="contactInfoModalLabel">
              <h1 class="text-lg">Appointment Detail</h1>
            </h5>
            <div class="d-flex align-items-center gap-3">
              <button
                class="close btn btn-tertiary icon-h-sm icon-w-sm border-0 rounded"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="card-body">
              <div class="container mb-5 mt-3">
                <div class="container" id="invoiceBody">
                  <div class="col-md-12">
                    <div class="text-center">
                      <i
                        class="bi bi-receipt-cutoff fs-1"
                        style="color:#5d9fc5 ;"
                      ></i>
                      <p class="pt-0">HTV - Clinic </p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xl-8">
                      <ul class="list-unstyled">
                        <li class="text-muted">
                          To:
                          <span style="color:#5d9fc5 ;">${
                            invoices?.HOTENBENHNHAN
                          }</span>
                        </li>
                        <li class="text-muted">Street, City</li>
                        <li class="text-muted">State, Country</li>
                        <li class="text-muted">
                          <i class="bi bi-phone"></i>
                          ${invoices?.DIENTHOAI}
                        </li>
                      </ul>
                    </div>
                    <div class="col-xl-4">
                      <p class="text-muted">Invoice</p>
                      <ul class="list-unstyled">
                        <li class="text-muted">
                          <i
                            class="bi bi-circle"
                            style="color:#84B0CA ;"
                          ></i>
                          <span class="fw-bold">ID:</span>
                          #${invoices?.MACT}
                        </li>
                        <li class="text-muted">
                          <i
                            class="bi bi-circle"
                            style="color:#84B0CA ;"
                          ></i>
                          <span class="fw-bold">Creation Date: </span>
                          ${invoices?.NGAYKHAM.toDateString()}
                        </li>
                        <li class="text-muted">
                          <i
                            class="bi bi-circle"
                            style="color:#84B0CA ;"
                          ></i>
                          <span class="me-1 fw-bold">Status:</span>
                          <span class="badge bg-success text-black fw-bold">
                            Done
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="row my-2 mx-1 justify-content-center">
                    <table class="table table-striped table-borderless">
                      <thead
                        style="background-color:#84B0CA ;"
                        class="text-white"
                      >
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Name Of Dentist</th>
                          <th scope="col">Name of Patient</th>
                          <th scope="col">Date</th>
                          <th scope="col">Time</th>
                          <th scope="col">Description</th>
                          <th scope="col">Symptom</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Tooltip on top"
                          >
                            ${invoices?.MACT}
                          </td>
                          <td>
                            <div class="d-flex">
                              ${invoices?.HOTENNHASI}
                              
                            </div>
                          </td>
                          <td>
                            <div class="d-flex">
                              ${invoices?.HOTENBENHNHAN}
                              
                            </div>
                          </td>
                          <td>${invoices?.NGAYKHAM.toDateString()}</td>
                          <td>${invoices?.GIOKHAM.toLocaleTimeString()}</td>
                          <td>${invoices?.CHANDOAN}</td>
                          <td>${invoices?.TRIEUCHUNG}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <hr />
                  <h2>Prescription</h2>
                  <div class="row my-2 mx-1 justify-content-center">
                    <table class="table table-striped table-borderless">
                      <thead
                        style="background-color:#84B0CA ;"
                        class="text-white"
                      >
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Batch code</th>
                          <th scope="col">Id of drug</th>
                          <th scope="col">Name of drug</th>
                          <th scope="col">Amount Indicate</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Unit Price</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${prescriptions.map((data: Prescription, idx) => (
                          <tr>
                            <td>{idx + 1}</td>
                            <td>{data.MALO}</td>
                            <td>{data.MATHUOC}</td>
                            <td>{data.TENTHUOC}</td>
                            <td>{data.LIEULUONG}</td>
                            <td>{data.SOLUONG}</td>
                            <td>{data.DONGIA}</td>
                            <td>{data.THANHTIEN}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <hr />
                  <h2>Service</h2>
                  <div class="row my-2 mx-1 justify-content-center">
                    <table class="table table-striped table-borderless">
                      <thead
                        style="background-color:#84B0CA ;"
                        class="text-white"
                      >
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Id of Service</th>
                          <th scope="col">Name of drug</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${services.map((data: serviceIndicators, idx) => (
                          <tr>
                            <td>{idx + 1}</td>
                            <td>{data.MADV}</td>
                            <td>{data.TENDV}</td>
                            <td>{data.DONGIA}</td>
                            <td>{data.THANHTIEN}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div class="row">
                    <div class="col-xl-8">
                      <p class="ms-3">
                        Add additional notes and payment information
                      </p>
                    </div>
                    <div class="col-xl-3">
                      <ul class="list-unstyled">
                        <li class="text-muted ms-3">
                          <span class="text-black me-4">SubTotal</span>
                          ${invoices?.TONGTIEN}
                        </li>
                        <li class="text-muted ms-3 mt-2">
                          <span class="text-black me-4">Tax(10%)</span>
                          ${invoices?.TONGTIEN ? invoices.TONGTIEN * 0.1 : ""}
                        </li>
                      </ul>
                      <p class="text-black float-start">
                        <span class="text-black me-3"> Total Amount</span>
                        <span style="font-size: 25px;">
                          ${
                            invoices?.TONGTIEN
                              ? (invoices.TONGTIEN * 1.1).toFixed(1)
                              : ""
                          }
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 `;

  return res.send(htmlContent);
});

patientRouter.get("/home", patient, async (req, res) => {
  return res.send(<Home />);
});

patientRouter.get("/drug", patient, async (req, res) => {
  const drugList: drugProps[] = (
    await (await req.db()).execute("GET_INFO_THUOC")
  ).recordset;
  
  return res.send(<Drug drugs={drugList} />);
});

patientRouter.get("/dentist", patient, async (req, res) => {
  const dentists: DentistProps[] = (await getAllDentist(req, res))
    ? await getAllDentist(req, res)
    : [];

  return res.send(<Dentist dentists={dentists} />);
});

patientRouter.get("/schedule", patient, async (req, res) => {
  return res.send(<ScheduleComponent role={'patient'}/>);
});

patientRouter.get("/schedule/date", patient, async (req, res) => {
  const dentistSchedule: Schedule[] = (await getScheduleIsFree(req, res)) || [];

  if (dentistSchedule.length === 0) {
    return res.send(
      `<h1 class="text-danger">Không tìm thấy lịch khám trong ngày</h1>`
    );
  }

  const htmlContent = dentistSchedule
    .map((item) => {
      return `
    <div class="row w-auto py-3 m-3">
      <img class="col-sm-3 col-md-3 p-0 rounded-2 w-auto" />
      <div class="col-sm-9 col-md-9">
        <div class="d-flex justify-content-between align-items-center">
          <h1 class="text-4xl">${item.HOTEN}</h1>
          <a 
            href="/patient/schedule/date/${item.MANS}/${item.HOTEN}/${
        item.NGAYKHAM
      }/${item.GIOKHAM}" 
            class="btn btn-primary">
            <h1 class="text-lg text-success">Available</h1>
          </a>
        </div>
        <h2 class="fw-lighter text-2xl">${
          item.NGAYKHAM.toISOString().split("T")[0]
        }</h2>
        <h2 class="fw-lighter text-xl">${
          item.GIOKHAM.toISOString().split("T")[1].split(".")[0]
        }</h2>
      </div>
    </div>`;
    })
    .join("");

  return res.send(htmlContent);
});

patientRouter.get("/information", patient, async (req, res) => {
  let patient: Patient | undefined;
  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    patient = (await getPatientById(req, res, data.user.MABN)) as Patient;
  } catch {}
  return res.send(<ProfilePage data={patient} />);
});

patientRouter.get("/home/edit-profile", patient, async (req, res) => {
  let data: Patient|undefined;
  try {
    const token = req.cookies.token as string;
    const patient =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    data = (await getPatientById(req, res, patient.user.MABN)) as Patient;
  } catch {}
  return res.send(<EditProfile data={data} role={'patient'}/>);
});

patientRouter.put("/home/edit-profile", patient, async (req, res) => {
  const { MA, HOTEN, DIACHI, NGAYSINH, MATKHAU } = req.body;

  const data: Patient = (
    await (await req.db())
      .input("MABN", MA)
      .input("MATKHAU", MATKHAU)
      .input("HOTEN", HOTEN)
      .input("NGAYSINH", NGAYSINH)
      .input("DIACHI", DIACHI)
      .execute("UPDATE_INFO_BENHNHAN")
  ).recordset[0];
  

  return res
    .header("HX-Redirect", `/patient/information`)
    .json("Directed")
    .status(200);
});

patientRouter.get(
  "/schedule/date/add_appointment",
  patient,
  async (req, res) => {
    const token = req.cookies.token as string;
    const infoPatient =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};

    let detailSchedule: Schedule = {
      MANS: "",
      HOTEN: "",
      NGAYKHAM: new Date(),
      GIOKHAM: new Date(),
    };
    if (Object.entries(req.query).length !== 0) {
      detailSchedule.MANS = (req.query.MANS as string) || "";
      detailSchedule.HOTEN = (req.query.HOTEN as string) || "";
      detailSchedule.NGAYKHAM = new Date(req.query.NGAYKHAM as string) || "";
      detailSchedule.GIOKHAM = new Date(req.query.GIOKHAM as string) || "";
    }
    return res.send(
      <AddAppointment
        detailSchedule={detailSchedule}
        infoPatient={infoPatient.user}
      />
    );
  }
);

patientRouter.get(
  "/schedule/date/:MANS/:HOTEN/:NGAYKHAM/:GIOKHAM",
  patient,
  async (req, res) => {
    const { MANS, HOTEN, NGAYKHAM, GIOKHAM } = req.params;

    return res
      .header(
        "HX-Redirect",
        `/patient/schedule/date/add_appointment?MANS=${encodeURIComponent(
          MANS
        )}&HOTEN=${encodeURIComponent(HOTEN)}&NGAYKHAM=${encodeURIComponent(
          NGAYKHAM
        )}&GIOKHAM=${encodeURIComponent(GIOKHAM)}`
      )
      .json("Directed")
      .status(200);
  }
);

patientRouter.post(
  "/schedule/date/add_appointment",
  patient,
  async (req, res) => {
    try {
      const input = req.body;

      console.log(input);
      const user = (
        await (await req.db())
          .input("TEN", input.patient_name)
          .input("DIENTHOAI", input.phoneNum)
          .input("NGAYSINH", input.dob)
          .input("DIACHI", input.address)
          .input("MANS", input.dentist_id)
          .input("NGAYKHAM", input.doa)
          .input("GIOKHAM", input.hour)
          .execute("REGISTER_LICHKHAM")
      ).recordset;

      return res
        .header("HX-Redirect", "/patient/schedule")
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
  }
);

patientRouter.get("/appointment", patient, async (req, res) => {
  const token = req.cookies.token as string;
  const data = (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
  const { MABN } = data.user;

  const appointments: AppointmentDetailProps[] =
    (await getAppointmentNotDone(req, res, MABN)) ?? [];

  const appointmentsFinished: AppointmentDetail[] =
    (await getAppointmentIsDoneOfPatient(req, res, MABN)) ?? [];

  return res.send(
    <Appointment
      appointments={appointments}
      appointmentsFinished={appointmentsFinished}
    />
  );
});

patientRouter.delete("/appointment", patient, async (req, res) => {
  await deleteAppointment(req, res);
});

patientRouter.get("/about", patient, async (req, res) => {
  return res.send(<Security />);
});

export default patientRouter;
