import * as elements from "typed-html";
import { drugProps } from "../../../model/model";

interface DrugProps {
  Data: drugProps;
  url: string;
}

export const AddDrug = ({ url }: { url: string }) => {
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
                      <form id="add-drug-form" hx-post={`/${url}/drug`}>
                        <div class="row">
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold" for='name'>
                                  Name <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  id="name"
                                  type="text"
                                  name="name"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold" for="drugIndicate">
                                  Assign<span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="drugIndicate"
                                  id="drugIndicate"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold" for="quantity">
                                  Quantity <span class="text-danger">*</span>
                                </label>
                                <input
                                  type="number"
                                  class="form-control "
                                  name="quantity"
                                  id="quantity"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold" for="unit">
                                  Unit <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="unit"
                                  id="unit"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold" for="price">
                                  Price <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="price"
                                  id="price"
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold" for="exp">
                                  Expire day <span class="text-danger">*</span>
                                </label>
                                <input
                                  type="date"
                                  class="form-control form-control-lg"
                                  name="exp"
                                  required=""
                                  id="exp"
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

                        <div class="d-flex justify-content-center m-t-20 text-center">
                          <button
                            type="submit"
                            hx-target="#add-drug-form"
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

export const DeleteDrug = ({ Data, url }: DrugProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        id={`delete-drug-${Data.MATHUOC}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#delete-drug-${Data.MATHUOC}`}
        aria-controls={`delete-drug-${Data.MATHUOC}`}
      >
        <i class="bi bi-eraser"></i>
        Delete
      </button>

      <div
        class="modal fade"
        id={`delete-drug-${Data.MATHUOC}`}
        tabindex="0"
        role="dialog"
        aria-labelledby={`delete-drug-${Data.MATHUOC}-button`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="main-wrapper">
              <div class="page-wrapper">
                <div class="content">
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <h4 class="page-title">Delete Drug</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <form
                        id="delete-drug-form"
                        hx-delete={`/${url}/drug`}
                        hx-target="#delete-drug-form"
                        hx-confirm="Are you sure you want to delete?"
                        hx-vals={`{"id": ${Data.MATHUOC}}`}
                      >
                        <div class="row">
                          <div class="row my-3">
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  ID of Consigment{" "}
                                  <span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="IDC"
                                  value={Data.MALO}
                                  placeholder={Data.MALO}
                                />
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                <label class="font-weight-bold">
                                  ID of Drug<span class="text-danger">*</span>
                                </label>
                                <input
                                  class="form-control"
                                  type="text"
                                  name="IDD"
                                  value={Data.MATHUOC}
                                  placeholder={Data.MATHUOC}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center m-t-20 text-center">
                          <button
                            type="submit"
                            hx-target="#delete-drug-form"
                            hx-swap="outerHTML"
                            class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                          >
                            Delete drug
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

export const EditDrug = ({ Data, url }: DrugProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        id={`update-drug-${Data.MATHUOC}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#update-drug-${Data.MATHUOC}`}
        aria-controls={`update-drug-${Data.MATHUOC}`}
      >
        <i class="bi bi-pencil-square"></i> Edit
      </button>

      <div
        class="modal fade"
        id={`update-drug-${Data.MATHUOC}`}
        tabindex="0"
        role="dialog"
        aria-labelledby={`update-drug-${Data.MATHUOC}-button`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div>
              <div class="p-5">
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <h4 class="page-title">Edit Drug</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <form
                      id="update-drug-form"
                      hx-put={`/${url}/drug`}
                      hx-vals={`{"id": ${Data.MATHUOC}}`}
                    >
                      <div class="row">
                        <div class="row my-3">
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label class="font-weight-bold">
                                ID of Consigment{" "}
                                <span class="text-danger">*</span>
                              </label>
                              <input
                                class="form-control"
                                type="text"
                                name="IDC"
                                value={Data.MALO}
                                readonly=""
                              />
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label class="font-weight-bold">
                                ID of Drug<span class="text-danger">*</span>
                              </label>
                              <input
                                class="form-control"
                                type="text"
                                name="IDD"
                                value={Data.MATHUOC}
                                readonly=""
                              />
                            </div>
                          </div>
                        </div>
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
                                value={Data.TENTHUOC}
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
                                name="assign"
                                value={Data.CHIDINH}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row my-3">
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label class="font-weight-bold">Quantity</label>
                              <input
                                type="number"
                                class="form-control "
                                name="quantity"
                                placeholder={Data.SOLUONG}
                              />
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label class="font-weight-bold">Unit</label>
                              <input
                                type="text"
                                class="form-control "
                                name="unit"
                                value={Data.DONVI}
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
                                value={Data.DONGIA.toString()}
                              />
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label class="font-weight-bold">
                                Expire day <span class="text-danger">*</span>
                              </label>
                              <input
                                class="form-control"
                                type="date"
                                name="exp"
                                value={
                                  Data.NGAYHETHAN instanceof Date
                                    ? Data.NGAYHETHAN.toISOString().split(
                                        "T"
                                      )[0]
                                    : ""
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-center m-t-20 text-center">
                        <button
                          type="submit"
                          hx-target="#update-drug-form"
                          hx-swap="outerHTML"
                          class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                        >
                          Update drug
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
