import * as elements from "typed-html";
const AddService = () => {
  return (
    <div>
      <a
        class="text-center btn btn-warning btn-rounded float-right w-100 py-3 text-white"
        data-toggle="modal"
        data-target=".add-Service"
      >
        <i class="bi bi-sliders"></i>Add Service
      </a>
      <div
        class="modal fade add-Service"
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
                      <h4 class="page-title">Add Service</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <form id="update-service-form" hx-delete="/admin/service">
                        <div class="row">
                          <div class="row my-3">
                            <div class="form-group">
                              <label
                                class="form-label font-weight-bold"
                                for="TENDV"
                              >
                                Name <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                id="TENDV"
                                class="form-control form-control-lg"
                                name="TENDV"
                                required=""
                                placeholder="Name of Service"
                              />
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="form-group">
                              <div class="form-outline mb-4">
                                <label
                                  class="form-label font-weight-bold"
                                  for="DONGIA"
                                >
                                  Date of Birth
                                </label>
                                <input
                                  type="number"
                                  id="DONGIA"
                                  class="form-control form-control-lg"
                                  name="DONGIA"
                                  required=""
                                  placeholder="Price of Service"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center m-t-20 text-center">
                          <button
                            type="submit"
                            hx-target="#update-service-form"
                            hx-swap="outerHTML"
                            class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                          >
                            Add service
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

export default AddService;
