import * as elements from "typed-html";
import AdminPage from "../admin";
import { serviceProps } from "../../../config/model";
import DeleteService from "../../../components/Service/delete_service";

interface DeleteServiceProps {
  Data: serviceProps;
}
const DeleteServicePage = ({Data} :DeleteServiceProps ) => {
  return (
      <DeleteService Data={Data}/>
  );
};

export default DeleteServicePage;
