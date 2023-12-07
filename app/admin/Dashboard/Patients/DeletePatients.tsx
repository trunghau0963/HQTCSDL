import * as elements from "typed-html";
import DeletePatient from "../../../../components/Patient/delete_patient";
import { Patient } from "../../../../model/model";

interface DeletePatientProps {
  Data: Patient;
}

const DeletePatientPage = ({Data} : DeletePatientProps) => {
  return (
    <DeletePatient Data={Data}/>
  );
};

export default DeletePatientPage;
