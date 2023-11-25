import * as elements from "typed-html";
import AdminPage from "../admin";
import Drug from "../../../components/Drug/Drug/drug";
import Invoice from "../../../components/Drug/Invoice/invoice";
const DrugPage = () => {
  return (
    <AdminPage>
      <Drug/>
      <Invoice/>
    </AdminPage>
  );
};

export default DrugPage;
