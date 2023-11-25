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
                      <form method="POST">
                        <div class="row my-3">
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label class="font-weight-bold">
                                ID of Service<span class="text-danger">*</span>
                              </label>
                              <input
                                class="form-control"
                                type="text"
                                name="IDD"
                              />
                            </div>
                          </div>
                          <div class="col-sm-4">
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
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label class="font-weight-bold">
                                Price <span class="text-danger">*</span>
                              </label>
                              <input
                                class="form-control"
                                type="text"
                                name="price"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="m-t-20 text-center">
                          <button class="btn btn-warning submit-btn">
                            Create Service
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
