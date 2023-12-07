import * as elements from "typed-html";
import AddPatientPage from "../../app/admin/Dashboard/Patients/AddPatienst";
import DeletePatientPage from "../../app/admin/Dashboard/Patients/DeletePatients";
import EditPatientPage from "../../app/admin/Dashboard/Patients/EditPatients";
import { Patient } from "../../model/model";
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
                <AddPatientPage />
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
                          <EditPatientPage Data={data} />
                          {/* <DeletePatientPage Data={data} /> */}
                          <button
                            hx-delete="/admin/patient"
                            hx-target="body"
                            class="btn btn-link text-decoration-none"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div class="msg-sidebar notifications msg-noti">
              <div class="topnav-dropdown-header">
                <span>Messages</span>
              </div>
              <div class="drop-scroll msg-list-scroll w-100" id="msg_list">
                <ul class="list-box">
                  <li>
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">R</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Richard Miles </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div class="list-item new-message">
                        <div class="list-left">
                          <span class="avatar">J</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">John Doe</span>
                          <span class="message-time">1 Aug</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">T</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Tarah Shropshire </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">M</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Mike Litorus</span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">C</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">
                            {" "}
                            Catherine Manseau{" "}
                          </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">D</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Domenic Houston </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">B</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Buster Wigton </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">R</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Rolland Webber </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">C</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author"> Claire Mapes </span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">M</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Melita Faucher</span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">J</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Jeffery Lalor</span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">L</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Loren Gatlin</span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <div class="list-item">
                        <div class="list-left">
                          <span class="avatar">T</span>
                        </div>
                        <div class="list-body">
                          <span class="message-author">Tarah Shropshire</span>
                          <span class="message-time">12:28 AM</span>
                          <div class="clearfix"></div>
                          <span class="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="topnav-dropdown-footer">
                <a href="chat.html">See all messages</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientComponent;
