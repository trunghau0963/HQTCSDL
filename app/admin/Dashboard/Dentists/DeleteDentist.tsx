import * as elements from "typed-html";
import DeleteDentist from "../../../../components/Dentist/delete_dentist";
import { DentistProps } from "../../../../config/model";

interface DeleteDentistProps {
  Data: DentistProps;
}

const DeleteDentistPage = ({Data} : DeleteDentistProps) => {
  return (
    <DeleteDentist Data={Data}/>
  );
};

export default DeleteDentistPage;
