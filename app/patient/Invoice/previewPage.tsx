import * as elements from "typed-html";

const PreviewPage = ({id}:{id:string}) => {
    console.log(id)
  return (
    <div
      class="container rounded vh-100 modal fade appoinment"
      id={`_${id}`}
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content rounded bg-light">
          <div class="card">
            <div class="modal-header">
              <h5 class="modal-title" id="contactInfoModalLabel">
                <h1 class="text-lg">Appointment Detail</h1>
              </h5>
              <div class="d-flex align-items-center gap-3">
                <button
                  class="close btn btn-tertiary icon-h-sm icon-w-sm border-0 rounded"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="card-body">
                <div class="container mb-5 mt-3">
                  <div class="container" id="invoiceBody">
                    <div class="col-md-12">
                      <div class="text-center">
                        <i
                          class="bi bi-receipt-cutoff fs-1"
                          style="color:#5d9fc5 ;"
                        ></i>
                        <p class="pt-0">HTV - Clinic </p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-8">
                        <ul class="list-unstyled"></ul>
                      </div>
                      <div class="col-xl-4">
                        <p class="text-muted">Invoice</p>
                        <ul class="list-unstyled">
                          <li class="text-muted">
                            <i class="bi bi-circle" style="color:#84B0CA ;"></i>{" "}
                            <span class="me-1 fw-bold">Status:</span>
                            <span class="badge bg-warning text-black fw-bold">
                              Unpaid
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="row my-2 mx-1 justify-content-center">
                      <table class="table table-striped table-borderless">
                        <thead
                          style="background-color:#84B0CA ;"
                          class="text-white"
                        >
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name Of Dentist</th>
                            <th scope="col">Name of Patient</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Description</th>
                            <th scope="col">Symptom</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr></tr>
                        </tbody>
                      </table>
                    </div>

                    <hr />

                    <div class="row my-2 mx-1 justify-content-center">
                      <table class="table table-striped table-borderless">
                        <thead
                          style="background-color:#84B0CA ;"
                          class="text-white"
                        >
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Batch code</th>
                            <th scope="col">Id of drug</th>
                            <th scope="col">Name of drug</th>
                            <th scope="col">Amount Indicate</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div class="row">
                      <div class="col-xl-8">
                        <p class="ms-3">
                          Add additional notes and payment information
                        </p>
                      </div>
                      <div class="col-xl-3"></div>
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

export default PreviewPage;
