import * as elements from "typed-html";
const AddDrug = () => {
  return (
    <div>
      <a
        class="text-center btn btn-warning btn-rounded float-right w-100 py-3 text-white"
        data-toggle="modal"
        data-target=".add-drug"
      >
        <i class="bi bi-segmented-nav"></i>Add Drug
      </a>
      <div
        class="modal fade add-drug"
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
                      <h4 class="page-title">Add Drug</h4>
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
                                  name="name"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  Assign<span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="drugIndicate"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  Quantity <span class="text-danger">*</span>
                                </label>
                                <input
                                  type="number"
                                  class="form-control "
                                  name="quantity"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  Unit <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="unit"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="col-sm-6">
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
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  Expire day <span class="text-danger">*</span>
                                </label>
                                <input
                                  type="date"
                                  class="form-control form-control-lg"
                                  name="exp"
                                  required=""
                                  min={new Date().toISOString().split("T")[0]}
                                />
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6">
                            <div class="form-group">
                              <label class="font-weight-bold">Image</label>
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

                        <div class="m-t-20 text-center">
                          <button class="btn btn-warning submit-btn">
                            Create Drug
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

export default AddDrug;
