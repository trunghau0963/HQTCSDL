import * as elements from "typed-html";

export const GetAppointment = ({
  idDentist,
  date,
  idx,
}: {
  idDentist: string;
  date: Date;
  idx: number;
}) => {
  return (
    <div>
      <button
        class="btn btn-sm btn-danger"
        id={`get-registered-${idx}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#get-registered-${idx}`}
        aria-controls={`get-registered-${idx}`}
        hx-get="/dentist/schedule/appointment"
        hx-vars={`{'MANS': '${idDentist}', 'NGAYKHAM': '${date.toLocaleDateString()} '}`}
        hx-target={`.appointment-${idx}`}
      >
        <i class="bi bi-person-add"></i>Registered
      </button>

      <div
        class="modal fade"
        id={`get-registered-${idx}`}
        tabindex="0"
        aria-labelledby={`get-registered-${idx}-button`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg bg-muted">
          <div class="modal-content">
            <div class="modal-header">
              <h1
                class="modal-title d-flex flex-column justify-content-center text-center "
                id="get-registeredLabel"
              >
                <h3 class="fw-bold mx-3 my-3">Appointment Detail</h3>
                <button
                  class="fw-bold btn btn-warning rounded-pill"
                  disabled=""
                >
                  Upcoming
                </button>
              </h1>
            </div>
            <div class="modal-body">
              <div class={`appointment-${idx}`} id={`appointment-${idx}`}></div>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                hx-target="#get-appointment-form"
                hx-swap="outerHTML"
                class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
              >
                Search
              </button>
              <button class="btn btn-tertiary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
