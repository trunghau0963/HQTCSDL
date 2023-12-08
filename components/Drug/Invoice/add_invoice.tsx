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
        <div
          class="modal-dialog modal-lg bg-muted"
          hx-include="admin/drug/invoice"
        >
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
                      <form
                        id="update-invoice-form"
                        hx-post="/admin/drug/add-invoice"
                      >
                        <div class="row">
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label
                                  class="font-weight-bold form-label"
                                  for="MANS"
                                >
                                  MANS <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control form-control-lg"
                                  type="text"
                                  name="MANS"
                                  required=""
                                  placeholder="MANS"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label
                                  class="font-weight-bold form-label"
                                  for="MABN"
                                >
                                  MABN
                                  <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control form-control-lg"
                                  type="text"
                                  name="MABN"
                                  required=""
                                  placeholder="MABN"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label
                                  class="font-weight-bold form-label"
                                  for="NGAYKHAM"
                                >
                                  NgayKham <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control form-control-lg"
                                  type="string"
                                  name="NGAYKHAM"
                                  required=""
                                  placeholder="NGAYKHAM"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label
                                  class="font-weight-bold form-label"
                                  for="GIOKHAM"
                                >
                                  GioKham<span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control form-control-lg"
                                  type="text"
                                  name="GIOKHAM"
                                  required=""
                                  placeholder="GIOKHAM"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label
                                  class="font-weight-bold form-label"
                                  for="TONGTIEN"
                                >
                                  TongTien
                                </label>
                                <input
                                  type="number"
                                  class="form-control "
                                  name="TONGTIEN"
                                  required=""
                                  placeholder="TONGTIEN"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label
                                  class="font-weight-bold form-label"
                                  for="CHANDOAN"
                                >
                                  ChanDoan
                                </label>
                                <div class="cal-icon">
                                  <input
                                    type="text.CHANDOAN"
                                    class="form-control form-control-lg"
                                    name="CHANDOAN"
                                    required=""
                                    placeholder="CHANDOAN"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="form-group">
                              <label
                                class="font-weight-bold form-label"
                                for="TRIEUCHUNG"
                              >
                                TRIEUCHUNG <span class="text-danger">*</span>
                              </label>
                              <input
                                class="form-control form-control-lg"
                                type="text"
                                name="TRIEUCHUNG"
                                required=""
                                placeholder="TRIEUCHUNG"
                              />
                            </div>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center m-t-20 text-center">
                          <button
                            type="submit"
                            hx-target="#update-invoice-form"
                            hx-swap="outerHTML"
                            class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                          >
                            Add Invoice
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
