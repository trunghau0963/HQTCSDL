import * as elements from "typed-html";
import {
  AppointmentDetail,
  AppointmentDetailProps,
  Patient,
  Schedule,
} from "../../model/model";
import BaseHtml from "../../layouts/baseHtml";
import PreviewPage from "../../app/patient/Invoice/previewPage";

export const GuestAddAppointment = ({
  detailSchedule,
}: {
  detailSchedule: Schedule;
}) => {
  const hour = detailSchedule.GIOKHAM.toISOString().split("T")[1].split(".")[0];
  const date = detailSchedule.NGAYKHAM.toISOString().split("T")[0];
  const id = detailSchedule.MANS;
  const name = detailSchedule.HOTEN;
  return (
    <BaseHtml>
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h4 class="page-title">Add Appointment</h4>
            </div>
          </div>
          <div class="row" id="value">
            <div class="col-lg-8 offset-lg-2">
              <form method="POST">
                <div class="row">
                  <div class="col-sm-6">
                    <label for="first-name" class="form-label">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="patient_name"
                      id="first-name"
                      placeholder=""
                    />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="phoneNum">
                      Patient Phone Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="phoneNum"
                      name="phoneNum"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label class="form-label" for="address">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      name="address"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label for="dob" class="form-label">
                      Date of birth
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      name="dob"
                      id="dob"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <label for="dentistId" class="form-label font-weight-bold">
                      Dentist Id
                    </label>
                    <input
                      class="form-control"
                      name="dentist_id"
                      id="dentistId"
                      value={id}
                    ></input>
                  </div>
                  <div class="col-sm-6">
                    <label for="dentist-name" class="form-label">
                      Dentist Name
                    </label>
                    <input
                      id="dentist-name"
                      type="text"
                      class="form-control"
                      name="dentist_name"
                      readonly=""
                      value={name}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label for="doa" class="form-label">
                      Date of appointment
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="doa"
                      value={date}
                      name="doa"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label for="hour" class="form-label">
                      Hour of appointment
                    </label>
                    <input
                      type="time"
                      class="form-control"
                      id="hour"
                      value={hour}
                      name="hour"
                    />
                  </div>
                </div>
                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn">
                    Create Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </BaseHtml>
  );
};

export const PatientAddAppointment = ({
  detailSchedule,
  infoPatient,
}: {
  detailSchedule: Schedule;
  infoPatient: Patient;
}) => {
  const hour = detailSchedule.GIOKHAM.toISOString().split("T")[1].split(".")[0];
  const date = detailSchedule.NGAYKHAM.toISOString().split("T")[0];
  const id = detailSchedule.MANS;
  const name = detailSchedule.HOTEN;
  return (
    <BaseHtml>
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h4 class="page-title">Add Appointment</h4>
            </div>
          </div>
          <div class="row" id="value">
            <div class="col-lg-8 offset-lg-2">
              <form method="POST">
                <div class="row">
                  <div class="col-sm-6">
                    <label for="first-name" class="form-label">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="patient_name"
                      id="first-name"
                      value={infoPatient.HOTEN}
                      readonly=""
                    />
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label" for="phoneNum">
                      Patient Phone Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="phoneNum"
                      name="phoneNum"
                      value={infoPatient.DIENTHOAI}
                      readonly=""
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label class="form-label" for="address">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      name="address"
                      value={infoPatient.DIACHI}
                      readonly=""
                    />
                  </div>
                  <div class="col-sm-6">
                    <label for="dob" class="form-label">
                      Date of birth
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="dob"
                      id="dob"
                      value={infoPatient.NGAYSINH.toString().split("T")[0]}
                      readonly=""
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6">
                    <label for="dentistId" class="form-label font-weight-bold">
                      Dentist Id
                    </label>
                    <input
                      class="form-control"
                      name="dentist_id"
                      id="dentistId"
                      value={id}
                      readonly=""
                    ></input>
                  </div>
                  <div class="col-sm-6">
                    <label for="dentist-name" class="form-label">
                      Dentist Name
                    </label>
                    <input
                      id="dentist-name"
                      type="text"
                      class="form-control"
                      name="dentist_name"
                      value={name}
                      readonly=""
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label for="doa" class="form-label">
                      Date of appointment
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="doa"
                      value={date}
                      name="doa"
                      readonly=""
                    />
                  </div>
                  <div class="col-sm-6">
                    <label for="hour" class="form-label">
                      Hour of appointment
                    </label>
                    <input
                      type="time"
                      class="form-control"
                      id="hour"
                      value={hour}
                      name="hour"
                      readonly=""
                    />
                  </div>
                </div>
                <div class="m-t-20 text-center">
                  <button class="btn btn-danger submit-btn">
                    Create Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </BaseHtml>
  );
};

export const EditAppointment = () => {
  return (
    <div class="main-wrapper min-vh-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h4 class="page-title">Edit Appointment</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <form method="POST">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Patient Name </label>
                      <input
                        class="form-control"
                        type="text"
                        name="p_name"
                        value="<%= list[i].patient_name %>"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Dentist Name </label>
                      <input
                        class="form-control"
                        type="text"
                        name="d_name"
                        value="<%= list[i].patient_name %>"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Date</label>
                      <div class="cal-icon">
                        <input
                          type="text"
                          class="form-control datetimepicker"
                          name="date"
                          value="<%= list[i].date %>"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Time</label>
                      <div class="time-icon">
                        <input
                          type="text"
                          class="form-control"
                          id="datetimepicker3"
                          name="time"
                          value="<%= list[i].time %>"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Patient Phone Number</label>
                      <input
                        class="form-control"
                        type="text"
                        name="phone"
                        value="<%= list[i].phone %>"
                      />
                    </div>
                  </div>
                </div>
                <div class="m-t-20 text-center">
                  <button class="btn btn-primary submit-btn">
                    Update Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="notification-box">
          <div class="msg-sidebar notifications msg-noti">
            <div class="topnav-dropdown-header">
              <span>Messages</span>
            </div>
            <div class="drop-scroll msg-list-scroll" id="msg_list">
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
                        <span class="message-author"> Catherine Manseau </span>
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
  );
};

export const DeleteAppointment = () => {
  return (
    <div class="main-wrapper min-vh-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h4 class="page-title">Delete Appointment</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <form method="POST">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Patient Name </label>
                      <input
                        class="form-control"
                        type="text"
                        name="p_name"
                        value="<%= list[i].patient_name%>"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Dentist Name </label>
                      <input
                        class="form-control"
                        type="text"
                        name="d_name"
                        value="<%= list[i].patient_name%>"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Date</label>
                      <div class="cal-icon">
                        <input
                          type="text"
                          class="form-control datetimepicker"
                          name="date"
                          value="<%= list[i].date%>"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Time</label>
                      <div class="time-icon">
                        <input
                          type="text"
                          class="form-control"
                          id="datetimepicker3"
                          name="time"
                          value="<%= list[i].time%>"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Patient Phone Number</label>
                      <input
                        class="form-control"
                        type="text"
                        name="phone"
                        value="<%= list[i].phone%>"
                      />
                    </div>
                  </div>
                </div>
                <div class="m-t-20 text-center">
                  <button class="btn btn-primary submit-btn">
                    Delete Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Appointment = ({
  appointments,
  appointmentsFinished,
}: {
  appointments: AppointmentDetailProps[];
  appointmentsFinished: AppointmentDetail[];
}) => {
  return (
    <div>
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-sm-4 col-3">
              <h4 class="page-title">Appointments</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Doctor Name</th>
                      <th>Appointment Date</th>
                      <th>Appointment Time</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments &&
                      appointments.map((appointment) => (
                        <tr>
                          <td>{appointment.TENBN}</td>
                          <td>{appointment.TENNS}</td>
                          <td>
                            {appointment.NGAYKHAM.toISOString().split("T")[0]}
                          </td>
                          <td>
                            {
                              appointment.GIOKHAM.toISOString()
                                .split("T")[1]
                                .split(".")[0]
                            }
                          </td>

                          <td class="text-right">
                            <button
                              class="btn btn-outline-primary"
                              type="button"
                              hx-delete="/patient/appointment"
                              hx-vars={`{'MANS': '${
                                appointment.MANS
                              }', 'MABN': '${appointment.MABN}', 'NGAYKHAM': '${
                                appointment.NGAYKHAM.toISOString().split("T")[0]
                              }', 'GIOKHAM': '${
                                appointment.GIOKHAM.toISOString()
                                  .split("T")[1]
                                  .split(".")[0]
                              }'}`}
                            >
                              <i class="bi bi-eraser"></i>
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
        </div>
      </div>
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-sm-4 col-3">
              <h4 class="page-title">Appointments Done</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Doctor Name</th>
                      <th>Appointment Date</th>
                      <th>Appointment Time</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointmentsFinished &&
                      appointmentsFinished.map((appointment, idx) => (
                        <tr>
                          <td>{appointment.HOTENNHASI}</td>
                          <td>{appointment.HOTENBENHNHAN}</td>
                          <td>
                            {appointment.NGAYKHAM.toISOString().split("T")[0]}
                          </td>
                          <td>
                            {
                              appointment.GIOKHAM.toISOString()
                                .split("T")[1]
                                .split(".")[0]
                            }
                          </td>

                          <td class="text-right">
                            <button
                              class="btn btn-outline-primary"
                              type="button"
                              data-toggle="modal"
                              data-target={`#_${idx.toString()}`}
                              hx-get="/patient/appointment/id"
                              hx-vars={`{'MANS': '${
                                appointment.MANS
                              }', 'MABN': '${appointment.MABN}', 'NGAYKHAM': '${
                                appointment.NGAYKHAM.toISOString().split("T")[0]
                              }', 'GIOKHAM': '${
                                appointment.GIOKHAM.toISOString()
                                  .split("T")[1]
                                  .split(".")[0]
                              }'}`}
                              hx-target={`#_${idx.toString()}`}
                            >
                              <i class="bi bi-info-circle-fill"></i> Detail
                            </button>
                            <PreviewPage id={idx.toString()} />
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
