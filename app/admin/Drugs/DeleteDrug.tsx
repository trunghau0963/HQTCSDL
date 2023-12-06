import * as elements from "typed-html";
import AdminPage from "../admin";
import { drugProps } from "../../../model/model";
import DeleteDrug from "../../../components/Drug/Drug/delete_drug";
interface EditDrugProps {
  Data: drugProps;
}
const DeleteDrugPage = ({Data} : EditDrugProps) => {
  return (
      <DeleteDrug Data={Data}/>
  );
};

export default DeleteDrugPage;
