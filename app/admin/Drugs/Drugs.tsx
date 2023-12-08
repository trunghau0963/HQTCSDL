import * as elements from "typed-html";
import AdminPage from "../admin";
import Drug from "../../../components/Drug/Drug/drug";
import InvoiceComponent from "../../../components/Drug/Invoice/invoice";
import { drugProps, Invoice } from "../../../model/model";

type drugPageProps = {
  drugs: drugProps[];
  invoices: Invoice[];
};

const DrugPage = ({ drugs, invoices }: drugPageProps) => {
  console.log(drugs);
  console.log(invoices);
  return (
    <AdminPage>
      <Drug drugs={drugs} />
      <InvoiceComponent Data={invoices} />
    </AdminPage>
  );
};

export default DrugPage;
