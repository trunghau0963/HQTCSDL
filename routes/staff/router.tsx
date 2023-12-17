import { Router } from "express";
import { Request, Response } from "express";
import * as elements from "typed-html";
import StaffPage from "../../app/staff/staff";
import Dashboard from "../../app/staff/Dashboard/Dashboard";
import Home from "../../app/staff/Home/Home";
import Drug from "../../app/staff/Drug/Drug";
import { staff } from "../auth/router";
import ServicePage from "../../app/staff/Service/Service";
import jwt, { JwtPayload } from "jsonwebtoken";
import {
  Invoice,
  Patient,
  Prescription,
  Staff,
  drugProps,
  Service,
  AppointmentDetailProps,
  serviceIndicators,
} from "../../model/model";
import { getStaffById } from "../../controller/staffController";
import ProfilePage from "../../app/staff/Profile/Profile";
import {
  getAllPatient,
  getIdAllPatient,
} from "../../controller/patientController";
import AddPrescription from "../../app/staff/Invoice/Prescription/addPrescription";
import DeletePrescription from "../../app/staff/Invoice/Prescription/deletePrescription";
import {
  getIdInvoice,
  getInvoiceDetailById,
  directNewUrl,
  addInvoice,
  getInvoice,
  getInvoiceDetailByIdWithHtmx,
} from "../../controller/invoiceController";
import {
  addDrugIntoPrescription,
  deleteDrugIntoPrescription,
} from "../../controller/prescriptionController";
import {
  addDrug,
  getNameOfDrug,
  getDrugInfo,
  deleteDrug,
  updateInfoDrug,
} from "../../controller/drugController";
import { getNameOfService } from "../../controller/serviceController";
import AddServiceIndicators from "../../app/staff/Invoice/ServiceIndicators/addServiceIndicator";
import DeleteServiceIndicators from "../../app/staff/Invoice/ServiceIndicators/deleteServiceIndicator";
import {
  addServiceIndicators,
  deleteServiceIndicators,
  getServiceIndicatorsById,
} from "../../controller/serviceIndicatorsController";
import NullPage from "../../components/Error/NullPage";
import { getPrescriptionById } from "../../controller/prescriptionController";
import PreviewPage from "../../app/staff/Invoice/Preview/previewPage";
import InvoicePage from "../../app/staff/Invoice/Invoice";
import DrugPage from "../../app/staff/Drug/Drug";
import { getService } from "../../controller/serviceController";
import {
  addService,
  deleteService,
  updateService,
} from "../../controller/serviceController";
import AddInvoice from "../../app/staff/Invoice/add-invoice";
import { getIdAllDentist } from "../../controller/dentistController";
import { getAppointmentIsDone } from "../../controller/appoinmentController";
import Schedule from "../../app/staff/Schedule/Schedule";
import { getScheduleIsFree } from "../../controller/scheduleController";
import AddAppointment from "../../components/Appointment/add_appointment";
import PreviewAppointment from "../../app/staff/Invoice/Preview/previewAppointmentCard";
import EditProfile from "../../app/patient/Profile/EditProfile";

const staffRouter = Router();

staffRouter.get("/", staff, async (req, res) => {
  return res.send(<StaffPage />);
});

staffRouter.get("/dashboard", staff, async (req, res) => {
  return res.send(<Dashboard />);
});

staffRouter.get("/home", staff, async (req, res) => {
  return res.send(<Home />);
});

staffRouter.get("/drug", [
  staff,
  async (req: any, res: any) => {
    try {
      const drugs: drugProps[] = (await getDrugInfo(req, res)) || [];
      return res.send(<DrugPage drugs={drugs} />);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Internal Server Error");
    }
  },
]);
staffRouter.post("/drug", staff, async (req: any, res: any) => {
  addDrug(req, res, "staff");
});
staffRouter.delete("/drug", staff, async (req: any, res: any) => {
  deleteDrug(req, res, "staff");
});
staffRouter.put("/drug", staff, async (req: any, res: any) => {
  updateInfoDrug(req, res, "staff");
});

staffRouter.get("/schedule", staff, async (req, res) => {
  return res.send(<Schedule role={"staff"} />);
});

staffRouter.get("/schedule/date", staff, async (req, res) => {
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
            href="/staff/schedule/date/${item.MANS}/${item.HOTEN}/${
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
staffRouter.get("/schedule/date/add_appointment", staff, async (req, res) => {
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
  return res.send(<AddAppointment detailSchedule={detailSchedule} />);
});

staffRouter.get(
  "/schedule/date/:MANS/:HOTEN/:NGAYKHAM/:GIOKHAM",
  staff,
  async (req, res) => {
    const { MANS, HOTEN, NGAYKHAM, GIOKHAM } = req.params;

    return res
      .header(
        "HX-Redirect",
        `/staff/schedule/date/add_appointment?MANS=${encodeURIComponent(
          MANS
        )}&HOTEN=${encodeURIComponent(HOTEN)}&NGAYKHAM=${encodeURIComponent(
          NGAYKHAM
        )}&GIOKHAM=${encodeURIComponent(GIOKHAM)}`
      )
      .json("Directed")
      .status(200);
  }
);

staffRouter.post("/schedule/date/add_appointment", staff, async (req, res) => {
  try {
    const input = req.body;

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
    ).recordset[0];

    return res
      .header(
        "HX-Redirect",
        `/staff/schedule/previewAppointment?MANS=${encodeURIComponent(
          user.MANS
        )}&HOTEN=${encodeURIComponent(
          user.HOTENNHASI
        )}&NGAYKHAM=${encodeURIComponent(
          user.NGAYKHAM
        )}&GIOKHAM=${encodeURIComponent(user.GIOKHAM)}`
      )
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

staffRouter.get("/schedule/previewAppointment", staff, async (req, res) => {
  try {
    let infoSchedule: Schedule = {
      MANS: "",
      HOTEN: "",
      NGAYKHAM: new Date(),
      GIOKHAM: new Date(),
    };
    if (Object.entries(req.query).length !== 0) {
      infoSchedule.MANS = (req.query.MANS as string) || "";
      infoSchedule.HOTEN = (req.query.HOTEN as string) || "";
      infoSchedule.NGAYKHAM = new Date(req.query.NGAYKHAM as string) || "";
      infoSchedule.GIOKHAM = new Date(req.query.GIOKHAM as string) || "";
    }

    const detailSchedule = (
      await (await req.db())
        .input("MANS", infoSchedule.MANS)
        .input("NGAYKHAM", infoSchedule.NGAYKHAM.toISOString().split("T")[0])
        .input(
          "GIOKHAM",
          infoSchedule.GIOKHAM.toISOString().split("T")[1].split(".")[0]
        )
        .execute("GET_LICHKHAM_DETAIL_BY_ID_DATE")
    ).recordset[0];

    return res.send(<PreviewAppointment detailSchedule={detailSchedule} />);
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

staffRouter.get("/service", staff, async (req, res) => {
  let data: Service[] = [];
  try {
    data = (await getService(req, res)) as Service[];
  } catch {}
  return res.send(<ServicePage services={data} />);
});
staffRouter.post("/service", staff, (req: Request, res: Response) =>
  addService(req, res, "staff")
);
staffRouter.put("/service", staff, (req: Request, res: Response) =>
  updateService(req, res, "staff")
);
staffRouter.delete("/service", staff, (req: Request, res: Response) =>
  deleteService(req, res, "staff")
);

staffRouter.get("/invoice", staff, async (req, res) => {
  let invoices: Invoice[] = [];
  try {
    invoices = (await getInvoice(req, res)) as Invoice[];
  } catch {}

  return res.send(<InvoicePage invoices={invoices} />);
});

staffRouter.get("/invoice/serviceIndicator", staff, async (req, res) => {
  const { MACT } = req.query;

  let services: serviceIndicators[] = [];
  let prescriptions: Prescription[] = [];

  if (typeof MACT === "string") {
    prescriptions = (await getPrescriptionById(
      req,
      res,
      MACT
    )) as Prescription[];
    services = (await getServiceIndicatorsById(
      req,
      res,
      MACT
    )) as serviceIndicators[];
  }

  const htmxContent = `
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
    `;
  return res.send(htmxContent);
});

staffRouter.get("/invoice/failed", staff, async (req, res) => {
  return res.send(<NullPage title="invoice" />);
});

staffRouter.get("/invoice/add-prescription/:id", staff, async (req, res) => {
  let idInvoices: string[] = (await getIdInvoice(req, res)) || [];
  let nameDrugs: string[] = (await getNameOfDrug(req, res)) || [];
  return res.send(
    <AddPrescription listIdInvoice={idInvoices} listNameDrug={nameDrugs} />
  );
});

staffRouter.get("/invoice/delete-prescription/:id", staff, async (req, res) => {
  let idInvoices: string[] = (await getIdInvoice(req, res)) || [];
  let Drugs: drugProps[] = (await getDrugInfo(req, res)) || [];
  return res.send(
    <DeletePrescription listIdInvoice={idInvoices} listDrug={Drugs} />
  );
});

staffRouter.post(
  "/invoice/add-prescription/:id",
  staff,
  addDrugIntoPrescription
);
staffRouter.post(
  "/invoice/delete-prescription/:id",
  staff,
  deleteDrugIntoPrescription
);

staffRouter.get(
  "/invoice/add-service-indicators/:id",
  staff,
  async (req, res) => {
    let idInvoices: string[] = (await getIdInvoice(req, res)) || [];
    let nameServices: string[] = (await getNameOfService(req, res)) || [];
    return res.send(
      <AddServiceIndicators
        listIdInvoice={idInvoices}
        listNameService={nameServices}
      />
    );
  }
);

staffRouter.get(
  "/invoice/delete-service-indicators/:id",
  staff,
  async (req, res) => {
    let idInvoices: string[] = (await getIdInvoice(req, res)) || [];
    let nameServices: string[] = (await getNameOfService(req, res)) || [];
    return res.send(
      <DeleteServiceIndicators
        listIdInvoice={idInvoices}
        listNameService={nameServices}
      />
    );
  }
);

staffRouter.post(
  "/invoice/add-service-indicators/:id",
  staff,
  addServiceIndicators
);
staffRouter.post(
  "/invoice/delete-service-indicators/:id",
  staff,
  deleteServiceIndicators
);

staffRouter.post("/invoice", staff, directNewUrl);

// staffRouter.get("/invoice/:id", staff, async (req, res) => {
//   let prescriptions: Prescription[] = [];
//   let invoices: Invoice | undefined = await getInvoiceDetailById(req, res);
//   prescriptions = (await getPrescriptionById(
//     req,
//     res,
//     invoices?.MACT
//   )) as Prescription[];
//   return res.send(
//     <PreviewPage invoices={invoices} prescription={prescriptions} />
//   );
// });

staffRouter.get("/invoice/add/invoice", staff, async (req, res) => {
  let idPatient: string[] = (await getIdAllPatient(req, res)) || [];
  let idDentist: string[] = (await getIdAllDentist(req, res)) || [];
  return res.send(
    <AddInvoice listIdPatient={idPatient} listIdDentist={idDentist} />
  );
});

staffRouter.post("/invoice/add/invoice", staff, addInvoice);

staffRouter.get("/information", staff, async (req, res) => {
  let staff: Staff | undefined;

  try {
    const token = req.cookies.token as string;
    const data =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};

    staff = (await getStaffById(req, res, data.user.MANV)) as Staff;
  } catch {}
  return res.send(<ProfilePage data={staff} />);
});

staffRouter.get("/home/edit-profile", staff, async (req, res) => {
  let data: Staff | undefined;
  try {
    const token = req.cookies.token as string;
    const staff =
      (jwt.verify(token, process.env.JWT_TOKEN!) as JwtPayload) || {};
    data = (await getStaffById(req, res, staff.user.MANV)) as Staff;
  } catch {}
  return res.send(<EditProfile data={data} role={"staff"} />);
});

staffRouter.put("/home/edit-profile", staff, async (req, res) => {
  const { MA, HOTEN, DIACHI, NGAYSINH, MATKHAU } = req.body;

  const data: Staff = (
    await (await req.db())
      .input("MANV", MA)
      .input("MATKHAU", MATKHAU)
      .input("HOTEN", HOTEN)
      .input("NGAYSINH", NGAYSINH)
      .input("DIACHI", DIACHI)
      .execute("UPDATE_INFO_NHANVIEN")
  ).recordset[0];
  

  return res
    .header("HX-Redirect", `/staff/information`)
    .json("Directed")
    .status(200);
});

export default staffRouter;
