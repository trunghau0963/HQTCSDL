import * as elements from "typed-html";
import { Schedule } from "../../../model/model";
type ScheduleProps = {
  Free: Schedule[];
  Registered: Schedule[];
};

const ScheduleComponent = ({ Free, Registered }: ScheduleProps) => {
  return (
    <div class="main-wrapper h-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="text-center bg-tertiary rounded float-right w-100 py-3 text-white">
              <i class="bi bi-sliders"></i>Your Schedule
            </div>
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
                      <th>Date</th>
                      <th>Time</th>
                      <th class="text-right">State</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Free.map((data, idx) => (
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
                        <td>{data.MANS}</td>
                        <td>{data.HOTEN}</td>
                        <td>{data.NGAYKHAM.toLocaleDateString()}</td>
                        <td>{data.GIOKHAM.toLocaleDateString()}</td>
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
                    {Registered.map((data, idx) => (
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
                        <td>{data.MANS}</td>
                        <td>{data.HOTEN}</td>
                        <td>{data.NGAYKHAM.toLocaleDateString()}</td>
                        <td>{data.GIOKHAM.toLocaleDateString()}</td>
                        <td class="text-right">
                          <button class="btn btn-sm btn-danger">
                            Registered
                          </button>
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

export default ScheduleComponent;
