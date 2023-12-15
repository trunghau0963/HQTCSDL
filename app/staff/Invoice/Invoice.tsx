import * as elements from "typed-html";
import StaffPage from "../staff";
import { Patient } from "../../../model/model";
import PatientInvoiceComponent from "../../../components/Staff/Invoice/invoicePage";

type PatientProps = {
  Data: Patient[];
};

const InvoicePage = ({ Data }: PatientProps) => {
  return (
    <StaffPage>
      <PatientInvoiceComponent Data={Data} />
    </StaffPage>
  );
};

export default InvoicePage;
