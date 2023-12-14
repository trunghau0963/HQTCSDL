import * as elements from "typed-html";
import { Dentist } from "../../../model/model";

interface DentistProps {
  Data: Dentist;
}
export const AddDentist = () => {
  return (
    <div>
      <a
        class="text-center btn btn-tertiary btn-rounded float-right w-100 py-3 text-white"
        data-toggle="modal"
        data-target=".add-dentist"
      >
        <i class="bi bi-person-plus"></i>Add Dentist
      </a>
      <div
        class="modal fade add-dentist"
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
                      <h4 class="page-title">Add Dentist</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <form id="add-dentist-form" hx-post="/admin/dentist">
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
                            hx-target="#add-dentist-form"
                            hx-swap="outerHTML"
                            class="btn btn-tertiary btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                          >
                            Create dentist
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

export const DeleteDentist = ({ Data }: DentistProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        id={`delete-denstist-${Data.MANS}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#delete-denstist-${Data.MANS}`}
        aria-controls={`delete-denstist-${Data.MANS}`}
      >
        <i class="bi bi-eraser"></i>
        Delete
      </button>

      <div
        class="modal fade"
        id={`delete-denstist-${Data.MANS}`}
        tabindex="0"
        role="dialog"
        aria-labelledby={`delete-denstist-${Data.MANS}-button`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 page-title" id="delete-dentistLabel">
                Delete dentist
              </h1>
              <button class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-8 offset-lg-2">
                  <form
                    id="delete-dentist-form"
                    hx-delete="/admin/dentist"
                    hx-target="#delete-dentist-form"
                    hx-confirm="Are you sure you want to delete?"
                    hx-vals={`{"id": ${Data.MANS}}`}
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
                            value={Data.MANS}
                            placeholder={Data.MANS}
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
                        hx-target="#delete-dentist-form"
                        hx-swap="outerHTML"
                        class="btn btn-tertiary btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                      >
                        Delete dentist
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
export const EditDentist = ({ Data }: DentistProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        id={`update-dentist-${Data.MANS}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#update-dentist-${Data.MANS}`}
        aria-controls={`update-dentist-${Data.MANS}`}
      >
        <i class="bi bi-pencil-square"></i> Edit
      </button>

      <div
        class="modal fade"
        id={`update-dentist-${Data.MANS}`}
        tabindex="0"
        role="dialog"
        aria-labelledby={`update-dentist-${Data.MANS}-button`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 page-title" id="edit-dentistLabel">
                Edit dentist
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
                      id="update-dentist-form"
                      hx-put="/admin/dentist"
                      hx-vals={`{"id": ${Data.MANS}}`}
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
                              value={Data.MANS}
                              placeholder={Data.MANS}
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
                          hx-target="#update-dentist-form"
                          hx-swap="outerHTML"
                          class="btn btn-tertiary btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                        >
                          Update dentist
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
