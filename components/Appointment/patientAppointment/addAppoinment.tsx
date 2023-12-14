import * as elements from "typed-html";
import BaseHtml from "../../../layouts/baseHtml";

const AddAppointment = () => {
  return (
    <BaseHtml>
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <h4 class="page-title">Add Appointment</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <form method="post">
                <div class="row">
                  <div class="col-sm-6">
                    <label for="first-name" class="form-label">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="first-name"
                      placeholder="ABCDEF"
                    />
                  </div>
                  <div class="col-sm-6">
                    <div class="me-3">
                      <p>Gender </p>
                    </div>
                    <div class="d-flex gap-4">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="female"
                        />
                        <label class="form-check-label" for="female">
                          Female
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="male"
                          checked
                        />
                        <label class="form-check-label" for="male">
                          Male
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label class="form-label">Patient Phone Number</label>
                    <input type="text" class="form-control" />
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
                  <div class="col-sm-4">
                    <label for="address" class="form-label font-weight-bold">
                      Address
                    </label>
                    <input
                      class="form-control"
                      name="address"
                      id="address"
                    ></input>
                  </div>
                  <div class="col-sm-4">
                    <label for="dentist-name" class="form-label">
                      Dentist Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      readonly=""
                      value="XXXXXXXXXX"
                    />
                  </div>
                  <div class="col-sm-4">
                    <label for="doa" class="form-label">
                      Date of appointment
                    </label>
                    <input type="date" class="form-control" />
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
