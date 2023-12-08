import * as elements from "typed-html";
const AddInvoice = () => {
  return (
    <div>
      <a
        class="text-center btn btn-warning btn-rounded float-right w-100 py-3 text-white"
        data-toggle="modal"
        data-target=".add-invoice"
      >
        <i class="bi bi-receipt"></i>Add invoice
      </a>
      <div
        class="modal fade add-invoice"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg bg-muted" hx-include="admin/drug/invoice">
          <div class="modal-content">
            <div>
              <div>
                <div class="p-5">
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <h4 class="page-title">Add invoice</h4>
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
                                  ID <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="ID"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  ID of Patient
                                  <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="IDP"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  ID of Dentist{" "}
                                  <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="IDD"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  Description<span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="Description"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">Symptom</label>
                                <input
                                  type="text"
                                  class="form-control "
                                  name="Symptom"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label>Date</label>
                                <div class="cal-icon">
                                  <input
                                    type="date"
                                    class="form-control"
                                    name="date"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  Total <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="Total"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="m-t-20 text-center">
                          <button class="btn btn-warning submit-btn">
                            Create Invoice
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

export default AddInvoice;
