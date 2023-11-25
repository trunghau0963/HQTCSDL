import * as elements from "typed-html";
import Reciept from "../../receipt";

const PrintInvoice = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        data-bs-toggle="modal"
        data-bs-target="#receiptPrint"
      >
        <i class="bi bi-receipt-cutoff"></i>Print
      </button>

      <div
        class="modal fade"
        id="receiptPrint"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="receiptPrintLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="receiptPrintLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body printable"  id="receiptPrintBody">
              <Reciept />
            </div>
            <div class="modal-footer">
              <button class="btn btn-warning" data-bs-dismiss="modal">
                Close
              </button>
              <button
                hx-post="/admin/drug"
                hx-target="#receiptPrintBody"
                class="btn btn-primary"
                onclick="
                  window.print();
                  htmx.addClass(htmx.find('#receiptPrint'), 'show');
                "
              >
                <i class="bi bi-printer-fill"></i> Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintInvoice;
