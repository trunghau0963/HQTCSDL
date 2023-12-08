import * as elements from "typed-html";
import AdminPage from "../admin";
import EditService from "../../../components/Service/edit_service";
import { Service } from "../../../model/model";
interface EditServiceProps {
  Data: Service;
}
const EditServicePage = ({Data} : EditServiceProps) => {
  return (
      <EditService Data={Data}/>
  );
};

export default EditServicePage;
