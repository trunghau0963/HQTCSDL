import * as elements from "typed-html";
import { Invoice } from "../../../model/model";

interface DeleteInvoiceProps {
  Data: Invoice;
}
const EditInvoice = ({ Data }: DeleteInvoiceProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        data-toggle="modal"
        data-target=".edit-patient"
      >
        <i class="bi bi-pencil-square"></i> Edit
      </button>

      <div
        class="modal fade edit-patient"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div>
              <div class="p-5">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <h4 class="page-title">Edit Patient</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <form
                      id="update-invoice-form"
                      hx-put="/admin/drug/update-invoice"
                      hx-vals={`{"id": ${Data.MACT}}`}
                    >
                      <div class="row">
                        <div class="row my-3">
                          <div class="form-group">
                            <label
                              class="form-label font-weight-bold"
                              for="MACT"
                            >
                              ID <span class="text-danger"></span>
                            </label>
                            <input
                              type="text"
                              id="id"
                              class="form-control form-control-lg"
                              name="id"
                              required=""
                              value={Data.MACT}
                              placeholder={Data.MACT}
                              readonly="true"
                            />
                          </div>
                        </div>
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
                                value={Data.MANS}
                                placeholder={Data.MANS}
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
                                value={Data.MABN}
                                placeholder={Data.MABN}
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
                                value={Data.MABN}
                                placeholder={Data.NGAYKHAM.toDateString()}
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
                                value={Data.GIOKHAM}
                                placeholder={Data.GIOKHAM}
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
                                value={Data.TONGTIEN.toString()}
                                placeholder={Data.TONGTIEN.toString()}
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
                                  value={Data.CHANDOAN}
                                  placeholder={Data.CHANDOAN}
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
                              value={Data.TRIEUCHUNG}
                              placeholder={Data.TRIEUCHUNG}
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
                          Update Invoice
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

export default EditInvoice;
