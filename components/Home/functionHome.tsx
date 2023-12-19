import * as elements from "typed-html";

export const AddAppointmentByDentist = ({
  idDentist,
  nameOfDentist,
  idx,
}: {
  idDentist: string;
  nameOfDentist: string;
  idx: number;
}) => {
  return (
    <div class="px-5 mx-5 mt-3">
      <button
        class="btn btn-tertiary text-light btn-lg py-2 mx-4"
        id={`registered-appointment-${idx}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#registered-appointment-${idx}`}
        aria-controls={`registered-appointment-${idx}`}
        hx-get="/dentist/schedule/add-appointment"
        hx-vars={`{"MANS": "${idDentist}", "HOTENNHASI": "${nameOfDentist}"}`}
        hx-target={`.add-appointment-${idx}`}
      >
        Book Appointment
      </button>

      <div
        class="modal fade"
        id={`registered-appointment-${idx}`}
        tabindex="0"
        aria-labelledby={`registered-appointment-${idx}-button`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg bg-muted">
          <div class="modal-content">
            <div class="modal-header">
              <div class="text-center">
                <h1
                  class="modal-title fw-bold mx-3 my-3 text-center"
                  id="contactInfoModalLabel"
                >
                  Add Appoinmnent
                </h1>
              </div>
              <button
                class="btn btn-tertiary text-light"
                data-bs-dismiss="modal"
              >
                <i class="bi bi-x"></i>
              </button>
            </div>
            <div class="modal-body p-5 m-3">
              <div
                class={`add-appointment-${idx}`}
                id={`add-appointment-${idx}`}
              >
                <form
                  id="add-new-appointment-form"
                  hx-post="/dentist/schedule/add-new-appointment"
                >
                  <div class="row">
                    <div class="col-6 form-outline mb-4">
                      <label for="patient_name" class="form-label">
                        Patient Name
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        name="patient_name"
                        id="patient_name"
                        placeholder=""
                      />
                    </div>
                    <div class="col-6 form-outline mb-4">
                      <label class="form-label" for="phoneNum">
                        Patient Phone Number
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="phoneNum"
                        name="phoneNum"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-outline mb-4 col-6">
                      <label class="form-label" for="MANS">
                        Id of Dentist
                      </label>
                      <input
                        type="text"
                        id="MANS"
                        class="form-control form-control-lg"
                        name="MANS"
                        value={idDentist}
                        required=""
                        placeholder={idDentist}
                        readonly="true"
                      />
                    </div>

                    <div class="col-6 form-outline mb-4">
                      <label for="dentist_name" class="form-label">
                        Dentist Name
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        name="dentist_name"
                        id="dentist_name"
                        value={nameOfDentist}
                        required=""
                        placeholder={nameOfDentist}
                        readonly="true"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 form-outline mb-4">
                      <label class="form-label" for="address">
                        Address
                      </label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="address"
                        required=""
                        name="address"
                      />
                    </div>
                    <div class="col-6 form-outline mb-4">
                      <label for="dob" class="form-label">
                        Date of birth
                      </label>
                      <input
                        type="date"
                        class="form-control form-control-lg"
                        name="dob"
                        required=""
                        id="dob"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 form-outline mb-4">
                      <label for="doa" class="form-label">
                        Date of appointment
                      </label>
                      <input
                        type="date"
                        class="form-control form-control-lg"
                        id="doa"
                        required=""
                        name="doa"
                      />
                    </div>
                    <div class="col-6 form-outline mb-4">
                      <label for="hour" class="form-label">
                        Hour of appointment
                      </label>
                      <input
                        type="time"
                        class="form-control form-control-lg"
                        id="hour"
                        required=""
                        name="hour"
                      />
                    </div>
                  </div>
                  <button
                    hx-target="#add-new-appointment-form"
                    hx-swap="outerHTML"
                    class="btn btn-dark btn-lg w-100 py-3"
                  >
                    Create New Appointment
                  </button>
                </form>
              </div>
            </div>
            {/* <div class="modal-footer">
              <button
                class="btn btn-tertiary text-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
