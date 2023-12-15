import * as elements from "typed-html";
const AddAppointment = () => {
  return (
    <div>
      <div class="page-wrapper" style="height:100vh">
        <div class="content">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h4 class="page-title">Add Appointment</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <form method="POST">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Patient Name </label>
                      <input class="form-control" type="text" name="p_name" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Department</label>
                      <select class="" name="department">
                        <option value="Dentists">Dentists</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Opthalmology">Opthalmology</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Cancer Departmen">
                          Cancer Department
                        </option>
                        <option value="ENT Departmen">ENT Department</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Doctor Name</label>
                      <input type="text" name="d_name" id="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Date</label>
                      <div class="cal-icon">
                        <input
                          type="date"
                          class="form-control"
                          name="date"
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
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Patient Email</label>
                      <input class="form-control" type="email" name="email" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Patient Phone Number</label>
                      <input class="form-control" type="text" name="phone" />
                    </div>
                  </div>
                </div>

                <div class="m-t-20 text-center">
                  <button class="btn btn-tertiary submit-btn">
                    Create Appointment
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

export default AddAppointment;
