import * as elements from "typed-html";
const AddDentist = () => {
  return (
    <div>
      <a
        class="text-center btn btn-warning btn-rounded float-right w-100 py-3 text-white"
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
                      <form method="POST">
                        <div class="row">
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  Name <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="first_name"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  Password<span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="password"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">Address</label>
                                <input
                                  type="text"
                                  class="form-control "
                                  name="address"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group gender-select">
                                <label class="gen-label font-weight-bold">
                                  Gender
                                </label>
                                <div class="form-check-inline">
                                  <label class="form-check-label">
                                    <input
                                      type="radio"
                                      name="gender"
                                      class="form-check-input"
                                      value="male"
                                    />
                                    Male
                                  </label>
                                </div>
                                <div class="form-check-inline">
                                  <label class="form-check-label">
                                    <input
                                      type="radio"
                                      name="gender"
                                      class="form-check-input"
                                      value="female"
                                    />
                                    Female
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  Phone <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="phone"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">Avatar</label>
                                <div class="profile-upload">
                                  <div class="upload-img h-100">
                                    <img
                                      class="rounded-circle"
                                      alt=""
                                      src="/img/user.jpg"
                                    />
                                  </div>
                                  <div class="upload-input">
                                    <input
                                      type="file"
                                      class="form-control"
                                      name="image"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="m-t-20 text-center">
                          <button class="btn btn-warning submit-btn">
                            Create Doctor
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

export default AddDentist;
