import * as elements from "typed-html";
import StaffPage from "../../staff";
import { Invoice, Prescription } from "../../../../model/model";
import { html2pdf } from "html2pdf-ts";
import { number } from "joi";

const PreviewPage = ({
  invoice,
  prescriptions,
}: {
  invoice: Invoice;
  prescriptions: Prescription[];
}) => {
  return (
    <div
      class="container rounded vh-100 modal fade invoice"
      id={`receiptPrint-${invoice?.MACT}`}
      tabindex="-1"
      role="dialog"
      aria-labelledby={`receiptPrint-${invoice?.MACT}-button`}
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content rounded bg-light">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="card">
              <div class="modal-header d-flex justify-content-center">
                <div class="text-center">
                  <h1
                    class="modal-title fw-bold mx-3 my-3 text-center"
                    id="contactInfoModalLabel"
                  >
                    Invoice Detail
                  </h1>
                  <button
                    class="fw-bold btn btn-success rounded-pill text-center"
                    disabled=""
                  >
                    Success
                  </button>
                </div>
              </div>
              <div class="modal-body">
                <div class="card-body">
                  <div class="container mb-5">
                    <div class="row d-flex align-items-baseline">
                      <div class="col-xl-9">
                        <p style="color:#7e8d9f,fontSize:20px">
                          Invoice {">>"}{" "}
                          <strong>{`ID: #${invoice?.MACT}`}</strong>
                        </p>
                      </div>
                    </div>

                    <div class="container" id={`invoiceBody-${invoice?.MACT}`}>
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
                              To:{" "}
                              <span style="color:#5d9fc5 ;">{`${invoice?.HOTENBENHNHAN}`}</span>
                            </li>
                            <li class="text-muted">Street, City</li>
                            <li class="text-muted">State, Country</li>
                            <li class="text-muted">
                              <i class="bi bi-phone"></i>{" "}
                              {`${invoice?.DIENTHOAI}`}
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
                              ></i>{" "}
                              <span class="fw-bold">ID:</span>
                              {`#${invoice?.MACT}`}
                            </li>
                            <li class="text-muted">
                              <i
                                class="bi bi-circle"
                                style="color:#84B0CA ;"
                              ></i>{" "}
                              <span class="fw-bold">Creation Date: </span>
                              {`${
                                invoice?.NGAYKHAM.toISOString().split("T")[0]
                              }`}
                            </li>
                            <li class="text-muted">
                              <i
                                class="bi bi-circle"
                                style="color:#84B0CA ;"
                              ></i>{" "}
                              <span class="me-1 fw-bold">Status:</span>
                              <span class="badge bg-warning text-black fw-bold">
                                Unpaid
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
                                {invoice?.MACT}
                              </td>
                              <td>
                                <div class="d-flex">
                                  {invoice?.HOTENNHASI}{" "}
                                  <img
                                    src="/icons/warning.svg"
                                    class="mx-2"
                                    style="width: 20px; height: 20px;"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title={`ID : ${invoice?.MANS}`}
                                  />
                                </div>
                              </td>
                              <td>
                                <div class="d-flex">
                                  {invoice?.HOTENBENHNHAN}
                                  <img
                                    src="/icons/warning.svg"
                                    class="mx-2"
                                    style="width: 20px; height: 20px;"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title={`ID : ${invoice?.MABN}`}
                                  />
                                </div>
                              </td>
                              <td>
                                {invoice?.NGAYKHAM.toISOString().split("T")[0]}
                              </td>
                              <td>
                                {
                                  invoice?.GIOKHAM.toISOString()
                                    .split("T")[1]
                                    .split(".")[0]
                                }
                              </td>
                              <td>{invoice?.CHANDOAN}</td>
                              <td>{invoice?.TRIEUCHUNG}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div id={`detail-${invoice?.MACT}`}>
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
                              {prescriptions.map((data: Prescription, idx) => (
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
                      </div>
                      <div class="row">
                        <div class="col-xl-8">
                          <p class="ms-3">
                            Add additional notes and payment information
                          </p>
                        </div>
                        <div class="col-xl-3">
                          <ul class="list-unstyled">
                            <li class="text-muted">
                              <span class="text-black fw-bold me-4">
                                SubTotal
                              </span>
                              <br />
                              {`$${
                                invoice?.TONGTIEN
                                  ? (invoice.TONGTIEN * 1).toLocaleString(
                                      "en-US",
                                      {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      }
                                    )
                                  : ""
                              }`}
                            </li>
                            <li class="text-muted">
                              <span class="text-black fw-bold me-4">
                                Tax(8%)
                              </span>
                              <br />
                              {`$${
                                invoice?.TONGTIEN
                                  ? (invoice.TONGTIEN * 0.08).toLocaleString(
                                      "en-US",
                                      {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      }
                                    )
                                  : ""
                              }`}
                            </li>
                          </ul>
                          <p class="text-muted float-start">
                            <span class="text-black fw-bold me-3">
                              {" "}
                              Total Amount
                            </span>
                            <br />
                            <span style="font-size: 25px;">
                              {`$${
                                invoice?.TONGTIEN
                                  ? (invoice.TONGTIEN * 1.08).toLocaleString(
                                      "en-US",
                                      {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      }
                                    )
                                  : ""
                              }`}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <div class="d-flex align-items-center gap-3">
                  <button
                    class="btn btn-success text-capitalize border-0"
                    data-mdb-ripple-color="dark"
                    onclick={`const invoiceBody = document.getElementById("invoiceBody-${invoice?.MACT}");
                    if (invoiceBody) {
                      const originalContents = document.body.innerHTML;
                      const printContents = invoiceBody.innerHTML;
                      const additionalStyles = '<style>@page { size: portrait; }</style>';
                      document.body.innerHTML = additionalStyles + printContents;
                      window.print();
                      document.body.innerHTML = originalContents;
                      window.location.reload();
                    } else {
                      console.error("Element with id 'invoiceBody' not found.");
                    }`}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i class="bi bi-printer"></i> Print
                  </button>
                  <button
                    class="btn btn-danger text-capitalize"
                    data-mdb-ripple-color="dark"
                  >
                    <i class="bi bi-file-pdf"></i> Export
                  </button>
                  <button
                    class="close btn btn-dark text-capitalize border-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
