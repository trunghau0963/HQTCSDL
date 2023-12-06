import * as elements from "typed-html";
import { serviceProps } from "../../model/model";

interface EditServiceProps {
  Data: serviceProps;
}
const EditService = ({ Data }: EditServiceProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        data-toggle="modal"
        data-target=".edit-Service"
      >
        <i class="bi bi-pencil-square"></i> Edit
      </button>

      <div
        class="modal fade edit-Service"
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
                    <h4 class="page-title">Edit Service</h4>
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
                              placeholder={Data.id}
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
                              placeholder={Data.name}
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
                              placeholder={Data.price.toString()}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="m-t-20 text-center">
                        <button class="btn btn-primary submit-btn">
                          Edit Service
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

export default EditService;
