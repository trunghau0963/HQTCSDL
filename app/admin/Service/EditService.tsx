import * as elements from "typed-html";
import AdminPage from "../admin";
import { serviceProps } from "../../../model/model";
import EditService from "../../../components/Service/edit_service";
interface EditServiceProps {
  Data: serviceProps;
}
const EditServicePage = ({Data} : EditServiceProps) => {
  return (
      <EditService Data={Data}/>
  );
};

export default EditServicePage;
