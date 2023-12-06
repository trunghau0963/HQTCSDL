import * as elements from "typed-html";
import DeletePatient from "../../../../components/Patient/delete_patient";
import { PatientProps } from "../../../../model/model";

interface DeletePatientProps {
  Data: PatientProps;
}

const DeletePatientPage = ({Data} : DeletePatientProps) => {
  return (
    <DeletePatient Data={Data}/>
  );
};

export default DeletePatientPage;
