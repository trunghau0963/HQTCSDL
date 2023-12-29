import * as elements from "typed-html";
import AdminPage from "../admin";
import { DrugComponent } from "../../../components/Drug/Drug/functionDrug";
import { InvoiceComponent } from "../../../components/Drug/Invoice/functionInvoice";
import { drugProps, Invoice } from "../../../model/model";

type drugPageProps = {
  drugs: drugProps[];
  invoices: Invoice[];
};

const DrugPage = ({ drugs, invoices }: drugPageProps) => {
  return (
    <AdminPage>
      <DrugComponent drugs={drugs} url="admin" />
      <InvoiceComponent Data={invoices} />
    </AdminPage>
  );
};

export default DrugPage;
