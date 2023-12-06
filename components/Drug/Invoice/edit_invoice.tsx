import * as elements from "typed-html";
import { invoiceProps } from "../../../model/model";

interface DeleteInvoiceProps {
  Data: invoiceProps;
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
                                placeholder={Data.id}
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
                                placeholder={Data.idPatient}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row my-3">
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label class="font-weight-bold">
                                ID of Dentist <span class="text-danger">*</span>
                              </label>
                              <input
                                class="form-control"
                                type="text"
                                name="IDD"
                                placeholder={Data.idDentist}
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
                                placeholder={Data.description}
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
                                placeholder={Data.symptom}
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
                                  placeholder={Data.date}
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
                                placeholder={Data.total.toString()}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="m-t-20 text-center">
                        <button class="btn btn-primary submit-btn">
                          Edit Invoice
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
