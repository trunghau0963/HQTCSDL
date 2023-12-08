import * as elements from "typed-html";
import AdminPage from "../admin";
import { Invoice } from "../../../model/model";
import EditInvoice from "../../../components/Drug/Invoice/edit_invoice";
interface EditInvoiceProps {
  Data: Invoice;
}
const EditInvoicePage = ({Data} : EditInvoiceProps) => {
  return (
      <EditInvoice Data={Data}/>
  );
};

export default EditInvoicePage;
