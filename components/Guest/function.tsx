import * as elements from "typed-html";
import { Schedule } from "../../model/model";

export const getScheduleDentist = ({
  idDentist,
  nameOfDentist,
  schedules,
  scheduleRegistered,
}: {
  idDentist: string;
  nameOfDentist: string;
  schedules: Schedule[];
  scheduleRegistered: Schedule[];
}) => {
  return (
    <div>
      <div
        class="accordion accordion-flush"
        id="accordionAddAppointmentForGuest"
      >
        {schedules.map((data: Schedule, idx) => (
          <div class="accordion-item">
            <h2 class="accordion-header" id={`flush-heading${idx + 1}`}>
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${idx + 1}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${idx + 1}`}
              >
                <div class="d-flex align-items-start">
                  <div class="p-6 my-3 mx-3">
                    <div class="d-flex align-items-center my-3">
                      <img
                        src="/icons/date.svg"
                        alt=""
                        style="width: 1.5rem; height: 1.5rem;"
                      />
                      <p class="ms-4 text-dark">
                        {data.NGAYKHAM.toDateString()}
                      </p>
                    </div>
                    <div class="d-flex align-items-center my-3">
                      <img
                        src="/icons/time.svg"
                        alt=""
                        style="width: 1.5rem; height: 1.5rem;"
                      />
                      <p class="ms-4 text-dark">
                        {data.GIOKHAM.toISOString().split("T")[1].split(".")[0]}
                      </p>
                    </div>
                  </div>
                  <div class="btn btn-success btn disabled align-self-center">
                    Free
                  </div>
                </div>
              </button>
            </h2>
            <div
              id={`flush-collapse${idx + 1}`}
              class="accordion-collapse collapse"
              aria-labelledby={`flush-heading${idx + 1}`}
              data-bs-parent="#accordionAddAppointmentForGuest"
            >
              <div class="accordion-body">
                <div
                  class={`add-appointment-${idx + 1}`}
                  id={`add-appointment-${idx + 1}`}
                >
                  <form
                    id="add-new-appointment-form"
                    hx-post="/add-new-appointment"
                  >
                    <div class="row">
                      <div class="col-6 form-outline mb-4">
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
                      <div class="col-6 form-outline mb-4">
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

                      <div class="col-6 form-outline mb-4">
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
                      <div class="col-6 form-outline mb-4">
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
                      <div class="col-6 form-outline mb-4">
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
                      <div class="col-6 form-outline mb-4">
                        <label for="doa" class="form-label">
                          Date of appointment
                        </label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="doa"
                          required=""
                          value={data.NGAYKHAM.toISOString().split("T")[0]}
                          name="doa"
                          placeholder={
                            data.NGAYKHAM.toISOString().split("T")[0]
                          }
                          readonly="true"
                        />
                      </div>
                      <div class="col-6 form-outline mb-4">
                        <label for="hour" class="form-label">
                          Hour of appointment
                        </label>
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="hour"
                          value={
                            data.GIOKHAM.toISOString()
                              .split("T")[1]
                              .split(".")[0]
                          }
                          required=""
                          placeholder={
                            data.GIOKHAM.toISOString()
                              .split("T")[1]
                              .split(".")[0]
                          }
                          name="hour"
                          readonly="true"
                        />
                      </div>
                    </div>
                    <button
                      hx-target="#add-new-appointment-form"
                      hx-swap="outerHTML"
                      class="btn btn-dark btn-lg w-100 py-3"
                    >
                      Create New Appointment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
      {scheduleRegistered.length === 0 ? (
        ""
      ) : (
        <ul class="list-group list-group-flush">
          {scheduleRegistered.map((data: Schedule, idx) => (
            <li class="list-group-item">
              <div class="d-flex align-items-start">
                <div class="p-6 my-3 mx-3">
                  <div class="d-flex align-items-center my-3">
                    <img
                      src="/icons/date.svg"
                      alt=""
                      style="width: 1.5rem; height: 1.5rem;"
                    />
                    <p class="ms-4 text-dark">{data.NGAYKHAM.toDateString()}</p>
                  </div>
                  <div class="d-flex align-items-center my-3">
                    <img
                      src="/icons/time.svg"
                      alt=""
                      style="width: 1.5rem; height: 1.5rem;"
                    />
                    <p class="ms-4 text-dark">
                      {data.GIOKHAM.toISOString().split("T")[1].split(".")[0]}
                    </p>
                  </div>
                </div>
                <div class="btn btn-danger btn disabled align-self-center">
                  Registered
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
