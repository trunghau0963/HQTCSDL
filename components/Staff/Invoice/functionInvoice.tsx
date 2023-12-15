import * as elements from "typed-html";

export const PreviewInvoice = ({ idPatient }: { idPatient: string }) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        id={`receiptPrint-${idPatient}-button`}
        data-bs-toggle="modal"
        data-bs-target={`#receiptPrint-${idPatient}`}
        aria-controls={`receiptPrint-${idPatient}`}
      >
        <i class="bi bi-printer"></i> Preview
      </button>

      <div
        class="modal fade"
        id={`receiptPrint-${idPatient}`}
        tabindex="0"
        aria-labelledby={`receiptPrint-${idPatient}-button`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg bg-muted">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="receiptPrintLabel">
                Search Invoice
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form id="search-invoice-form" hx-post="/staff/invoice">
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="MABN"
                    class="form-control form-control-lg"
                    name="MABN"
                    required=""
                    value={idPatient}
                    placeholder={idPatient}
                    readonly="true"
                  />
                  <label class="form-label font-weight-bold" for="MABN">
                    ID Patient <span class="text-danger"></span>
                  </label>
                </div>
                <div class="form-outline mb-4">
                  <input
                    type="date"
                    id="NGAYKHAM"
                    class="form-control form-control-lg"
                    name="NGAYKHAM"
                    required=""
                    max={new Date().toISOString().split("T")[0]}
                  />
                  <label class="form-label" for="NGAYKHAM">
                    NGAYKHAM
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="time"
                    id="GIOKHAM"
                    class="form-control form-control-lg"
                    name="GIOKHAM"
                    required=""
                  />
                  <label class="form-label" for="GIOKHAM">
                    GIOKHAM
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button
                    type="submit"
                    hx-target="#search-invoice-form"
                    hx-swap="outerHTML"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
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
