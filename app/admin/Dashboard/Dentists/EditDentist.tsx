import * as elements from "typed-html";
import EditDentist from "../../../../components/Dentist/edit_dentist";
import { Dentist } from "../../../../model/model";
interface EditDentistProps {
  Data: Dentist;
}
const EditDentistPage = ({Data}: EditDentistProps) => {
  return (
    <EditDentist Data={Data}/>
  );
};

export default EditDentistPage;
