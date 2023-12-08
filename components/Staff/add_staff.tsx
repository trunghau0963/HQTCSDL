import * as elements from "typed-html";
const AddStaff = () => {
  return (
    <div>
      <a
        class="text-center btn btn-warning btn-rounded float-right w-100 py-3 text-white"
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
                            class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body rounded-pill"
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

export default AddStaff;
