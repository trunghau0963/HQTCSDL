import * as elements from "typed-html";
import { Schedule } from "../../model/model";

export const AddAppointmentByDentist = ({
  idDentist,
  nameOfDentist,
  idx,
}: {
  idDentist: string;
  nameOfDentist: string;
  idx: number;
}) => {
  return (
    <div class="px-5 mx-5 mt-3">
      <button
        class="btn btn-tertiary text-light btn-lg py-2 mx-4"
        id={`registered-appointment-${idx}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#registered-appointment-${idx}`}
        aria-controls={`registered-appointment-${idx}`}
        hx-get="/dentist-schedule"
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

export const GetFreeSchedule = ({
  listFreeSchedule,
}: {
  listFreeSchedule: Schedule[];
}) => {
  return (
    <ul class="list-group list-group-flush">
      {listFreeSchedule.map((data: Schedule, idx) => (
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
            <div class="btn btn-success btn disabled align-self-center">
              Free
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const GetYearFreeSchedule = ({
  yearsArray,
  daysArray,
}: {
  yearsArray: string[];
  daysArray: string[];
}) => {
  // console.log("daysArray: ", daysArray);
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
              <GetMonthFreeSchedule year={year} daysArray={daysArray} />
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
}: {
  year: string;
  daysArray: string[];
}) => {
  // Create a Set to store unique months
  const uniqueMonths = new Set<string>();

  const filteredDays = daysArray.filter((day) => day.startsWith(year));

  filteredDays.forEach((day) => {
    const month = new Date(day).getMonth() + 1;
    uniqueMonths.add(month.toString());
  });

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
}: {
  year: string;
  month: string;
  daysArray: string[];
}) => {
  const filteredDates = filterDatesByYearAndMonth(daysArray, year, month);

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
              hx-get={`/calendar-schedule`}
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
}: {
  dentistSchedule: Schedule[];
}) => {
  console.log("dentistSchedule: ", dentistSchedule);
  return (
    <div class="list-group">
      {dentistSchedule.map((item) => (
        <a
          href={`/guest/schedule/date/${item.MANS}/${item.HOTEN}/${
          item.NGAYKHAM
        }/${item.GIOKHAM}`}
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
