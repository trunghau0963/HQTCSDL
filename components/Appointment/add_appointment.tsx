import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
import { Schedule } from "../../model/model";

const AddAppointment = ({ data }: { data: Schedule }) => {
  const hour = data.GIOKHAM.toISOString().split("T")[1].split(".")[0];
  const date = data.NGAYKHAM.toISOString().split("T")[0];
  const id = data.MANS;
  const name = data.HOTEN;
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
                    <input type="text" class="form-control" id="phoneNum" name="phoneNum" />
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
                  <button class="btn btn-tertiary submit-btn">
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

export default AddAppointment;
