import * as elements from "typed-html";
import { Patient } from "../../model/model";

interface EditPatientProps {
  Data: Patient;
}
const EditPatient = ({ Data }: EditPatientProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        data-toggle="modal"
        data-target="#edit-patient"
      >
        <i class="bi bi-pencil-square"></i> Edit
      </button>

      <div
        class="modal fade"
        id="edit-patient"
        tabindex="-1"
        aria-labelledby="edit-patientLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 page-title" id="edit-dentistLabel">
                Edit Patient
              </h1>
              <button class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
            <div>
              <div class="p-5">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <form
                      id="update-patient-form"
                      hx-put="/admin/patient"
                      hx-vals={`{"id": ${Data.MABN}}`}
                    >
                      <div class="row">
                        <div class="row">
                          <div class="form-group">
                            <label class="form-label font-weight-bold" for="id">
                              ID <span class="text-danger"></span>
                            </label>
                            <input
                              type="text"
                              id="id"
                              class="form-control form-control-lg"
                              name="id"
                              required=""
                              value={Data.MABN}
                              placeholder={Data.MABN}
                              readonly="true"
                            />
                          </div>
                        </div>
                        <div class="row my-3">
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label
                                class="form-label font-weight-bold"
                                for="name"
                              >
                                Name <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                id="name"
                                class="form-control form-control-lg"
                                name="name"
                                required=""
                                value={Data.HOTEN}
                                placeholder={Data.HOTEN}
                              />
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label
                                class="form-label font-weight-bold"
                                for="password"
                              >
                                Password<span class="text-danger">*</span>
                              </label>
                              <input
                                type="password"
                                id="password"
                                class="form-control form-control-lg"
                                name="password"
                                value={Data.MATKHAU}
                                required="********"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row my-3">
                          <div class="col-sm-6">
                            <div class="form-group">
                              <div class="form-outline mb-4">
                                <label
                                  class="form-label font-weight-bold"
                                  for="dob"
                                >
                                  Date of Birth
                                </label>
                                <input
                                  type="date"
                                  id="dob"
                                  class="form-control form-control-lg"
                                  name="dob"
                                  required=""
                                  max={new Date().toISOString().split("T")[0]}
                                  value={
                                    Data.NGAYSINH.toISOString().split("T")[0]
                                  }
                                  placeholder={Data.NGAYSINH.toDateString()}
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label
                                class="form-label font-weight-bold"
                                for="address"
                              >
                                Address
                              </label>
                              <input
                                id="address"
                                class="form-control form-control-lg"
                                name="address"
                                required=""
                                value={Data.DIACHI}
                                placeholder={Data.DIACHI}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center m-t-20 text-center">
                        <button
                          type="submit"
                          hx-target="#update-patient-form"
                          hx-swap="outerHTML"
                          class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                        >
                          Update Patient
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPatient;
