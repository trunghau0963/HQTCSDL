import * as elements from "typed-html";
import EditPatient from "../../../../components/Patient/edit_patient";
import { PatientProps } from "../../../../config/model";
interface EditPatientProps {
  Data: PatientProps;
}
const EditPatientPage = ({Data}: EditPatientProps) => {
  return (
    <EditPatient Data={Data}/>
  );
};

export default EditPatientPage;
