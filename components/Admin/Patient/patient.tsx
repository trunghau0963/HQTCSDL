import * as elements from "typed-html";
import { AddPatient, EditPatient, DeletePatient } from "./functionPatient";
import { Patient } from "../../../model/model";
type PatientProps = {
  Data: Patient[];
};

const PatientComponent = ({ Data }: PatientProps) => {
  Data.forEach((data) => {
    if (data.MATKHAU == undefined) data.MATKHAU = "NULL";
  });
  return (
    <div class="main-wrapper h-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-sm-4 col-3">
              <h4 class="page-title">patient</h4>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-12 my-2 mx-2">
                <AddPatient />
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
                      <th>DOB</th>
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
                            src={`/img/patient-thumb-0${idx + 1}.jpg`}
                            onerror="this.onerror=null;this.src='/img/user.jpg';"
                            class="rounded-circle"
                            alt=""
                          />{" "}
                          <h2></h2>
                        </td>
                        <td>{data.MABN}</td>
                        <td>{data.HOTEN}</td>
                        <td>{data.DIENTHOAI}</td>
                        <td>{data.MATKHAU ? data.MATKHAU : "NULL"}</td>
                        <td>{data.NGAYSINH.toLocaleDateString()}</td>
                        <td>{data.DIACHI}</td>
                        <td>
                          {data.DAKHOA ? (
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id={`flexSwitchCheck_${data.MABN}`}
                                checked
                              />
                              <label
                                class="form-check-label"
                                for={`flexSwitchCheck_${data.MABN}`}
                              ></label>
                            </div>
                          ) : (
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id={`flexSwitchCheck_${data.MABN}`}
                              />
                              <label
                                class="form-check-label"
                                for={`flexSwitchCheck_${data.MABN}`}
                              ></label>
                            </div>
                          )}
                        </td>
                        <td class="text-right">
                          {/* <EditPatientPage Data={data} /> */}
                          {/* <DeletePatientPage Data={data} /> */}
                          <EditPatient Data={data} />
                          <DeletePatient Data={data} />
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

export default PatientComponent;
