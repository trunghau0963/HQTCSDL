import * as elements from "typed-html";
import { DentistProps } from "../../config/model";

interface EditDentistProps {
  Data: DentistProps;
}
const EditDentist = ({ Data }: EditDentistProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        data-toggle="modal"
        data-target=".edit-dentist"
      >
        <i class="bi bi-pencil-square"></i> Edit
      </button>

      <div
        class="modal fade edit-dentist"
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
                    <h4 class="page-title">Edit Doctor</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8 offset-lg-2">
                    <form method="POST">
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label>
                              Name <span class="text-danger">*</span>
                            </label>
                            <input
                              class="form-control"
                              type="text"
                              name="first_name"
                              value={Data.name}
                            />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label>Phone</label>
                            <input
                              class="form-control"
                              type="text"
                              name="last_name"
                              value={Data.phone}
                            />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group gender-select">
                            <label class="gen-label">Gender:</label>
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
                        <div class="col-sm-12">
                          <div class="row">
                            <div class="col-sm-12">
                              <div class="form-group">
                                <label>Address</label>
                                <input
                                  type="text"
                                  class="form-control "
                                  name="address"
                                  value={Data.address ? Data.address : "Null"}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label>Password </label>
                            <input
                              class="form-control"
                              type="text"
                              name="phone"
                              value={Data.password}
                            />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label>Avatar</label>
                            <div class="profile-upload">
                              <div class="upload-img">
                                <img alt="" src="/img/user.jpg" />
                              </div>
                              <div class="upload-input">
                                <input
                                  type="file"
                                  class="form-control"
                                  name="image"
                                  value="<%= list[i].image %>"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Short Biography</label>
                        {/* <textarea class="form-control" rows="3" cols="30" name="biography" value="<%= list[i].biography %>"></textarea> */}
                      </div>

                      <div class="m-t-20 text-center">
                        <button class="btn btn-primary submit-btn">
                          Edit Doctor
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

export default EditDentist;
