import * as elements from "typed-html";
import AdminPage from "../admin";
import Drug from "../../../components/Drug/Drug/drug";
import Invoice from "../../../components/Drug/Invoice/invoice";
import { drugProps } from "../../../model/model";

const DrugPage = ({ drugs }: { drugs: drugProps[] }) => {
  console.log(drugs)
  return (
    <AdminPage> 
      <Drug drugs = {drugs}/>
      <Invoice/>
    </AdminPage>
  );
};

export default DrugPage;
