import * as elements from "typed-html";
import { Dentist, Patient, Staff } from "../../../model/model";
type User = Patient | Dentist | Staff;
export const AddStaff = () => {
  return (
    <div>
      <a
        class="text-center btn btn-tertiary btn-rounded float-right w-100 py-3 text-white"
        data-toggle="modal"
        data-target=".add-Staff"
      >
        <i class="bi bi-person-plus"></i>Add Staff
      </a>
      <div
        class="modal fade add-Staff"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div>
              <div>
                <div class="p-5">
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <h4 class="page-title">Add Staff</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <form id="add-staff-form" hx-post="/admin/staff">
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
                            hx-target="#add-staff-form"
                            hx-swap="outerHTML"
                            class="btn btn-tertiary btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                          >
                            Create staff
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

export const EditStaff = ({ data }: { data: User }) => {
    const id: string | undefined =
    (data.hasOwnProperty("MANS") && "MANS" in data && data.MANS) ||
    (data.hasOwnProperty("MABN") && "MABN" in data && data.MABN) ||
    (data.hasOwnProperty("MANV") && "MANV" in data && data.MANV) || undefined;
  return (
    <div>
      <button
         type="button"
         class="btn btn-link text-decoration-none"
         id={`update-staff-${id}-button`}
         data-bs-toggle="modal"
         data-bs-target={`#update-staff-${id}`}
         aria-controls={`update-staff-${id}`}
      >
        <i class="bi bi-pencil-square"></i> Edit
      </button>

      <div
       class="modal fade"
       id={`update-staff-${id}`}
       tabindex="0"
       role="dialog"
       aria-labelledby={`update-staff-${id}-button`}
       aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 page-title" id="edit-dentistLabel">
                Edit staff
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
                      id="update-staff-form"
                      hx-put="/admin/staff"
                      hx-vals={`{"id": ${id}}`}
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
                              value={id}
                              placeholder={id}
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
                                value={data.HOTEN}
                                placeholder={data.HOTEN}
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
                                value={data.MATKHAU}
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
                                    data.NGAYSINH.toISOString().split("T")[0]
                                  }
                                  placeholder={data.NGAYSINH.toDateString()}
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
                                value={data.DIACHI}
                                placeholder={data.DIACHI}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center m-t-20 text-center">
                        <button
                          type="submit"
                          hx-target="#update-staff-form"
                          hx-swap="outerHTML"
                          class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                        >
                          Update staff
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