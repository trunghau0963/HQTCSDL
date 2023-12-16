import * as elements from "typed-html";
import { AppointmentDetailProps, Invoice, Patient } from "../../../model/model";
import { PreviewInvoice } from "./functionInvoice";

const PatientInvoiceComponent = ({
  invoices,
}: {
  invoices: Invoice[];
}) => {
  return (
    <div class="main-wrapper h-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <a
              class="text-center btn btn-tertiary btn-rounded float-right w-100 py-3 text-white"
              href="invoice/add/invoice"
            >
              <i class="bi bi-sliders"></i>Add Invoice
            </a>
            <div class="col-sm-6 col-md-12 my-2 mx-2">
              <form action="" method="POST">
                <div class="form-group form-focus">
                  <label class="focus-label"></label>
                  <input
                    type="text"
                    class="form-control floating w-100"
                    name="search"
                    placeholder="Search here..."
                  />
                  <button type="submit" class="btn btn-primary">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th style="min-width:100px;">Image</th>
                      <th>Patient Id</th>
                      <th>Patient Name</th>
                      <th>Dentist Id</th>
                      <th>Dentist Name</th>
                      <th>Date</th>
                      <th>Hours</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice, idx) => (
                      <tr>
                        <td>
                          <img
                            width="50"
                            height="50"
                            src={`/img/patient-thumb-0${idx + 1}.jpg`}
                            onerror="this.onerror=null;this.src='/img/user.jpg';"
                            class="rounded-circle"
                            alt=""
                          />{" "}
                          <h2></h2>
                        </td>
                        <td>{invoice?.MANS}</td>
                        <td>{invoice?.HOTENBENHNHAN}</td>
                        <td>{invoice?.MABN}</td>
                        <td>{invoice?.HOTENNHASI}</td>
                        <td>{invoice?.NGAYKHAM.toISOString().split("T")[0]}</td>
                        <td>{invoice?.GIOKHAM.toISOString().split("T")[1].split(".")[0]}</td>

                        <td class="text-right">
                          <div class="dropdown dropend" id="prescription">
                            <button
                              class="btn btn-link dropdown-toggle text-decoration-none"
                              type="button"
                              id={`prescription-button-${invoice.MABN}`}
                              invoice-bs-toggle="dropdown"
                              invoice-bs-target={`#prescription-${invoice.MABN}`}
                              aria-controls={`prescription-${invoice.MABN}`}
                              aria-expanded="false"
                            >
                              <i class="bi bi-receipt-cutoff"></i>
                              Prescription
                            </button>

                            <ul
                              class="dropdown-menu"
                              id={`prescription-${invoice.MABN}`}
                              aria-labelledby={`prescription-button-${invoice.MABN}`}
                            >
                              <li>
                                <a
                                  class="dropdown-item"
                                  href={`invoice/add-prescription/${invoice.MABN}`}
                                >
                                  Add Prescription
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href={`invoice/delete-prescription/${invoice.MABN}`}
                                >
                                  Delete Prescription
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="dropdown dropend" id="serviceIndicators">
                            <button
                              class="btn btn-link dropdown-toggle text-decoration-none"
                              type="button"
                              id={`service-indicators-button-${invoice.MABN}`}
                              invoice-bs-toggle="dropdown"
                              invoice-bs-target={`#service-indicators-${invoice.MABN}`}
                              aria-controls={`service-indicators-${invoice.MABN}`}
                              aria-expanded="false"
                            >
                              <i class="bi bi-app-indicator"></i>
                              Service Indicators
                            </button>

                            <ul
                              class="dropdown-menu"
                              id={`service-indicators-${invoice.MABN}`}
                              aria-labelledby={`service-indicators-button-${invoice.MABN}`}
                            >
                              <li>
                                <a
                                  class="dropdown-item"
                                  href={`invoice/add-service-indicators/${invoice.MABN}`}
                                >
                                  Add Indicators
                                </a>
                              </li>

                              <li>
                                <a
                                  class="dropdown-item"
                                  href={`invoice/delete-service-indicators/${invoice.MABN}`}
                                >
                                  Delete Indicators
                                </a>
                              </li>
                            </ul>
                          </div>
                          <PreviewInvoice invoice={invoice} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInvoiceComponent;
