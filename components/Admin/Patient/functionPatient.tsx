import * as elements from "typed-html";
import { Patient } from "../../../model/model";

interface PatientProps {
  Data: Patient;
}

export const AddPatient = () => {
  return (
    <div>
      <a
        class="text-center btn btn-tertiary btn-rounded float-right w-100 py-3 text-white"
        data-toggle="modal"
        data-target=".add-patient"
      >
        <i class="bi bi-person-plus"></i>Add Patient
      </a>
      <div
        class="modal fade add-patient"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg bg-muted">
          <div class="modal-content">
            <div>
              <div>
                <div class="p-5">
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <h4 class="page-title">Add patient</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <form id="add-patient-form" hx-post="/admin/patient">
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
                            hx-target="#add-patient-form"
                            hx-swap="outerHTML"
                            class="btn btn-tertiary btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                          >
                            Create Patient
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
    </div>
  );
};
export const DeletePatient = ({ Data }: PatientProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        id={`delete-patient-${Data.MABN}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#delete-patient-${Data.MABN}`}
        aria-controls={`delete-patient-${Data.MABN}`}
      >
        <i class="bi bi-eraser"></i>
        Delete
      </button>

      <div
        class="modal fade"
        id={`delete-patient-${Data.MABN}`}
        tabindex="0"
        role="dialog"
        aria-labelledby={`delete-patient-${Data.MABN}-button`}
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
                        hx-target="#delete-patient-form"
                        hx-swap="outerHTML"
                        class="btn btn-tertiary btn-block btn-lg gradient-custom-4 text-body rounded-pill"
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
export const EditPatient = ({ Data }: PatientProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        id={`update-patient-${Data.MABN}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#update-patient-${Data.MABN}`}
        aria-controls={`update-patient-${Data.MABN}`}
      >
        <i class="bi bi-pencil-square"></i> Edit
      </button>

      <div
       class="modal fade"
       id={`update-patient-${Data.MABN}`}
       tabindex="0"
       role="dialog"
       aria-labelledby={`update-patient-${Data.MABN}-button`}
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
                          class="btn btn-tertiary btn-block btn-lg gradient-custom-4 text-body rounded-pill"
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
