import * as elements from "typed-html";
import EditPatient from "../../../../components/Patient/edit_patient";
import { Patient } from "../../../../model/model";
interface EditPatientProps {
  Data: Patient;
}
const EditPatientPage = ({Data}: EditPatientProps) => {
  return (
    <EditPatient Data={Data}/>
  );
};

export default EditPatientPage;
