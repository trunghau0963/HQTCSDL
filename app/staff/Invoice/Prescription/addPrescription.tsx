import * as elements from "typed-html";
import StaffPage from "../../staff";
const AddPrescription = ({
  listIdInvoice,
  listNameDrug,
}: {
  listIdInvoice: string[];
  listNameDrug: string[];
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
                        Add Pressciption
                      </h2>
                      <form
                        id="add-prescription-form"
                        hx-post="/staff/invoice/add-prescription/:id"
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
                          <label for="TENTHUOC">TENTHUOC</label>
                          <select
                            class="form-control"
                            id="TENTHUOC"
                            name="TENTHUOC"
                          >
                            {listNameDrug.map((name) => (
                              <option value={name}>{name}</option>
                            ))}
                          </select>
                        </div>
                        <div class="form-outline mb-4">
                          <label class="form-label" for="SOLUONG">
                            SOLUONG
                          </label>
                          <input
                            type="number"
                            id="SOLUONG"
                            class="form-control form-control-lg"
                            name="SOLUONG"
                            required=""
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="LIEULUONG">
                            LIEULUONG
                          </label>
                          <input
                            type="number"
                            id="LIEULUONG"
                            class="form-control form-control-lg"
                            name="LIEULUONG"
                            required=""
                          />
                        </div>
                        <div class="d-flex justify-content-center">
                          <button
                            type="submit"
                            hx-target="#add-prescription-form"
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

export default AddPrescription;
