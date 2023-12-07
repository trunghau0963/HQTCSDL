import * as elements from "typed-html";
import DeleteDentist from "../../../../components/Dentist/delete_dentist";
import { Dentist } from "../../../../model/model";

interface DeleteDentistProps {
  Data: Dentist;
}

const DeleteDentistPage = ({Data} : DeleteDentistProps) => {
  return (
    <DeleteDentist Data={Data}/>
  );
};

export default DeleteDentistPage;
