import * as elements from "typed-html";
import StaffPage from "../staff";

const AddInvoice = ({
  listIdPatient,
  listIdDentist,
}: {
  listIdPatient: string[];
  listIdDentist: string[];
}) => {
  // console.log(listIdPatient);
  return (
    <StaffPage>
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
                      id="add-invoice-form"
                      hx-post="/staff/invoice/add/invoice"
                    >
                      <div class="form-outline mb-4">
                        <label for="MABN">MABN</label>
                        <select class="form-control" id="MABN" name="MABN">
                          {listIdPatient.map((id) => (
                            <option value={id}>{id}</option>
                          ))}
                        </select>
                      </div>

                      <div class="form-outline mb-4">
                        <label for="MANS">MANS</label>
                        <select class="form-control" id="MANS" name="MANS">
                          {listIdDentist.map((name) => (
                            <option value={name}>{name}</option>
                          ))}
                        </select>
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="TRIEUCHUNG">
                          TRIEUCHUNG
                        </label>
                        <input
                          type="text"
                          id="TRIEUCHUNG"
                          class="form-control form-control-lg"
                          name="TRIEUCHUNG"
                          required=""
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="CHANDOAN">
                          CHANDOAN
                        </label>
                        <input
                          type="text"
                          id="CHANDOAN"
                          class="form-control form-control-lg"
                          name="CHANDOAN"
                          required=""
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="NGAYKHAM">
                          NGAYKHAM
                        </label>
                        <input
                          type="date"
                          id="NGAYKHAM"
                          class="form-control form-control-lg"
                          name="NGAYKHAM"
                          required=""
                          max={new Date().toISOString().split("T")[0]}
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="GIOKHAM">
                          GIOKHAM
                        </label>
                        <input
                          type="time"
                          id="GIOKHAM"
                          class="form-control form-control-lg"
                          name="GIOKHAM"
                          required=""
                        />
                      </div>
                      <div class="d-flex justify-content-center">
                        <button
                          type="submit"
                          hx-target="#add-invoice-form"
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
    </StaffPage>
  );
};

export default AddInvoice;
