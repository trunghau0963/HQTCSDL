import * as elements from "typed-html";
import StaffPage from "../../staff";
import {
  AppointmentDetail,
  Invoice,
  Prescription,
  Schedule,
} from "../../../../model/model";
import { html2pdf } from "html2pdf-ts";
import { number } from "joi";
import BaseHtml from "../../../../layouts/baseHtml";

const PreviewAppointment = ({
  detailSchedule,
}: {
  detailSchedule: AppointmentDetail;
}) => {
  return (
    <BaseHtml>
      <div
        class="page-wrapper"
        id={`appointmentCard`}
        tabindex="-1"
        role="dialog"
      >
        <div class="content" id="content">
          <div class="modal-dialog modal-lg">
            <div class="modal-content rounded bg-light">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="card">
                  <div class="card-body">
                    <div class="container mb-5 mt-3">
                      <div class="row d-flex align-items-baseline">
                        <div class="col-xl-9"></div>
                        <div class="col-xl-3 float-end">
                          <button
                            class="btn btn-success text-capitalize border-0"
                            data-mdb-ripple-color="dark"
                            onclick={`const invoiceBody = document.getElementById("invoiceBody");
                     
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
                          <button
                            class="btn btn-danger text-capitalize"
                            data-mdb-ripple-color="dark"
                            onclick={`const element = document.getElementById("invoiceBody");

                      if (element) {
                        const pdfOptions = {
                          margin: 10,
                          filename: invoice.pdf,
                          image: { type: "jpeg", quality: 0.98 },
                          html2canvas: { scale: 2 },
                          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
                        };
                  
                        html2pdf(element, pdfOptions);
                      }`}
                          >
                            <i class="bi bi-file-pdf"></i> Export
                          </button>
                        </div>
                        <hr />
                      </div>

                      <div class="container" id={`invoiceBody`}>
                        <div class="col-md-12">
                          <div class="text-center">
                            <h4 class="page-title text-primary">
                              Appointment Certificate
                            </h4>
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
                                Mr/Ms:{" "}
                                <span style="color:#5d9fc5 ;">{`${detailSchedule?.HOTENBENHNHAN}`}</span>
                              </li>
                              <li class="text-muted">Street, City</li>
                              <li class="text-muted">State, Country</li>
                              <li class="text-muted">
                                <i class="bi bi-phone"></i>{" "}
                                {`${detailSchedule?.DIENTHOAI}`}
                              </li>
                            </ul>
                          </div>
                          <div class="col-xl-4">
                            <ul class="list-unstyled">
                              <li class="text-muted">
                                <i
                                  class="bi bi-circle"
                                  style="color:#84B0CA ;"
                                ></i>{" "}
                                <span class="fw-bold">Creation Date: </span>
                                {`${new Date().toISOString().split("T")[0]}`}
                              </li>
                              <li class="text-muted">
                                <i
                                  class="bi bi-circle"
                                  style="color:#84B0CA ;"
                                ></i>{" "}
                                <span class="me-1 fw-bold">Status:</span>
                                <span class="badge bg-secondary text-black fw-bold">
                                  Wait
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
                                <th scope="col">Name Of Dentist</th>
                                <th scope="col">Name of Patient</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div class="d-flex">
                                    {detailSchedule?.HOTENNHASI}{" "}
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex">
                                    {detailSchedule?.HOTENBENHNHAN}
                                  </div>
                                </td>
                                <td>
                                  {
                                    detailSchedule?.NGAYKHAM.toISOString().split(
                                      "T"
                                    )[0]
                                  }
                                </td>
                                <td>
                                  {
                                    detailSchedule?.GIOKHAM.toISOString()
                                      .split("T")[1]
                                      .split(".")[0]
                                  }
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p class="text-black fw-bold">
                            <i class="bi bi-exclamation-lg"></i> Please come to
                            the clinic 15 minutes before the procedure
                          </p>
                          <a
                            class="btn btn-primary text-capitalize"
                            style="background-color:#60bdf3 ;"
                            href="/staff/schedule"
                          >
                            Thank you !
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseHtml>
  );
};

export default PreviewAppointment;
