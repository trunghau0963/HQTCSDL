import * as elements from "typed-html";
import AdminPage from "../admin";
import EditDrug from "../../../components/Drug/Drug/edit_drug";
import { drugProps } from "../../../model/model";
interface EditDrugProps {
  Data: drugProps;
}
const EditDrugPage = ({Data} : EditDrugProps) => {
  return (
      <EditDrug Data={Data}/>
  );
};

export default EditDrugPage;
