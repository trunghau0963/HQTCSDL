import * as elements from "typed-html";
import { Patient, Schedule } from "../../model/model";

export const AddAppointmentByDentist = ({
  idDentist,
  nameOfDentist,
  idx,
  role,
}: {
  idDentist: string;
  nameOfDentist: string;
  idx: number;
  role: string;
}) => {
  return (
    <div class="mt-3">
      <button
        class="btn btn-tertiary text-light btn-lg"
        id={`registered-appointment-${idx}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#registered-appointment-${idx}`}
        aria-controls={`registered-appointment-${idx}`}
        hx-get={`/${role}/dentist-schedule`}
        hx-vars={`{"MANS": "${idDentist}", "HOTENNHASI": "${nameOfDentist}"}`}
        hx-target={`.guest-add-appointment-${idx}`}
      >
        Book Appointment
      </button>

      <div
        class="modal fade"
        id={`registered-appointment-${idx}`}
        tabindex="0"
        aria-labelledby={`registered-appointment-${idx}-button`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg bg-muted">
          <div class="modal-content">
            <div class="modal-header">
              <div class="text-center">
                <h1
                  class="modal-title fw-bold mx-3 my-3 text-center"
                  id="contactInfoModalLabel"
                >
                  Add Appoinmnent
                </h1>
              </div>
              <button
                class="btn btn-tertiary text-light"
                data-bs-dismiss="modal"
              >
                <i class="bi bi-x"></i>
              </button>
            </div>
            <div class="modal-body p-5 m-3">
              <div
                class={`guest-add-appointment-${idx}`}
                id={`guest-add-appointment-${idx}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const GetYearFreeSchedule = ({
  yearsArray,
  daysArray,
  role,
}: {
  yearsArray: string[];
  daysArray: string[];
  role: string;
}) => {
  // console.log("daysArray: ", daysArray);
  console.log("role", role);
  return (
    <div class="accordion" id="accordionYear">
      <button class="text-center btn btn-secondary btn-rounded float-right w-100 py-3 text-white">
        <h4 class="fw-bold">
          <i class="bi bi-calendar3"></i>
          Select Year
        </h4>
      </button>
      {yearsArray.map((year: string, idx: number) => (
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseYear${idx}`}
              aria-expanded="true"
              aria-controls={`collapseYear${idx}`}
            >
              <h4 class="fw-bold">{year}</h4>
            </button>
          </h2>
          <div
            id={`collapseYear${idx}`}
            class="accordion-collapse collapse"
            aria-labelledby={`heading${idx}`}
            data-bs-parent="#accordionYear"
          >
            <div class="accordion-body">
              <GetMonthFreeSchedule
                year={year}
                daysArray={daysArray}
                role={role}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const GetMonthFreeSchedule = ({
  year,
  daysArray,
  role,
}: {
  year: string;
  daysArray: string[];
  role: string;
}) => {
  // Create a Set to store unique months
  const uniqueMonths = new Set<string>();

  const filteredDays = daysArray.filter((day) => day.startsWith(year));

  filteredDays.forEach((day) => {
    const month = new Date(day).getMonth() + 1;
    uniqueMonths.add(month.toString());
  });
  console.log("role", role);
  return (
    <div class="accordion accordion-flush" id={`accordionMonth${year}`}>
      <button class="text-center btn btn-primary btn-rounded float-right w-100 py-3 text-white">
        <h4 class="fw-bold">
          <i class="bi bi-calendar-month"></i>
          Select Month
        </h4>
      </button>
      {[...uniqueMonths].map((month: string, idx: number) => (
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseMonth${idx}`}
              aria-expanded="true"
              aria-controls={`collapseMonth${idx}`}
            >
              <h4 class="fw-bold">{month}</h4>
            </button>
          </h2>
          <div
            id={`collapseMonth${idx}`}
            class="accordion-collapse collapse"
            aria-labelledby={`heading${idx}`}
            data-bs-parent={`#accordionMonth${year}`}
          >
            <div class="accordion-body">
              <GetDayFreeSchedule
                year={year}
                month={month}
                daysArray={daysArray}
                role={role}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
function filterDatesByYearAndMonth(
  daysArray: string[],
  year: string,
  month: string
) {
  return daysArray.filter((dateString) => {
    const [dateYear, dateMonth] = dateString.split("-").map(Number);

    return dateYear === parseInt(year, 10) && dateMonth === parseInt(month, 10);
  });
}

export const GetDayFreeSchedule = ({
  year,
  month,
  daysArray,
  role,
}: {
  year: string;
  month: string;
  daysArray: string[];
  role: string;
}) => {
  const filteredDates = filterDatesByYearAndMonth(daysArray, year, month);
  console.log("role", role);
  return (
    <div class="accordion" id={`accordionDay${month}${year}`}>
      <button class="text-center btn btn-tertiary btn-rounded float-right w-100 py-3 text-white">
        <h4 class="fw-bold">
          <i class="bi bi-calendar-date"></i>
          Select Day
        </h4>
      </button>
      {filteredDates.map((day: string, idx: number) => (
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseDay${idx}`}
              aria-expanded="true"
              aria-controls={`collapseDay${idx}`}
              hx-get={`/${role}/calendar-schedule`}
              hx-vars={`{'date': '${day}'}`}
              hx-target={`#calendar-schedule-information${day}`}
            >
              <h4 class="fw-normal">{day}</h4>
            </button>
          </h2>
          <div
            id={`collapseDay${idx}`}
            class="accordion-collapse collapse"
            aria-labelledby={`heading${idx}`}
            data-bs-parent={`#accordionDay${month}${year}`}
          >
            <div class="accordion-body">
              <div
                class={`calendar-schedule-information${day}`}
                id={`calendar-schedule-information${day}`}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ListSchedule = ({
  dentistSchedule,
  role,
}: {
  dentistSchedule: Schedule[];
  role: string;
}) => {
  console.log("dentistSchedule: ", dentistSchedule);
  console.log("role: ", role);
  return (
    <div class="list-group">
      {dentistSchedule.map((item) => (
        <a
          href={`/${role}/schedule/date/${item.MANS}/${item.HOTEN}/${item.NGAYKHAM}/${item.GIOKHAM}`}
          type="button"
          class="list-group-item list-group-item-action"
        >
          <div class="d-flex align-items-start">
            <div class="p-6 my-3 mx-3">
              <div class="d-flex align-items-center my-3">
                <img
                  src="/icons/dentistinfo.svg"
                  alt=""
                  style="width: 1.2rem; height: 1.2rem;"
                />
                <p class="ms-4 text-dark">{item.HOTEN}</p>
              </div>
              <div class="d-flex align-items-center my-3">
                <img
                  src="/icons/time.svg"
                  alt=""
                  style="width: 1.2rem; height: 1.2rem;"
                />
                <p class="ms-4 text-dark">
                  {item.GIOKHAM.toISOString().split("T")[1].split(".")[0]}
                </p>
              </div>
            </div>
            <div class="btn btn-success btn disabled align-self-center">
              Free
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

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

export const getScheduleDentistForPatient = ({
  patientInformation,
  idDentist,
  nameOfDentist,
  schedules,
  scheduleRegistered,
}: {
  patientInformation: Patient | undefined;
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
                          value={patientInformation?.HOTEN}
                          required=""
                          readonly="true"
                          placeholder={patientInformation?.HOTEN}
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
                          required=""
                          value={patientInformation?.DIENTHOAI}
                          placeholder={patientInformation?.DIENTHOAI}
                          readonly="true"
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
                          value={patientInformation?.DIACHI}
                          placeholder={patientInformation?.DIACHI}
                          readonly="true"
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
                          value={
                            patientInformation?.NGAYSINH.toISOString().split(
                              "T"
                            )[0]
                          }
                          placeholder={
                            patientInformation?.NGAYSINH.toISOString().split(
                              "T"
                            )[0]
                          }
                          readonly="true"
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
