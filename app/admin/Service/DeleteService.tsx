import * as elements from "typed-html";
import AdminPage from "../admin";
import DeleteService from "../../../components/Service/delete_service";
import { Service } from "../../../model/model";
interface DeleteServiceProps {
  Data: Service;
}
const DeleteServicePage = ({Data} :DeleteServiceProps ) => {
  return (
      <DeleteService Data={Data}/>
  );
};

export default DeleteServicePage;
