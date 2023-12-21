import * as elements from "typed-html";
import PatientPage from "../patient";
import { drugProps } from "../../../model/model";

function chunkArray(array: drugProps[], size: number) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

const Drug = ({ drugs }: { drugs: drugProps[] }) => {
  return (
    <PatientPage>
      <div class="d-flex flex-column align-items-center text-primary">
        <section id="dentist" class="services float-left fs-2">
          <div class="container">
            <div class="section-title pt-3">
              <h2>Drugs</h2>
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

            <div class="row">
              {drugs.map((drug: drugProps, idx: number) => (
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch my-2">
                  <button
                    class="icon-box shadow w-100"
                    id={`drug-information-${idx}-button`}
                    data-bs-toggle="modal"
                    data-bs-target={`#drug-information-${idx}`}
                    aria-controls={`drug-information-${idx}`}
                  >
                    <div class="icon">
                      <img
                        src="/icons/drugItem.svg"
                        alt=""
                        style="width: 2.5rem; height: 2.5rem;"
                      />
                    </div>
                    <h4>
                      <p>{drug.TENTHUOC}</p>
                    </h4>
                    <p class="fw-bold ms-0 text-start">Information</p>
                    <div
                      class="p-6 d-flex flex-col justify-content-start w-100"
                      style="min-width: 200px;"
                    >
                      <p class="text-gray-500 dark:text-gray-400 ms-0 text-start">
                        Unit: {drug.DONVI}
                      </p>
                      <p class="text-gray-500 dark:text-gray-400 ms-0 text-start">
                        Quantity: {drug.SOLUONG}
                      </p>
                      <p class="text-gray-500 dark:text-gray-400 ms-0 text-start">
                        Exp: {drug.NGAYHETHAN.toDateString()}
                      </p>
                      <p class="text-gray-500 dark:text-gray-400 ms-0 text-start">
                        Price: {drug.DONGIA}
                      </p>
                    </div>
                    <div class="p-6"></div>
                  </button>
                  <div
                    class="modal fade"
                    id={`drug-information-${idx}`}
                    tabindex="0"
                    aria-labelledby={`drug-information-${idx}-button`}
                    aria-hidden="true"
                  >
                    <div class="modal-dialog bg-muted">
                      <div class="modal-content">
                        <div class="modal-header  d-flex flex-column justify-content-center">
                          <div class="text-center">
                            <h3
                              class="modal-title fw-bold mx-3 mt-3 text-center"
                              id="contactInfoModalLabel"
                            >
                              {drug.TENTHUOC}
                            </h3>
                            {drug.DAXOA ? (
                              <button
                                class="fw-bold btn btn-danger rounded-pill text-center"
                                disabled=""
                              >
                                OutStock
                              </button>
                            ) : (
                              <button
                                class="fw-bold btn btn-success rounded-pill text-center"
                                disabled=""
                              >
                                InStock
                              </button>
                            )}
                            <p>
                              <em class="text-sm text-gray-500">
                                Comprehensive drug information
                              </em>
                            </p>
                          </div>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="form-outline mb-4 col-6">
                              <label
                                class="form-label text-dark text-sm"
                                for="DIENTHOAI"
                              >
                                Batch Code
                              </label>
                              <input
                                type="text"
                                id="DIENTHOAI"
                                class="form-control form-control-lg"
                                name="DIENTHOAI"
                                required=""
                                value={`${drug.MALO}`}
                                placeholder={`${drug.MALO}`}
                                readonly="true"
                              />
                            </div>
                            <div class="form-outline mb-4 col-6">
                              <label
                                class="form-label text-dark text-sm"
                                for="NGAYSINH"
                              >
                                Drug code
                              </label>
                              <input
                                type="text"
                                id="NGAYSINH"
                                class="form-control form-control-lg"
                                name="NGAYSINH"
                                value={`${drug.MATHUOC}`}
                                readonly="true"
                                placeholder={`${drug.MATHUOC}`}
                              />
                            </div>
                          </div>{" "}
                          <div class="row">
                            <div class="form-outline mb-4 col-6">
                              <label
                                class="form-label text-dark text-sm font-weight-bold"
                                for="DIENTHOAI"
                              >
                                Indicator <span class="text-danger"></span>
                              </label>
                              <input
                                type="text"
                                id="DIENTHOAI"
                                class="form-control form-control-lg"
                                name="DIENTHOAI"
                                required=""
                                value={`${drug.CHIDINH}`}
                                placeholder={`${drug.CHIDINH}`}
                                readonly="true"
                              />
                            </div>
                            <div class="form-outline mb-4 col-6">
                              <label
                                class="form-label text-dark text-sm"
                                for="NGAYSINH"
                              >
                                Quantity
                              </label>
                              <input
                                type="text"
                                id="NGAYSINH"
                                class="form-control form-control-lg"
                                name="NGAYSINH"
                                value={`${drug.SOLUONG}`}
                                readonly="true"
                                placeholder={`${drug.SOLUONG}`}
                              />
                            </div>
                          </div>{" "}
                          <div class="row">
                            <div class="form-outline mb-4 col-4">
                              <label
                                class="form-label text-dark text-sm font-weight-bold"
                                for="DIENTHOAI"
                              >
                                Unit <span class="text-danger"></span>
                              </label>
                              <input
                                type="text"
                                id="DIENTHOAI"
                                class="form-control form-control-lg"
                                name="DIENTHOAI"
                                required=""
                                value={`${drug.DONVI}`}
                                placeholder={`${drug.DONVI}`}
                                readonly="true"
                              />
                            </div>
                            <div class="form-outline mb-4 col-4">
                              <label
                                class="form-label text-dark text-sm"
                                for="NGAYSINH"
                              >
                                Expired Day
                              </label>
                              <input
                                type="text"
                                id="NGAYSINH"
                                class="form-control form-control-lg"
                                name="NGAYSINH"
                                value={`${drug.NGAYHETHAN.toLocaleDateString()}`}
                                readonly="true"
                                placeholder={`${drug.NGAYHETHAN.toLocaleDateString()}`}
                              />
                            </div>
                            <div class="form-outline mb-4 col-4">
                              <label
                                class="form-label text-dark text-sm"
                                for="NGAYSINH"
                              >
                                Price
                              </label>
                              <input
                                type="text"
                                id="NGAYSINH"
                                class="form-control form-control-lg"
                                name="NGAYSINH"
                                value={`${drug.DONGIA}`}
                                readonly="true"
                                placeholder={`${drug.DONGIA}`}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            class="btn btn-tertiary text-light w-100"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PatientPage>
  );
};

export default Drug;
