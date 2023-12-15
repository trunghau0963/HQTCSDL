import * as elements from "typed-html";
import { Dentist } from "../../../model/model";
import { AddDentist, DeleteDentist, EditDentist } from "./functionDentist";

type DentistProps = {
  Data: Dentist[];
};

const DentistComponent = ({ Data }: DentistProps) => {
  console.log("data", Data);
  return (
    <div class="main-wrapper h-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-sm-4 col-3">
              <h4 class="page-title">Dentists</h4>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-12 my-2 mx-2">
                <AddDentist />
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
                    {Data.map((data: Dentist, idx) => (
                      <tr>
                        <td>
                          <img
                            width="50"
                            height="50"
                            src={`/img/doctor-thumb-0${idx + 1}.jpg`}
                            onerror="this.onerror=null;this.src='/img/user.jpg';"
                            class="rounded-circle"
                            alt=""
                          />{" "}
                          <h2></h2>
                        </td>
                        <td>{data.MANS}</td>
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
                                id={`flexSwitchCheck_${data.MANS}`}
                                checked
                              />
                              <label
                                class="form-check-label"
                                for={`flexSwitchCheck_${data.MANS}`}
                              ></label>
                            </div>
                          ) : (
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id={`flexSwitchCheck_${data.MANS}`}
                              />
                              <label
                                class="form-check-label"
                                for={`flexSwitchCheck_${data.MANS}`}
                              ></label>
                            </div>
                          )}
                        </td>
                        <td class="text-right">
                          <DeleteDentist Data={data} />
                          <EditDentist Data={data} />
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

export default DentistComponent;
