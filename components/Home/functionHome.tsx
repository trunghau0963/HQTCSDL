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
        hx-get="/dentist-schedule"
        hx-vars={`{"MANS": "${idDentist}", "HOTENNHASI": "${nameOfDentist}"}`}
        hx-target={`.guest-add-appointment-${idx}`}
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
                class={`guest-add-appointment-${idx}`}
                id={`guest-add-appointment-${idx}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
