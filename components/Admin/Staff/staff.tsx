import * as elements from "typed-html";
import { Staff } from "../../../model/model";
import { AddStaff, EditStaff, DeleteStaff } from "./functionStaff";

type StaffProps = {
  Data: Staff[];
};

const StaffComponent = ({ Data }: StaffProps) => {
  return (
    <div class="main-wrapper">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-sm-4 col-3">
              <h4 class="page-title">Staffs</h4>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-12 my-2 mx-2">
                <AddStaff />
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
                    <button
                      type="submit"
                      class="btn btn-outline-success border border-3"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
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
                      <th>Phone</th>
                      <th>Password</th>
                      <th>Dob</th>
                      <th>Address</th>
                      <th>Locked</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data.map((data, idx) => (
                      <tr>
                        <td>
                          <img
                            width="50"
                            height="50"
                            src={`/img/staff-thumb_0${idx + 1}.jpg`}
                            onerror="this.onerror=null;this.src='/img/user.jpg';"
                            class="rounded-circle"
                            alt=""
                          />{" "}
                          <h2></h2>
                        </td>
                        <td>{data.MANV}</td>
                        <td>{data.HOTEN}</td>
                        <td>{data.DIENTHOAI}</td>
                        <td>{data.MATKHAU}</td>
                        <td>{data.NGAYSINH.toLocaleDateString()}</td>
                        <td>{data.DIACHI}</td>
                        <td>
                          {data.DAKHOA ? (
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id={`flexSwitchCheck_${data.MANV}`}
                                checked
                              />
                              <label
                                class="form-check-label"
                                for={`flexSwitchCheck_${data.MANV}`}
                              ></label>
                            </div>
                          ) : (
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id={`flexSwitchCheck_${data.MANV}`}
                              />
                              <label
                                class="form-check-label"
                                for={`flexSwitchCheck_${data.MANV}`}
                              ></label>
                            </div>
                          )}
                        </td>
                        <td class="text-right">
                          <EditStaff Data={data} />
                          <DeleteStaff Data={data} />
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

export default StaffComponent;
