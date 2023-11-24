import * as elements from "typed-html";
const DeleteAppointment = () => {
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

export default DeleteAppointment;
