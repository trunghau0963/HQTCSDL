import * as elements from "typed-html";
import PatientPage from "../patient";
import Calendar from "../../../components/Appointment/patientAppointment/calendar";
import DentistAvailable from "../../../components/Appointment/patientAppointment/dentistList";
import { DentistData } from "../../../config/hardcode/hardcode";
import FormContact from "../../../components/Appointment/patientAppointment/addAppoinment";

const Schedule = () => {
  // const dates = Array.from({ length: 31 }, (_, index) => index + 1);
  // const storage: any[][] = new Array(5).fill(null).map(() => new Array(7).from({ length: 31 }, (_, index) => index + 1).fill(null));
  return (
    <PatientPage>
      <div
        id="dashboard"
        class="d-flex align-items-center justify-content-center"
        style="height:30vh"
      >
        <div class="text-center mb-14">
          <h1 class="fontweight-bold text-lg">
            Please choose your appointment
          </h1>
          <h3 class="text-muted-foreground mt-2">Patient View</h3>
        </div>
      </div>
      <main class="d-flex align-items-center justify-content-center min-vh-100 p-5">
        {/* <form>
          <div class="calendar bg-light rounded p-3 shadow-lg w-100">
            <div class="d-flex flex-row align-items-center justify-content-between">
              <label>
                <select
                  class="month border border-1 rounded p-1"
                  name="months"
                  size="1"
                >
                  <option class="mon" value="1">
                    January
                  </option>
                  <option class="mon" value="2">
                    Feburary
                  </option>
                  <option class="mon" value="3">
                    March
                  </option>
                  <option class="mon" value="4">
                    April
                  </option>
                  <option class="mon" value="5">
                    May
                  </option>
                  <option class="mon" value="6">
                    June
                  </option>
                  <option class="mon" value="7">
                    July
                  </option>
                  <option class="mon" value="8">
                    August
                  </option>
                  <option class="mon" value="9">
                    September
                  </option>
                  <option class="mon choosen" value="10">
                    October
                  </option>
                  <option class="mon" value="11">
                    November
                  </option>
                  <option class="mon" value="12">
                    December
                  </option>
                </select>
              </label>
              <label>
                <select
                  class="year border border-1 rounded p-1"
                  name="years"
                  size="1"
                >
                  <option class="yer">2023</option>
                  <option class="yer">2022</option>
                  <option class="yer">2021</option>
                  <option class="yer">2020</option>
                  <option class="yer">2019</option>
                  <option class="yer">2018</option>
                  <option class="yer">2017</option>
                  <option class="yer">2016</option>
                </select>
              </label>
            </div>
            <div class="week d-flex flex-row align-items-center justify-content-between">
              <div class="week__day d-flex align-items-center justify-content-center rounded-circle">
                Mo
              </div>
              <div class="week__day d-flex align-items-center justify-content-center rounded-circle">
                Tu
              </div>
              <div class="week__day d-flex align-items-center justify-content-center rounded-circle">
                WE
              </div>
              <div class="week__day d-flex align-items-center justify-content-center rounded-circle">
                TH
              </div>
              <div class="week__day d-flex align-items-center justify-content-center rounded-circle">
                Fr
              </div>
              <div class="week__day d-flex align-items-center justify-content-center rounded-circle">
                Sa
              </div>
              <div class="week__day d-flex align-items-center justify-content-center rounded-circle">
                SU
              </div>
            </div>
            <div class="date">
              <div class="d-flex flex-row align-content-center justify-content-between">
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  1
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  2
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  3
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  4
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  5
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  6
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  7
                </button>
              </div>
              <div class="d-flex flex-row align-content-center justify-content-between">
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  8
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  9
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  10
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  11
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  12
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  13
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  14
                </button>
              </div>
              <div class="d-flex flex-row align-content-center justify-content-between">
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  15
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  16
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  17
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  18
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  19
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  20
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  21
                </button>
              </div>
              <div class="d-flex flex-row align-content-center justify-content-between">
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  22
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  23
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  24
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  25
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  26
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  27
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  28
                </button>
              </div>
              <div class="d-flex flex-row align-content-center justify-content-between">
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  29
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  30
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                >
                  31
                </button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                ></button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                ></button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                ></button>
                <button
                  class="date__number d-flex align-items-center justify-content-center rounded-circle"
                  type="button"
                  data-toggle="modal"
                  data-target=".appoinment"
                ></button>
              </div>
            </div>
          </div>
          <div class="choosen"></div>
        </form> */}
        <Calendar />
        <DentistAvailable />
      </main>
    </PatientPage>
  );
};

export default Schedule;
