import * as elements from "typed-html";
import StaffPage from "../staff";
import { AppointmentDetailProps, Invoice, Patient } from "../../../model/model";
import PatientInvoiceComponent from "../../../components/Staff/Invoice/invoicePage";

const InvoicePage = ({ invoices }: {invoices:Invoice[]}) => {
  return (
    <StaffPage>
      <PatientInvoiceComponent invoices={invoices} />
    </StaffPage>
  );
};

export default InvoicePage;
