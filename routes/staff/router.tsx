import { Router } from "express";
import { Request, Response } from "express";
import * as elements from "typed-html";
import StaffPage from "../../app/staff/staff";
import Dashboard from "../../app/staff/Dashboard/Dashboard";
import Home from "../../app/staff/Home/Home";
import Schedule from "../../app/staff/Schedule/Schedule";
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
import NullInvoice from "../../app/staff/Error/nullInvoice";
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
  return res.send(<Schedule />);
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
  console.log(MACT)
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
  <button
                      class="btn btn-success text-capitalize border-0"
                      data-mdb-ripple-color="dark"
                      onclick=${`const invoiceBody = document.getElementById("invoiceBody-${invoice?.MACT}");
                      alert("button was clicked");
                      if (invoiceBody) {
                        const originalContents = document.body.innerHTML;
                        const printContents = invoiceBody.innerHTML;
                  
                        // Apply additional styles for landscape layout
                        const additionalStyles = '<style>@page { size: landscape; }</style>';
                        document.body.innerHTML = additionalStyles + printContents;
                  
                        window.print();
                  
                        // Restore the original contents
                        document.body.innerHTML = originalContents;
                      } else {
                        console.error("Element with id 'invoiceBody' not found.");
                      }`}
                    >
                      <i class="bi bi-printer"></i> Print
                    </button>
 
    `;
  return res.send(htmxContent);
});

staffRouter.get("/invoice/failed", staff, async (req, res) => {
  return res.send(<NullInvoice />);
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
    console.log("data: ", data.user.HOTEN);
    staff = (await getStaffById(req, res, data.user.MANV)) as Staff;
  } catch {}
  return res.send(<ProfilePage data={staff} />);
});

export default staffRouter;
