import * as elements from "typed-html";
export const GetAppointment = ({
  idDentist,
  date,
  idx,
  isDone,
}: {
  idDentist: string;
  date: Date;
  idx: number;
  isDone: boolean;
}) => {
  return (
    <div>
      {isDone ? (
        <button type="button" class="btn btn-success btn-sm" disabled="">
          Success
        </button>
      ) : (
        <button type="button" class="btn btn-warning btn-sm" disabled="">
          New
        </button>
      )}
      <button
        class={`btn btn-sm ${isDone ? "btn-secondary" : "btn-danger"}`}
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
        class="btn btn-sm btn-dark"
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
