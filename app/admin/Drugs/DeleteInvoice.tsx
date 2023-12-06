import * as elements from "typed-html";
import AdminPage from "../admin";
import { invoiceProps } from "../../../model/model";
import DeleteInvoice from "../../../components/Drug/Invoice/delete_invoice";
interface DeleteInvoiceProps {
  Data: invoiceProps;
}
const DeleteInvoicePage = ({Data} : DeleteInvoiceProps) => {
  return (
      <DeleteInvoice Data={Data}/>
  );
};

export default DeleteInvoicePage;
