import * as elements from "typed-html";
import StaffPage from "../../staff";
import { drugProps } from "../../../../model/model";
const DeletePrescription = ({
  listIdInvoice,
  listDrug,
}: {
  listIdInvoice: string[];
  listDrug: drugProps[];
}) => {
  return (
    <StaffPage>
      <div>
        <section class="vh-100 bg-image" id="dashboard">
          <div class="mask d-flex align-items-center h-100 gradient-custom-3">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div class="card" style="border-radius: 15px;">
                    <div class="card-body p-5">
                      <h2 class="text-uppercase text-center mb-5">
                        Delete Pressciption
                      </h2>
                      <form
                        id="delete-prescription-form"
                        hx-post="/staff/invoice/delete-prescription"
                      >
                        <div class="form-outline mb-4">
                          <label for="MACT">MACT</label>
                          <select class="form-control" id="MACT" name="MACT">
                            {listIdInvoice.map((id) => (
                              <option value={id}>{id}</option>
                            ))}
                          </select>
                        </div>

                        <div class="form-outline mb-4">
                          <label for="MATHUOC">MATHUOC</label>
                          <select
                            class="form-control"
                            id="MATHUOC"
                            name="MATHUOC"
                          >
                            {listDrug.map((drug) => (
                              <option value={drug.MATHUOC}>
                                {drug.MATHUOC}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div class="form-outline mb-4">
                          <label for="MALO">MALO</label>
                          <select class="form-control" id="MALO" name="MALO">
                            {listDrug.map((drug) => (
                              <option value={drug.MALO}>{drug.MALO}</option>
                            ))}
                          </select>
                        </div>

                        <div class="d-flex justify-content-center">
                          <button
                            type="submit"
                            hx-target="#delete-prescription-form"
                            hx-swap="outerHTML"
                            class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          >
                            Add
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </StaffPage>
  );
};

export default DeletePrescription;
