import * as elements from "typed-html";
import {
  AppointmentDetail,
  Prescription,
  Service,
  serviceIndicators,
} from "../../../model/model";

//post
export const PostAppointment = ({
  idDentist,
  date,
  time,
  idx,
  isDone,
}: {
  idDentist: string;
  date: Date;
  time: Date;
  idx: number;
  isDone: boolean;
}) => {
  return (
    <div class="d-flex">
      {isDone ? (
        <button type="button" class="btn btn-success btn-sm mx-1" disabled="">
          Success
        </button>
      ) : (
        <div class="d-flex">
          <button type="button" class="btn btn-warning btn-sm" disabled="">
            New
          </button>
          <form
            id="delete-appointment-form"
            hx-post="/dentist/schedule/delete-appointment"
          >
            <input type="hidden" name="MANS" value={idDentist} />
            <input
              type="hidden"
              name="NGAYKHAM"
              value={date.toLocaleDateString()}
            />
            <input
              type="hidden"
              name="GIOKHAM"
              value={time.toISOString().split("T")[1].split(".")[0]}
            />

            <button
              class="btn btn-sm btn-danger px-2 mx-1"
              id={`drop-appointment-${idx}-button`}
              hx-swap="outerHTML"
              hx-target="#delete-appointment-form"
            >
              <i class="bi bi-calendar-x-fill"></i>
              Delete
            </button>
          </form>
        </div>
      )}

      <button
        class={`btn btn-sm ${isDone ? "btn-secondary" : "btn-dark"} px-2`}
        id={`get-registered-${idx}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#get-registered-${idx}`}
        aria-controls={`get-registered-${idx}`}
        hx-get="/dentist/schedule/appointment"
        hx-vars={`{'MANS': '${idDentist}', 'NGAYKHAM': '${date.toLocaleDateString()} '}`}
        hx-target={`.appointment-${idx}`}
      >
        {isDone ? (
          <span class="mx-3">
            <i class="bi bi-gear-fill"></i>Modify
          </span>
        ) : (
          <span>
            <i class="bi bi-person-add"></i>Register
          </span>
        )}
      </button>

      <div
        class="modal fade"
        id={`get-registered-${idx}`}
        tabindex="0"
        aria-labelledby={`get-registered-${idx}-button`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl bg-muted">
          <div class="modal-content">
            <div class="modal-header  d-flex flex-column justify-content-center">
              <div class="text-center">
                <h1
                  class="modal-title fw-bold mx-3 my-3 text-center"
                  id="contactInfoModalLabel"
                >
                  Appoinmnent Detail
                </h1>
                <button
                  class="fw-bold btn btn-success rounded-pill text-center"
                  disabled=""
                >
                  In Progress
                </button>
              </div>
            </div>
            <div class="modal-body">
              <div class={`appointment-${idx}`} id={`appointment-${idx}`}></div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-tertiary text-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AddScheduleFree = ({
  url,
  idDentist,
}: {
  url: string;
  idDentist: string;
}) => {
  return (
    <div>
      <a
        class="text-center btn btn-tertiary btn-rounded float-right w-100 py-3 text-white"
        data-toggle="modal"
        data-target=".add-drug"
      >
        <i class="bi bi-sliders"></i>Register Schedule
      </a>
      <div
        class="modal fade add-drug"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg bg-muted">
          <div class="modal-content">
            <div>
              <div>
                <div class="p-5">
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <h4 class="page-title">Register Schedule</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <form
                        id="add-free-schedule-form"
                        hx-post={`/${url}/schedule/freeSchedule`}
                      >
                        <div class="col-sm-12">
                          <div class="form-group">
                            <label class="font-weight-bold">
                              MANS <span class="text-danger">*</span>
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              name="MANS"
                              required=""
                              value={idDentist}
                              placeholder={idDentist}
                            />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label class="font-weight-bold">
                                Ngay Kham <span class="text-danger">*</span>
                              </label>
                              <input
                                class="form-control"
                                type="date"
                                name="NGAYKHAM"
                                required=""
                                min={new Date().toISOString().split("T")[0]}
                              />
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group form-outline">
                              <label class="form-label" for="GIOKHAM">
                                Time
                              </label>
                              <input
                                class="form-control"
                                type="time"
                                name="GIOKHAM"
                                required=""
                                pattern="(?:[01]\d|2[0-3]):[0-5]\d" // 24h format
                                placeholder="HH:mm"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center m-t-20 text-center">
                          <button
                            type="submit"
                            hx-target="#add-free-schedule-form"
                            hx-swap="outerHTML"
                            class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                          >
                            Add Schedule
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AddAppointment = ({
  idDentist,
  nameOfDentist,
  date,
  time,
  idx,
}: {
  idDentist: string;
  nameOfDentist: string;
  date: Date;
  time: Date;
  idx: number;
}) => {
  return (
    <div>
      <button type="button" class="btn btn-white btn-sm" disabled="">
        Free
      </button>
      <button
        class="btn btn-sm btn-tertiary text-light px-2"
        id={`registered-appointment-${idx}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#registered-appointment-${idx}`}
        aria-controls={`registered-appointment-${idx}`}
        hx-get="/dentist/schedule/add-appointment"
        hx-vars={`{"MANS": "${idDentist}", "HOTENNHASI": "${nameOfDentist}" ,"NGAYKHAM": "${date.toLocaleDateString()}", "GIOKHAM": "${
          time.toISOString().split("T")[1].split(".")[0]
        }"}`}
        hx-target={`.add-appointment-${idx}`}
      >
        <i class="bi bi-calendar2-plus-fill"></i>
        Add Appointment
      </button>

      <div
        class="modal fade"
        id={`registered-appointment-${idx}`}
        tabindex="0"
        aria-labelledby={`registered-appointment-${idx}-button`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl bg-muted">
          <div class="modal-content">
            <div class="modal-header  d-flex flex-column justify-content-center">
              <div class="text-center">
                <h1
                  class="modal-title fw-bold mx-3 my-3 text-center"
                  id="contactInfoModalLabel"
                >
                  Add Appoinmnent
                </h1>
                <button
                  class="fw-bold btn btn-warning rounded-pill text-center"
                  disabled=""
                >
                  Upcoming
                </button>
              </div>
            </div>
            <div class="modal-body">
              <div
                class={`add-appointment-${idx}`}
                id={`add-appointment-${idx}`}
              ></div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-tertiary text-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DeleteAppointment = ({
  idDentist,
  nameOfDentist,
  date,
  time,
  idx,
}: {
  idDentist: string;
  nameOfDentist: string;
  date: Date;
  time: Date;
  idx: number;
}) => {
  return (
    <div>
      <button
        class="btn btn-sm btn-dark"
        id={`registered-appointment-${idx}-button`}
        hx-get="/dentist/schedule/add-appointment"
        hx-vars={`{"MANS": "${idDentist}", "HOTENNHASI": "${nameOfDentist}" ,"NGAYKHAM": "${date.toLocaleDateString()}", "GIOKHAM": "${
          time.toISOString().split("T")[1].split(".")[0]
        }"}`}
      >
        <i class="bi bi-calendar-x-fill"></i>
        Delete
      </button>

      <div
        class="modal fade"
        id={`registered-appointment-${idx}`}
        tabindex="0"
        aria-labelledby={`registered-appointment-${idx}-button`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl bg-muted">
          <div class="modal-content">
            <div class="modal-header  d-flex flex-column justify-content-center">
              <div class="text-center">
                <h1
                  class="modal-title fw-bold mx-3 my-3 text-center"
                  id="contactInfoModalLabel"
                >
                  Add Appoinmnent
                </h1>
                <button
                  class="fw-bold btn btn-warning rounded-pill text-center"
                  disabled=""
                >
                  Upcoming
                </button>
              </div>
            </div>
            <div class="modal-body">
              <div
                class={`add-appointment-${idx}`}
                id={`add-appointment-${idx}`}
              ></div>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-tertiary text-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//get
export const GetSchedule = ({
  appointment,
  IdInvoice,
  prescriptions,
  nameDrugs,
  services,
  nameServices,
}: {
  appointment: AppointmentDetail;
  IdInvoice: string;
  prescriptions: Prescription[];
  nameDrugs: string[];
  services: serviceIndicators[];
  nameServices: string[];
}) => {
  return (
    <div>
      <form>
        <div class="p-6 my-3 mx-3">
          <div class="d-flex align-items-center my-3">
            <img
              src="/icons/date.svg"
              alt=""
              style="width: 1.5rem; height: 1.5rem;"
            />
            <h4 class="fw-bold ms-4">Date:</h4>
            <p class="ms-4">{appointment.NGAYKHAM.toDateString()}</p>
          </div>
          <div class="d-flex align-items-center my-3">
            <img
              src="/icons/time.svg"
              alt=""
              style="width: 1.5rem; height: 1.5rem;"
            />
            <h4 class="fw-bold ms-4">Time:</h4>
            <p class="ms-4">
              {appointment.GIOKHAM.toISOString().split("T")[1].split(".")[0]}
            </p>
          </div>
          <div class="d-flex align-items-center my-3">
            <img
              src="/icons/location.svg"
              alt=""
              style="width: 1.5rem; height: 1.5rem;"
            />
            <h4 class="fw-bold ms-4">Location:</h4>
            <p class="ms-4">{appointment.DIACHI}</p>
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
                title={`ID : ${appointment.MANS}`}
              />
            </label>
            <input
              type="text"
              id="HOTENNHASI"
              class="form-control form-control-lg"
              name="HOTENNHASI"
              required=""
              value={`${appointment.HOTENNHASI}`}
              placeholder={`${appointment.HOTENNHASI}`}
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
              value={`${appointment.HOTENBENHNHAN}`}
              placeholder={`${appointment.HOTENBENHNHAN}`}
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
              value={`${appointment.DIENTHOAI}`}
              placeholder={`${appointment.DIENTHOAI}`}
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
              value={`${appointment.NGAYSINH.toLocaleDateString()}`}
              readonly="true"
              placeholder={`${appointment.NGAYSINH.toLocaleDateString()}`}
            />
          </div>
        </div>
      </form>
      {IdInvoice ? (
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Prescription List
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <table class="table table-striped table-borderless">
                  <thead style="background-color:#84B0CA ;" class="text-white">
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
                    $
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
                      <label class="form-label" for="MACT">
                        MACT
                      </label>
                      <input
                        type="text"
                        id="MACT"
                        class="form-control"
                        name="MACT"
                        value={IdInvoice}
                        required=""
                        placeholder={IdInvoice}
                        readonly="true"
                      />
                    </div>

                    <div class="col">
                      <label class="form-label" for="TENTHUOC">
                        TENTHUOC
                      </label>
                      <select
                        class="form-control"
                        id="TENTHUOC"
                        name="TENTHUOC"
                      >
                        {nameDrugs.map((name) => (
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
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Service Indicator List
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
                <table class="table table-striped table-borderless">
                  <thead style="background-color:#84B0CA ;" class="text-white">
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
                    {services.map((data: serviceIndicators, idx) => (
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
                      <label class="form-label" for="MACT">
                        MACT
                      </label>
                      <input
                        type="text"
                        id="MACT"
                        class="form-control"
                        name="MACT"
                        value={IdInvoice}
                        required=""
                        placeholder={IdInvoice}
                        readonly="true"
                      />
                    </div>

                    <div class="col">
                      <label class="form-label" for="TENDV">
                        TENDV
                      </label>
                      <select class="form-control" id="TENDV" name="TENDV">
                        $
                        {nameServices.map((name) => (
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
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Delete record
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p class="fw-bold">
                  Are you sure you want to delete this Record?{" "}
                </p>
                You will need to <code>create new record</code> to continue
                working with this patient.
                <br />
                <button class="btn btn-sm btn-danger">Delete record</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form
          id="action-appointment-form"
          hx-post="/dentist/schedule/add-action"
          hx-vars={`'MACT': '${IdInvoice}','MANS':'${
            appointment.MANS
          }', 'MABN': '${appointment.MABN}', 'NGAYKHAM': '${
            appointment.NGAYKHAM.toISOString().split("T")[0]
          }', 'GIOKHAM': '${
            appointment.GIOKHAM.toISOString().split("T")[1].split(".")[0]
          }'`}
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
        </form>
      )}
    </div>
  );
};

export const GetAddAppointment = ({
  patientsName,
  idDentist,
  dateOfAppointment,
  hourOfAppointment,
  nameOfDentist,
}: {
  patientsName: string[];
  idDentist: string;
  dateOfAppointment: string;
  hourOfAppointment: string;
  nameOfDentist: string;
}) => {
  return (
    <div>
      <form
        id="add-appointment-form"
        hx-post="/dentist/schedule/add-appointment"
      >
        <div class="row">
          <div class="form-outline mb-4 col-6">
            <label class="form-label" for="MANS">
              Id of Dentist
            </label>
            <input
              type="text"
              id="MANS"
              class="form-control form-control-lg"
              name="MANS"
              value={idDentist}
              required=""
              placeholder={idDentist}
              readonly="true"
            />
          </div>

          <div class="form-outline mb-4 col-6">
            <label class="form-label" for="TEN">
              Name of Patient
            </label>
            <select class="form-control form-control-lg" id="TEN" name="TEN">
              $
              {patientsName.map((name) => (
                <option value={name}>{name}</option>
              ))}
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
              value={dateOfAppointment}
              required=""
              placeholder={dateOfAppointment}
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
              value={hourOfAppointment}
              required=""
              placeholder={hourOfAppointment}
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
        <a
          class="btn btn-success py-3 px-2 w-100"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
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
                <input
                  type="text"
                  class="form-control form-control-lg"
                  id="phoneNum"
                  name="phoneNum"
                />
              </div>
            </div>
            <div class="row">
              <div class="form-outline mb-4 col-6">
                <label class="form-label" for="MANS">
                  Id of Dentist
                </label>
                <input
                  type="text"
                  id="MANS"
                  class="form-control form-control-lg"
                  name="MANS"
                  value={idDentist}
                  required=""
                  placeholder={idDentist}
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
                  value={nameOfDentist}
                  required=""
                  placeholder={nameOfDentist}
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
                  value={dateOfAppointment}
                  required=""
                  placeholder={dateOfAppointment}
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
                  value={hourOfAppointment}
                  required=""
                  placeholder={hourOfAppointment}
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
    </div>
  );
};
