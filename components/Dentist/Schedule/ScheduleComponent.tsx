import * as elements from "typed-html";
import { Schedule } from "../../../model/model";
import { AddScheduleFree, GetAppointment } from "./functionSchedule";
type ScheduleProps = {
  Free: Schedule[];
  Registered: Schedule[];
  idDentist: string;
};

const ScheduleComponent = ({ Free, Registered, idDentist }: ScheduleProps) => {
  let idx = 1;
  return (
    <div class="main-wrapper h-100">
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
          {Free.length === 0 && Registered.length === 0 ? (
            <h4 class="text-center my-3 mx-3">No schedule is registered!</h4>
          ) : (
            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th style="min-width:100px;">Image</th>
                        <th>Number</th>
                        <th>ID</th>
                        <th>Name</th>
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
                              src={`/img/Schedule-thumb-0${idx + 1}.jpg`}
                              onerror="this.onerror=null;this.src='/img/user.jpg';"
                              class="rounded-circle"
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
                              type="button"
                              class="btn btn-success btn-sm"
                              disabled=""
                            >
                              Free
                            </button>
                            <button class="btn btn-sm btn-warning">
                              Add Schedule
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
                              src={`/img/Schedule-thumb-0${idx + 1}.jpg`}
                              onerror="this.onerror=null;this.src='/img/user.jpg';"
                              class="rounded-circle"
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
                            <GetAppointment
                              idDentist={data.MANS}
                              date={data.NGAYKHAM}
                              idx={idx}
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

export default ScheduleComponent;
