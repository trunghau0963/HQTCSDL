import * as elements from "typed-html";
import { Patient } from "../../model/model";

interface DeletePatientProps {
  Data: Patient;
}
const DeletePatient = ({ Data }: DeletePatientProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        data-toggle="modal"
        data-target="#delete-patient"
      >
        <i class="bi bi-eraser"></i>
        Delete
      </button>

      <div
        class="modal fade"
        id="delete-patient"
        tabindex="1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 page-title" id="edit-patientLabel">
                Delete patient
              </h1>
              <button class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-8 offset-lg-2">
                  <form
                    id="delete-patient-form"
                    hx-delete="/admin/patient"
                    hx-target="#delete-patient-form"
                    hx-confirm="Are you sure you want to delete?"
                  >
                    <div class="row">
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
                              value={Data.HOTEN}/>
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
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row my-3">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label
                              class="form-label font-weight-bold"
                              for="phone"
                            >
                              Phone <span class="text-danger">*</span>
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              class="form-control form-control-lg"
                              name="phone"
                              required=""
                            />
                          </div>
                        </div>
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
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row my-3">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <label
                              class="form-label font-weight-bold"
                              for="address"
                            >
                              Address
                            </label>
                            <textarea
                              id="address"
                              class="form-control form-control-lg"
                              name="address"
                              required=""
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex justify-content-center m-t-20 text-center">
                      <button
                        type="submit"
                        hx-post={Data.MABN}
                        class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                      >
                        Delete Patient
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
  );
};

export default DeletePatient;
