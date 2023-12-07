import * as elements from "typed-html";
import { drugProps } from "../../../model/model";

interface EditDrugProps {
  Data: drugProps;
}
const EditDrug = ({ Data }: EditDrugProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        data-toggle="modal"
        data-target=".edit-drug"
      >
        <i class="bi bi-pencil-square"></i> Edit
      </button>

      <div
        class="modal fade edit-drug"
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
                    <h4 class="page-title">Edit Drug</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <form method="PUT">
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
                        <button class="btn btn-primary submit-btn">
                          Edit Drug
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

export default EditDrug;
