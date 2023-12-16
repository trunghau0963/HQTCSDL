import * as elements from "typed-html";
import { Service } from "../../model/model";

interface ServiceProps {
  Data: Service;
  url: string;
}
export const AddService = ({ url }: { url: string }) => {
  return (
    <div>
      <a
        class="text-center btn btn-tertiary btn-rounded float-right w-100 py-3 text-white"
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
                      <form id="add-service-form" hx-post={`/${url}/service`}>
                        <div class="row">
                          <div class="row my-3">
                            <div class="form-group">
                              <label
                                class="form-label font-weight-bold"
                                for="TENDV"
                              >
                                Name <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                id="TENDV"
                                class="form-control form-control-lg"
                                name="TENDV"
                                required=""
                                placeholder="Name of Service"
                              />
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="form-group">
                              <div class="form-outline mb-4">
                                <label
                                  class="form-label font-weight-bold"
                                  for="DONGIA"
                                >
                                  Price
                                </label>
                                <input
                                  type="number"
                                  id="DONGIA"
                                  class="form-control form-control-lg"
                                  name="DONGIA"
                                  required=""
                                  placeholder="Price of Service"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center m-t-20 text-center">
                          <button
                            type="submit"
                            hx-target="#add-service-form"
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

export const EditService = ({ Data, url }: ServiceProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        data-bs-toggle="modal"
        id={`edit-Service-${Data.MADV}-button`}
        data-bs-target={`#edit-Service-${Data.MADV}`}
        aria-controls={`edit-Service-${Data.MADV}`}
      >
        <i class="bi bi-pencil-square"></i> Edit
      </button>

      <div
        class="modal fade"
        id={`edit-Service-${Data.MADV}`}
        tabindex="0"
        role="dialog"
        aria-labelledby={`edit-Service-${Data.MADV}-button`}
        // aria-hidden="true"
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
                    <form
                      id="update-service-form"
                      hx-put={`/${url}/service`}
                      hx-vals={`{"id": ${Data.MADV}}`}
                    >
                      <div class="row">
                        <div class="row my-3">
                          <div class="form-group">
                            <label
                              class="form-label font-weight-bold"
                              for="MADV"
                            >
                              ID <span class="text-danger"></span>
                            </label>
                            <input
                              type="text"
                              id="MADV"
                              class="form-control form-control-lg"
                              name="MADV"
                              required=""
                              value={Data.MADV}
                              placeholder={Data.MADV}
                              readonly="true"
                            />
                          </div>
                        </div>
                        <div class="row my-3">
                          <div class="form-group">
                            <label
                              class="form-label font-weight-bold"
                              for="TENDV"
                            >
                              Name <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="TENDV"
                              class="form-control form-control-lg"
                              name="TENDV"
                              required=""
                              value={Data.TENDV}
                              placeholder={Data.TENDV}
                            />
                          </div>
                        </div>
                        <div class="row my-3">
                          <div class="form-group">
                            <div class="form-outline mb-4">
                              <label
                                class="form-label font-weight-bold"
                                for="DONGIA"
                              >
                                DON GIA
                              </label>
                              <input
                                type="number"
                                id="DONGIA"
                                class="form-control form-control-lg"
                                name="DONGIA"
                                required=""
                                value={Data.DONGIA.toString()}
                                placeholder={Data.DONGIA.toString()}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center m-t-20 text-center">
                        <button
                          type="submit"
                          hx-target="#update-service-form"
                          hx-swap="outerHTML"
                          class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                        >
                          Update service
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

export const DeleteService = ({ Data, url }: ServiceProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        data-toggle="modal"
        data-target=".delete-Service"
      >
        <i class="bi bi-eraser"></i>
        Delete
      </button>

      <div
        class="modal fade delete-Service"
        tabindex="1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="main-wrapper">
              <div class="page-wrapper">
                <div class="content">
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <h4 class="page-title">Delete Service</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <form
                        id="delete-service-form"
                        hx-delete={`/${url}/service`}
                      >
                        <div class="row">
                          <div class="row my-3">
                            <div class="form-group">
                              <label
                                class="form-label font-weight-bold"
                                for="MADV"
                              >
                                ID <span class="text-danger"></span>
                              </label>
                              <input
                                type="text"
                                id="MADV"
                                class="form-control form-control-lg"
                                name="MADV"
                                required=""
                                value={Data.MADV}
                                placeholder={Data.MADV}
                                readonly="true"
                              />
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="form-group">
                              <label
                                class="form-label font-weight-bold"
                                for="TENDV"
                              >
                                Name <span class="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                id="TENDV"
                                class="form-control form-control-lg"
                                name="TENDV"
                                required=""
                                value={Data.TENDV}
                                placeholder={Data.TENDV}
                              />
                            </div>
                          </div>
                          <div class="row my-3">
                            <div class="form-group">
                              <div class="form-outline mb-4">
                                <label
                                  class="form-label font-weight-bold"
                                  for="DONGIA"
                                >
                                  Date of Birth
                                </label>
                                <input
                                  type="number"
                                  id="DONGIA"
                                  class="form-control form-control-lg"
                                  name="DONGIA"
                                  required=""
                                  value={Data.DONGIA.toString()}
                                  placeholder={Data.DONGIA.toString()}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center m-t-20 text-center">
                          <button
                            type="submit"
                            hx-target="#delete-service-form"
                            hx-swap="outerHTML"
                            class="btn btn-warning btn-block btn-lg gradient-custom-4 text-body rounded-pill"
                          >
                            Delete service
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
