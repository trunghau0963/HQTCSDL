import * as elements from "typed-html";
import { Patient } from "../../../model/model";
import { PreviewInvoice } from "./functionInvoice";
type PatientProps = {
  Data: Patient[];
};

const PatientInvoiceComponent = ({ Data }: PatientProps) => {
  Data.forEach((data) => {
    if (data.MATKHAU == undefined) data.MATKHAU = "NULL";
  });
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
                      <th>ID</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Password</th>
                      <th>DOB</th>
                      <th>Address</th>
                      <th>Locked</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data.map((data, idx) => (
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
                        <td>{data.MABN}</td>
                        <td>{data.HOTEN}</td>
                        <td>{data.DIENTHOAI}</td>
                        <td>{data.MATKHAU ? data.MATKHAU : "NULL"}</td>
                        <td>{data.NGAYSINH.toLocaleDateString()}</td>
                        <td>{data.DIACHI}</td>
                        <td>
                          {data.DAKHOA ? (
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id={`flexSwitchCheck_${data.MABN}`}
                                checked
                              />
                              <label
                                class="form-check-label"
                                for={`flexSwitchCheck_${data.MABN}`}
                              ></label>
                            </div>
                          ) : (
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id={`flexSwitchCheck_${data.MABN}`}
                              />
                              <label
                                class="form-check-label"
                                for={`flexSwitchCheck_${data.MABN}`}
                              ></label>
                            </div>
                          )}
                        </td>
                        <td class="text-right">
                          <div class="dropdown dropend" id="prescription">
                            <button
                              class="btn btn-link dropdown-toggle text-decoration-none"
                              type="button"
                              id={`prescription-button-${data.MABN}`}
                              data-bs-toggle="dropdown"
                              data-bs-target={`#prescription-${data.MABN}`}
                              aria-controls={`prescription-${data.MABN}`}
                              aria-expanded="false"
                            >
                              <i class="bi bi-receipt-cutoff"></i>
                              Prescription
                            </button>

                            <ul
                              class="dropdown-menu"
                              id={`prescription-${data.MABN}`}
                              aria-labelledby={`prescription-button-${data.MABN}`}
                            >
                              <li>
                                <a
                                  class="dropdown-item"
                                  href={`invoice/add-prescription/${data.MABN}`}
                                >
                                  Add Prescription
                                </a>
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href={`invoice/delete-prescription/${data.MABN}`}
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
                              id={`service-indicators-button-${data.MABN}`}
                              data-bs-toggle="dropdown"
                              data-bs-target={`#service-indicators-${data.MABN}`}
                              aria-controls={`service-indicators-${data.MABN}`}
                              aria-expanded="false"
                            >
                              <i class="bi bi-app-indicator"></i>
                              Service Indicators
                            </button>

                            <ul
                              class="dropdown-menu"
                              id={`service-indicators-${data.MABN}`}
                              aria-labelledby={`service-indicators-button-${data.MABN}`}
                            >
                              <li>
                                <a
                                  class="dropdown-item"
                                  href={`invoice/add-service-indicators/${data.MABN}`}
                                >
                                  Add Indicators
                                </a>
                              </li>

                              <li>
                                <a
                                  class="dropdown-item"
                                  href={`invoice/delete-service-indicators/${data.MABN}`}
                                >
                                  Delete Indicators
                                </a>
                              </li>
                            </ul>
                          </div>
                          <PreviewInvoice idPatient={data.MABN} />
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
