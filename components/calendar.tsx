import * as elements from "typed-html";
import BaseHtml from "../layouts/baseHtml";
const Calendar = ({role}:{role:string}) => {
  return (
    <div>
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
              <option class="mon" value="10">
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
              <option class="yer">{new Date().getFullYear()}</option>
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
        <div class="date" id='response'>
          <div class="d-flex flex-row align-content-center justify-content-between">
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="1"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 1}"
              hx-target=".schedule"
            >
              1
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="2"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 2}"
              hx-target=".schedule"
            >
              2
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="3"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 3}"
              hx-target=".schedule"
            >
              3
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="4"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 4}"
              hx-target=".schedule"
            >
              4
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="5"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 5}"
              hx-target=".schedule"
            >
              5
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="6"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 6}"
              hx-target=".schedule"
            >
              6
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="7"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 7}"
              hx-target=".schedule"
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
              name="day"
              value="8"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 8}"
              hx-target=".schedule"
            >
              8
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="9"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 9}"
              hx-target=".schedule"
            >
              9
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="10"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 10}"
              hx-target=".schedule"
            >
              10
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="11"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 11}"
              hx-target=".schedule"
            >
              11
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="12"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 12}"
              hx-target=".schedule"
            >
              12
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="13"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 13}"
              hx-target=".schedule"
            >
              13
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="14"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 14}"
              hx-target=".schedule"
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
              name="day"
              value="15"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 15}"
              hx-target=".schedule"
            >
              15
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="16"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 16}"
              hx-target=".schedule"
            >
              16
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="17"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 17}"
              hx-target=".schedule"
            >
              17
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="18"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 18}"
              hx-target=".schedule"
            >
              18
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="19"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 19}"
              hx-target=".schedule"
            >
              19
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="20"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 20}"
              hx-target=".schedule"
            >
              20
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="21"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 21}"
              hx-target=".schedule"
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
              name="day"
              value="22"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 22}"
              hx-target=".schedule"
            >
              22
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="23"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 23}"
              hx-target=".schedule"
            >
              23
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="24"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 24}"
              hx-target=".schedule"
            >
              24
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="25"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 25}"
              hx-target=".schedule"
            >
              25
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="26"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 26}"
              hx-target=".schedule"
            >
              26
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="27"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 27}"
              hx-target=".schedule"
            >
              27
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="28"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 28}"
              hx-target=".schedule"
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
              name="day"
              value="29"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 29}"
              hx-target=".schedule"
            >
              29
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="30"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 30}"
              hx-target=".schedule"
            >
              30
            </button>
            <button
              class="date__number d-flex align-items-center justify-content-center rounded-circle"
              type="button"
              data-toggle="modal"
              data-target=".appoinment"
              name="day"
              value="31"
              hx-get={`/${role}/schedule/date`}
              hx-vars="{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 31}"
              hx-target=".schedule"
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
    </div>
  );
};


export default Calendar;
