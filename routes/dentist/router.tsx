import { Request, Response, Router } from "express";
import * as elements from "typed-html";
import DentistPage from "../../app/dentist/dentist";
import Dashboard from "../../app/dentist/Dashboard/Dashboard";
import PatientPage from "../../app/dentist/Patient/Patient";
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
} from "../../model/model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getDentistById } from "../../controller/dentistController";
import ProfilePage from "../../app/dentist/Profile/Profile";
import NullPage from "../../components/Error/NullPage";
import {
  getScheduleOfDentist,
  getScheduleIsFreeOfDentist,
  getScheduleIsRegisteredOfDentist,
  addSchedule,
} from "../../controller/scheduleController";
import {
  directNewUrl,
  getAppointmentIsDoneOfDentist,
  getAppointmentNotDoneOfDentist,
  getAppointmentOfDentist,
  getAppointmentOfDentistByDate,
  getAppointmentPatientByDate,
  registerAppointment,
} from "../../controller/appoinmentController";
import { GetAppointment } from "../../components/Dentist/Schedule/functionSchedule";
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
import { getNameOfService } from "../../controller/serviceController";
import {
  getNameAllPatient,
  getPatientByName,
} from "../../controller/patientController";

const dentistRouter = Router();

dentistRouter.get("/dashboard", dentist, async (req, res) => {
  return res.send(<Dashboard />);
});

dentistRouter.get("/patient", dentist, async (req, res) => {
  return res.send(<PatientPage />);
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
    console.log("scheduleRegistereFinished: ", scheduleRegistereFinished);
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
  let nameDrugs: string[] = (await getNameOfDrug(req, res)) || [];
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
        !prescriptions.some((prescription) => prescription.TENTHUOC === drug)
    );
    nameServices = nameServices.filter(
      (service) =>
        !services.some((serviceIndicator) => serviceIndicator.TENDV === service)
    );
  }

  // console.log("prescriptions: ", prescriptions);
  // console.log("ten thuoc new: ", nameDrugs);
  // console.log("ten dv new: ", nameServices);

  if (!appointment.MABN) {
    return res.send(
      `<h1 class="text-danger">Không tìm thấy lịch khám trong ngày</h1>`
    );
  }
  const htmlContent = (appointment: AppointmentDetail) => {
    return `
  <form>
    <div class="p-6 my-3 mx-3">
      <div class="d-flex align-items-center my-3">
        <img
          src="/icons/date.svg"
          alt=""
          style="width: 1.5rem; height: 1.5rem;"
        />
        <h4 class="fw-bold ms-4">Date:</h4>
        <p class="ms-4">${appointment.NGAYKHAM.toDateString()}</p>
      </div>
      <div class="d-flex align-items-center my-3">
        <img
          src="/icons/time.svg"
          alt=""
          style="width: 1.5rem; height: 1.5rem;"
        />
        <h4 class="fw-bold ms-4">Time:</h4>
        <p class="ms-4">${
          appointment.GIOKHAM.toISOString().split("T")[1].split(".")[0]
        }</p>
      </div>
      <div class="d-flex align-items-center my-3">
        <img
          src="/icons/location.svg"
          alt=""
          style="width: 1.5rem; height: 1.5rem;"
        />
        <h4 class="fw-bold ms-4">Location:</h4>
        <p class="ms-4">${appointment.DIACHI}</p>
      </div>
      <div class="d-flex align-items-center my-3">
        <img
          src="/icons/location.svg"
          alt=""
          style="width: 1.5rem; height: 1.5rem;"
        />
        <h4 class="fw-bold ms-4">Description:</h4>
      </div>
    </div>
    <div class="row"> 
      <div class="form-outline mb-4 col-6">
        <label class="form-label font-weight-bold d-flex" for="HOTENNHASI">
          Name of Dentist 
          <img
          src="/icons/warning.svg"
          class="mx-2"
          style="width: 20px; height: 20px;"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="ID : ${appointment.MANS}"
          />
        </label>
        <input
          type="text"
          id="HOTENNHASI"
          class="form-control form-control-lg"
          name="HOTENNHASI"
          required=""
          value="${appointment.HOTENNHASI}"
          placeholder="${appointment.HOTENNHASI}"
          readonly="true"
        />
      </div>
      <div class="form-outline mb-4 col-6">
        <label
          class="form-label font-weight-bold d-flex"
          for="HOTENBENHNHAN"
        >
          Name of Patient
          <img
          src="/icons/warning.svg"
          class="mx-2"
          style="width: 20px; height: 20px;"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="ID : ${appointment.MABN}"
          />
        </label>
        <input
          type="text"
          id="HOTENBENHNHAN"
          class="form-control form-control-lg"
          name="HOTENBENHNHAN"
          required=""
          value="${appointment.HOTENBENHNHAN}"
          placeholder="${appointment.HOTENBENHNHAN}"
          readonly="true"
          />
      </div>
    </div>
    <div class="row"> 
      <div class="form-outline mb-4 col-6">
        <label class="form-label font-weight-bold" for="DIENTHOAI">
          Phone of Patient <span class="text-danger"></span>
        </label>
        <input
          type="text"
          id="DIENTHOAI"
          class="form-control form-control-lg"
          name="DIENTHOAI"
          required=""
          value="${appointment.DIENTHOAI}"
          placeholder="${appointment.DIENTHOAI}"
          readonly="true"
        />
      </div>
      <div class="form-outline mb-4 col-6">
        <label class="form-label" for="NGAYSINH">
          Date of Birth
        </label>
        <input
          type="text"
          id="NGAYSINH"
          class="form-control form-control-lg"
          name="NGAYSINH"
          value="${appointment.NGAYSINH.toLocaleDateString()}"
          readonly="true"
          placeholder="${appointment.NGAYSINH.toLocaleDateString()}"
        />
      </div>
    </div>
  </form>
    ${
      IdInvoice
        ? ` <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Prescription List
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
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
                    <th scope="col">Action</th>
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
                      <td class="text-right">
                        <button
                          type="button"
                          class="btn btn-link text-decoration-none"
                          hx-post="/dentist/schedule/delete-drug-prescription"
                          hx-vars={`{'MACT': '${IdInvoice}', 'MATHUOC': '${data.MATHUOC}', 'MALO': '${data.MALO}'} `}
                        >
                          <i class="bi bi-eraser"></i>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <form
                  id="add-prescription-form"
                  hx-post="/dentist/schedule/add-prescription"
                >
                <div class="row">
                  <div class="col">
                    <label class="form-label" for="MACT">MACT</label>
                    <input
                      type="text"
                      id="MACT"
                      class="form-control"
                      name="MACT"
                      value=${IdInvoice}
                      required=""
                      placeholder=${IdInvoice}
                      readonly="true"
                    />
                  </div>
  
                  <div class="col">
                    <label class="form-label" for="TENTHUOC">TENTHUOC</label>
                    <select
                      class="form-control"
                      id="TENTHUOC"
                      name="TENTHUOC"
                    >
                      ${nameDrugs.map((name) => (
                        <option value={name}>{name}</option>
                      ))}
                    </select>
                  </div>
                  <div class="col">
                    <label class="form-label" for="SOLUONG">
                      SOLUONG
                    </label>
                    <input
                      type="number"
                      id="SOLUONG"
                      class="form-control"
                      name="SOLUONG"
                      required=""
                    />
                  </div>
  
                  <div class="col">
                    <label class="form-label" for="LIEULUONG">
                      LIEULUONG
                    </label>
                    <input
                      type="number"
                      id="LIEULUONG"
                      class="form-control"
                      name="LIEULUONG"
                      required=""
                    />
                  </div>
                  <div class="col d-flex align-items-end">
                    <button
                      type="submit"
                      hx-target="#add-prescription-form"
                      hx-swap="outerHTML"
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Service Indicator List
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
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
                    <th scope="col">Action</th>
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
                      <td class="text-right">
                        <button
                          type="button"
                          class="btn btn-link text-decoration-none"
                          hx-post="/dentist/schedule/delete-service-indicators"
                          hx-vars={`{'MACT': '${IdInvoice}', 'MADV': '${data.MADV}'} `}
                        >
                          <i class="bi bi-eraser"></i>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <form
                  id="add-prescription-form"
                  hx-post="/dentist/schedule/add-service-indicators"
                >
                <div class="row">
                  <div class="col">
                    <label class="form-label" for="MACT">MACT</label>
                    <input
                      type="text"
                      id="MACT"
                      class="form-control"
                      name="MACT"
                      value=${IdInvoice}
                      required=""
                      placeholder=${IdInvoice}
                      readonly="true"
                    />
                  </div>
  
                  <div class="col">
                    <label class="form-label" for="TENDV">TENDV</label>
                    <select
                      class="form-control"
                      id="TENDV"
                      name="TENDV"
                    >
                      ${nameServices.map((name) => (
                        <option value={name}>{name}</option>
                      ))}
                    </select>
                  </div>
                  <div class="col d-flex align-items-end">
                    <button
                      type="submit"
                      hx-target="#add-prescription-form"
                      hx-swap="outerHTML"
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Delete record 
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <p class="fw-bold">Are you sure you want to delete this Record? </p> 
                You will need to <code>create new record</code> to
                continue working with this patient.
              <br/>
              <button
                class="btn btn-sm btn-danger"
              >
                Delete record
              </button>
            </div>
          </div>
        </div>
      </div>`
        : `
      <form 
        id="action-appointment-form"
        hx-post="/dentist/schedule/add-action"
        hx-vars="'MACT': '${IdInvoice}','MANS':'${
            appointment.MANS
          }', 'MABN': '${appointment.MABN}', 'NGAYKHAM': '${
            appointment.NGAYKHAM
          }', 'GIOKHAM': '${
            appointment.GIOKHAM.toISOString().split("T")[1].split(".")[0]
          }'"
      >
        <div class="row"> 
          <div class="form-outline mb-4 col-6">
            <label class="form-label font-weight-bold" for="TRIEUCHUNG">
              Symptom of Patient <span class="text-danger"></span>
            </label>
            <input
              type="text"
              id="TRIEUCHUNG"
              class="form-control form-control-lg"
              name="TRIEUCHUNG"
              required=""
              placeholder="symptom"
            />
          </div>
          <div class="form-outline mb-4 col-6">
            <label class="form-label" for="CHANDOAN">
              Diagnostic
            </label>
            <input
              type="text"
              id="CHANDOAN"
              class="form-control form-control-lg"
              name="CHANDOAN"
              placeholder="Diagnostic"
            />
          </div>
        </div>
        <button
          hx-target="#action-appointment-form"
          hx-swap="outerHTML"
          class="btn btn-dark btn-lg py-3 w-100"
        >
          Add New Record
        </button>
      </form>`
    }
  `;
  };

  return res.send(htmlContent(appointment));
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

  const htmlContent = (
    patientsName: string[],
    idDentist: string,
    dateOfAppointment: string,
    hourOfAppointment: string,
    nameOfDentist: string
  ) => {
    return `
    <form
      id="add-appointment-form"
      hx-post="/dentist/schedule/add-appointment"
    >
      <div class="row">
        <div class="form-outline mb-4 col-6">
          <label class="form-label" for="MANS">Id of Dentist</label>
          <input
            type="text"
            id="MANS"
            class="form-control form-control-lg"
            name="MANS"
            value=${idDentist}
            required=""
            placeholder=${idDentist}
            readonly="true"
          />
        </div>

        <div class="form-outline mb-4 col-6">
          <label class="form-label" for="TEN">Name of Patient</label>
          <select
            class="form-control form-control-lg"
            id="TEN"
            name="TEN"
          >
            ${patientsName.map((name) => <option value={name}>{name}</option>)}
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 form-outline mb-4">
          <label for="NGAYKHAM" class="form-label">
            Date of appointment
          </label>
          <input
            type="text"
            class="form-control form-control-lg"
            id="NGAYKHAM"
            name="NGAYKHAM"
            value=${dateOfAppointment}
            required=""
            placeholder=${dateOfAppointment}
            readonly="true"
          />
        </div>
        <div class="col-sm-6 form-outline mb-4">
          <label for="GIOKHAM" class="form-label">
            Hour of appointment
          </label>
          <input
            type="text"
            class="form-control form-control-lg"
            id="GIOKHAM"
            name="GIOKHAM"
            value=${hourOfAppointment}
            required=""
            placeholder=${hourOfAppointment}
            readonly="true"
          />
        </div>
      </div>
      <button
        hx-target="#add-appointment-form"
        hx-swap="outerHTML"
        class="btn btn-dark btn-lg w-100 py-3 my-2"
      >
        Create Appointment
      </button>
    </form>
    <p>
      <a class="btn btn-success py-3 px-2 w-100" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Add New Patient 
      </a>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        <form
          id="add-new-appointment-form"
          hx-post="/dentist/schedule/add-new-appointment"
        >
          <div class="row">
            <div class="col-sm-6 form-outline mb-4">
              <label for="patient_name" class="form-label">
                Patient Name
              </label>
              <input
                type="text"
                class="form-control form-control-lg"
                name="patient_name"
                id="patient_name"
                placeholder=""
              />
            </div>
            <div class="col-sm-6 form-outline mb-4">
              <label class="form-label" for="phoneNum">
                Patient Phone Number
              </label>
              <input type="text" class="form-control form-control-lg" id="phoneNum" name="phoneNum" />
            </div>
          </div>
          <div class="row">
          <div class="form-outline mb-4 col-6">
            <label class="form-label" for="MANS">Id of Dentist</label>
            <input
              type="text"
              id="MANS"
              class="form-control form-control-lg"
              name="MANS"
              value=${idDentist}
              required=""
              placeholder=${idDentist}
              readonly="true"
            />
          </div>
  
          <div class="col-sm-6 form-outline mb-4">
              <label for="dentist_name" class="form-label">
                Dentist Name
              </label>
              <input
                type="text"
                class="form-control form-control-lg"
                name="dentist_name"
                id="dentist_name"
                value=${nameOfDentist}
                required=""
                placeholder=${nameOfDentist}
                readonly="true"
              />
            </div>
        </div>
          <div class="row">
            <div class="col-sm-6 form-outline mb-4">
              <label class="form-label" for="address">
                Address
              </label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="address"
                required=""
                name="address"
              />
            </div>
            <div class="col-sm-6 form-outline mb-4">
              <label for="dob" class="form-label">
                Date of birth
              </label>
              <input
                type="date"
                class="form-control form-control-lg"
                name="dob"
                required=""
                id="dob"
              />
            </div>
          </div>
          <div class="row">
          <div class="col-sm-6 form-outline mb-4">
            <label for="NGAYKHAM" class="form-label">
              Date of appointment
            </label>
            <input
              type="text"
              class="form-control form-control-lg"
              id="NGAYKHAM"
              name="doa"
              value=${dateOfAppointment}
              required=""
              placeholder=${dateOfAppointment}
              readonly="true"
            />
          </div>
          <div class="col-sm-6 form-outline mb-4">
            <label for="GIOKHAM" class="form-label">
              Hour of appointment
            </label>
            <input
              type="text"
              class="form-control form-control-lg"
              id="GIOKHAM"
              name="hour"
              value=${hourOfAppointment}
              required=""
              placeholder=${hourOfAppointment}
              readonly="true"
              />
            </div>
          </div>
          <button
            hx-target="#add-new-appointment-form"
            hx-swap="outerHTML"
            class="btn btn-danger btn-lg w-100 py-3"
          >
            Create New Appointment
          </button>
        </form>
      </div>
    </div>
    
    `;
  };
  return res.send(
    htmlContent(
      patientsName,
      idDentist,
      dateOfAppointment,
      hourOfAppointment,
      nameOfDentist
    )
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
    // const date = new Date(NGAYKHAM).toISOString().split("T")[0];
    // const hour = new Date(GIOKHAM).toISOString().split("T")[1].split(".")[0];
    console.log("MANS: ", MANS);
    console.log("TEN: ", TEN);
    console.log("NGAYKHAM: ", NGAYKHAM);
    const patient: Patient = (await getPatientByName(req, res, TEN)) as Patient;
    const dob = patient.NGAYSINH.toISOString().split("T")[0];
    const convertTime = `${GIOKHAM}:00`;
    console.log("GIOKHAM: ", convertTime);
    console.log("dob: ", dob);
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

export default dentistRouter;
