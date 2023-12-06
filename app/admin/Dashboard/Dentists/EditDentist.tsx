import * as elements from "typed-html";
import EditDentist from "../../../../components/Dentist/edit_dentist";
import { DentistProps } from "../../../../model/temp";
interface EditDentistProps {
  Data: DentistProps;
}
const EditDentistPage = ({Data}: EditDentistProps) => {
  return (
    <EditDentist Data={Data}/>
  );
};

export default EditDentistPage;
