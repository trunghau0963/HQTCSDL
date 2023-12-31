import * as elements from "typed-html";
import {
  Schedule,
  AppointmentDetail,
  AppointmentDetailProps,
} from "../../../model/model";
import {
  AddAppointment,
  AddScheduleFree,
  PostAppointment,
  DeleteAppointment,
} from "./functionSchedule";
import { SearchFunction } from "../../Search";
import { TableOfSchedule, TableOfScheduleOfNhasi } from "../../Table/functionTable";
type ScheduleProps = {
  Free: Schedule[];
  Registered: AppointmentDetail[];
  RegisteredFinished: AppointmentDetail[];
  idDentist: string;
};

export const AllSchedule = ({
  Free,
  Registered,
  RegisteredFinished,
}: {
  Free: Schedule[];
  Registered: AppointmentDetail[];
  RegisteredFinished: AppointmentDetailProps[];
}) => {
  let idx = 1;
  console.log("Registered: ", Registered);
  return (
    <div class="main-wrapper h-100 ">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <a
              class="text-center btn btn-warning btn-rounded float-right w-100 py-3 text-white"
              data-toggle="modal"
              data-target=".add-drug"
            >
              <i class="bi bi-calendar-range-fill"></i>List Schedule
            </a>
          </div>
          {Free.length === 0 &&
          Registered.length === 0 &&
          RegisteredFinished.length === 0 ? (
            <h4 class="text-center my-3 mx-3">No schedule is registered!</h4>
          ) : (
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th style="min-width:100px;" class="ms-2">
                          Image
                        </th>
                        <th>Number</th>
                        <th>ID Dentist</th>
                        <th>Name Of Dentist</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th class="text-right">State</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Free.map((data) => (
                        <tr>
                          <td>
                            <img
                              width="50"
                              height="50"
                              src={`/img/user.jpg`}
                              onerror="this.onerror=null;this.src='/img/user.jpg';"
                              class="ms-2 rounded-circle"
                              alt=""
                            />{" "}
                            <h2></h2>
                          </td>
                          <td>{idx++}</td>
                          <td>{data.MANS}</td>
                          <td>{data.HOTEN}</td>
                          <td>{data.NGAYKHAM.toLocaleDateString()}</td>
                          <td>
                            {
                              data.GIOKHAM.toISOString()
                                .split("T")[1]
                                .split(".")[0]
                            }
                          </td>
                          <td class="text-right">
                            <button
                              class="btn btn-sm btn-tertiary text-light px-2"
                              id={`registered-appointment-${idx}-button`}
                            >
                              <i class="bi bi-calendar"></i>
                              Free Schedule
                            </button>
                          </td>
                        </tr>
                      ))}
                      {RegisteredFinished.map((data) => (
                        <tr id="schedule">
                          <td>
                            <img
                              width="50"
                              height="50"
                              src={`/img/user.jpg`}
                              onerror="this.onerror=null;this.src='/img/user.jpg';"
                              class="ms-2 rounded-circle"
                              alt=""
                            />{" "}
                            <h2></h2>
                          </td>
                          <td>{idx++}</td>
                          <td>{data.MANS}</td>
                          <td>{data.TENNS}</td>
                          <td>{data.NGAYKHAM.toLocaleDateString()}</td>
                          <td>
                            {
                              data.GIOKHAM.toISOString()
                                .split("T")[1]
                                .split(".")[0]
                            }
                          </td>
                          <td class="text-right">
                            <button
                              class={`btn btn-sm btn-success`}
                              id={`get-registered-${idx}-button`}
                            >
                              <span>
                                <i class="bi bi-calendar-check-fill"></i>Success
                                Schedule
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))}
                      {Registered.map((data) => (
                        <tr>
                          <td>
                            <img
                              width="50"
                              height="50"
                              src={`/img/user.jpg`}
                              onerror="this.onerror=null;this.src='/img/user.jpg';"
                              class="ms-2 rounded-circle"
                              alt=""
                            />{" "}
                            <h2></h2>
                          </td>
                          <td>{idx++}</td>
                          <td>{data.MANS}</td>
                          <td>{data.HOTENNHASI}</td>
                          <td>{data.NGAYKHAM.toLocaleDateString()}</td>
                          <td>
                            {
                              data.GIOKHAM.toISOString()
                                .split("T")[1]
                                .split(".")[0]
                            }
                          </td>
                          <td class="text-right">
                            <button
                              class={`btn btn-sm btn-warning`}
                              id={`get-registered-${idx}-button`}
                            >
                              <span>
                                <i class="bi bi-calendar2-plus-fill"></i>
                                Unfinished Schedule
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ScheduleComponentOld = ({
  Free,
  Registered,
  RegisteredFinished,
  idDentist,
}: ScheduleProps) => {
  let idx = 1;
  return (
    <div class="main-wrapper h-100 ">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <AddScheduleFree url="dentist" idDentist={idDentist} />
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
          {Free.length === 0 &&
          Registered.length === 0 &&
          RegisteredFinished.length === 0 ? (
            <h4 class="text-center my-3 mx-3">No schedule is registered!</h4>
          ) : (
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th style="min-width:100px;" class="ms-2">
                          Image
                        </th>
                        <th>Number</th>
                        <th>ID Patient</th>
                        <th>Name Of Patient</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th class="text-right">State</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Free.map((data) => (
                        <tr>
                          <td>
                            <img
                              width="50"
                              height="50"
                              src={`/img/user.jpg`}
                              onerror="this.onerror=null;this.src='/img/user.jpg';"
                              class="ms-2 rounded-circle"
                              alt=""
                            />{" "}
                            <h2></h2>
                          </td>
                          <td>{idx++}</td>
                          <td>
                            <em>Undefined</em>
                          </td>
                          <td>
                            <em>Undefined</em>
                          </td>
                          <td>{data.NGAYKHAM.toLocaleDateString()}</td>
                          <td>
                            {
                              data.GIOKHAM.toISOString()
                                .split("T")[1]
                                .split(".")[0]
                            }
                          </td>
                          <td class="text-right">
                            <AddAppointment
                              idDentist={data.MANS}
                              nameOfDentist={data.HOTEN}
                              date={data.NGAYKHAM}
                              time={data.GIOKHAM}
                              idx={idx}
                            />
                          </td>
                        </tr>
                      ))}
                      {RegisteredFinished.map((data) => (
                        <tr>
                          <td>
                            <img
                              width="50"
                              height="50"
                              src={`/img/user.jpg`}
                              onerror="this.onerror=null;this.src='/img/user.jpg';"
                              class="ms-2 rounded-circle"
                              alt=""
                            />{" "}
                            <h2></h2>
                          </td>
                          <td>{idx++}</td>
                          <td>{data.MABN}</td>
                          <td>{data.HOTENBENHNHAN}</td>
                          <td>{data.NGAYKHAM.toLocaleDateString()}</td>
                          <td>
                            {
                              data.GIOKHAM.toISOString()
                                .split("T")[1]
                                .split(".")[0]
                            }
                          </td>
                          <td class="text-right">
                            <PostAppointment
                              idDentist={data.MANS}
                              date={data.NGAYKHAM}
                              time={data.GIOKHAM}
                              idx={idx}
                              isDone={true}
                            />
                          </td>
                        </tr>
                      ))}
                      {Registered.map((data) => (
                        <tr>
                          <td>
                            <img
                              width="50"
                              height="50"
                              src={`/img/user.jpg`}
                              onerror="this.onerror=null;this.src='/img/user.jpg';"
                              class="ms-2 rounded-circle"
                              alt=""
                            />{" "}
                            <h2></h2>
                          </td>
                          <td>{idx++}</td>
                          <td>{data.MABN}</td>
                          <td>{data.HOTENBENHNHAN}</td>
                          <td>{data.NGAYKHAM.toLocaleDateString()}</td>
                          <td>
                            {
                              data.GIOKHAM.toISOString()
                                .split("T")[1]
                                .split(".")[0]
                            }
                          </td>
                          <td class="text-right">
                            <PostAppointment
                              idDentist={data.MANS}
                              date={data.NGAYKHAM}
                              time={data.GIOKHAM}
                              idx={idx}
                              isDone={false}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ScheduleComponent = ({
  Free,
  Registered,
  RegisteredFinished,
  idDentist,
}: ScheduleProps) => {
  let idx = 1;
  return (
    <div class="main-wrapper h-100 ">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <AddScheduleFree url="dentist" idDentist={idDentist} />
            <SearchFunction
              roleUrl="dentist"
              role="schedule"
              Table={TableOfScheduleOfNhasi}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const AllScheduleComponent = () => {
  return (
    <div class="main-wrapper h-100 ">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <a
              class="text-center btn btn-warning btn-rounded float-right w-100 py-3 text-white"
              data-toggle="modal"
              data-target=".add-drug"
            >
              <i class="bi bi-calendar-range-fill"></i>List Schedule
            </a>
          </div>
          <SearchFunction
            roleUrl="admin"
            role="schedule"
            Table={TableOfSchedule}
          />
        </div>
      </div>
    </div>
  );
};
