import * as elements from "typed-html";
import { AppointmentDetailProps } from "../../model/model";

const Appointment = ({
  appointments,
  appointmentsFinished,
}: {
  appointments: AppointmentDetailProps[];
  appointmentsFinished: AppointmentDetailProps[];
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
                            <div class="dropdown">
                              <button
                                class="btn btn-outline-primary"
                                type="button"
                                hx-delete="/patient/appointment"
                                hx-vars={`{'MANS': '${
                                  appointment.MANS
                                }', 'MABN': '${
                                  appointment.MABN
                                }', 'NGAYKHAM': '${
                                  appointment.NGAYKHAM.toISOString().split(
                                    "T"
                                  )[0]
                                }', 'GIOKHAM': '${
                                  appointment.GIOKHAM.toISOString()
                                    .split("T")[1]
                                    .split(".")[0]
                                }'}`}
                              >
                                <i class="bi bi-eraser"></i>
                                Delete
                              </button>
                            </div>
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
                      appointmentsFinished.map((appointment) => (
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
                            <div class="dropdown">
                              <button
                                class="btn btn-outline-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Action
                              </button>
                              <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <a
                                  class="dropdown-item"
                                  href="/admin/schedule/edit_appointment/"
                                >
                                  <i class="bi bi-info-circle-fill"></i> Detail
                                </a>
                              </div>
                            </div>
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

export default Appointment;
