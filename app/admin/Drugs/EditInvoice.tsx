import * as elements from "typed-html";
import AdminPage from "../admin";
import { invoiceProps } from "../../../config/model";
import EditInvoice from "../../../components/Drug/Invoice/edit_invoice";
interface EditInvoiceProps {
  Data: invoiceProps;
}
const EditInvoicePage = ({Data} : EditInvoiceProps) => {
  return (
      <EditInvoice Data={Data}/>
  );
};

export default EditInvoicePage;
