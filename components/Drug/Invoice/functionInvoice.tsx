import * as elements from "typed-html";
import { Invoice } from "../../../model/model";

export const AddInvoice = () => {
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

export const EditInvoice = ({ Data }: { Data: Invoice }) => {
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
                                value={Data.GIOKHAM.toDateString()}
                                placeholder={Data.GIOKHAM.toDateString()}
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

export const InvoiceComponent = ({ Data }: { Data: Invoice[] }) => {
  return (
    <div class="main-wrapper h-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-sm-4 col-3">
              <h4 class="page-title">Invoice</h4>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-12 my-2 mx-2">
                <AddInvoice />
              </div>
              <div class="col-sm-6 col-md-12 my-2 mx-2">
                <form action="" method="POST">
                  <div class="form-group form-focus">
                    <label class="focus-label"></label>
                    <input
                      type="text"
                      class="form-control floating w-100"
                      name="search"
                      placeholder="Search here..."
                    />
                    <button type="submit" class="btn btn-primary">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name Of Dentist</th>
                      <th>Name of Patient</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Total</th>
                      <th>Description</th>
                      <th>Symptom</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data.map((data) => (
                      <tr>
                        <td
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Tooltip on top"
                        >
                          {data.MACT}
                        </td>
                        <td>
                          <div class="d-flex">
                            {data.HOTENNHASI}{" "}
                            <img
                              src="/icons/warning.svg"
                              class="mx-2"
                              style="width: 20px; height: 20px;"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title={`ID : ${data.MANS}`}
                            />
                          </div>
                        </td>
                        <td>
                          <div class="d-flex">
                            {data.HOTENBENHNHAN}
                            <img
                              src="/icons/warning.svg"
                              class="mx-2"
                              style="width: 20px; height: 20px;"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title={`ID : ${data.MABN}`}
                            />
                          </div>
                        </td>
                        <td>{data.NGAYKHAM.toDateString()}</td>
                        <td>{data.GIOKHAM}</td>
                        <td>{data.TONGTIEN}</td>
                        <td>{data.CHANDOAN}</td>
                        <td>{data.TRIEUCHUNG}</td>
                        <td class="text-right">
                          {/* <PrintInvoice /> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
