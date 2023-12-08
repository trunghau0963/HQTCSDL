import * as elements from "typed-html";
import { Invoice } from "../../../model/model";
import DeleteInvoice from "../../../components/Drug/Invoice/delete_invoice";
interface DeleteInvoiceProps {
  Data: Invoice;
}
const DeleteInvoicePage = ({ Data }: DeleteInvoiceProps) => {
  return <DeleteInvoice Data={Data} />;
};

export default DeleteInvoicePage;
