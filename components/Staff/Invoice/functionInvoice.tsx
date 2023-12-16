import * as elements from "typed-html";
import { AppointmentDetailProps, Invoice } from "../../../model/model";
import PreviewPage from "../../../app/staff/Invoice/Preview/previewPage";

export const PreviewInvoice = ({ invoice }: { invoice: Invoice }) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target={`#receiptPrint-${invoice?.MACT}`}
        hx-get="/staff/invoice/serviceIndicator"
        hx-vars={`{'MACT': '${invoice.MACT}'}`}
        hx-target={`#detail-${invoice?.MACT}`}
      >
        <i class="bi bi-printer"></i> Preview
      </button>

      <PreviewPage invoice={invoice} prescriptions={[]} />
    </div>
  );
};
