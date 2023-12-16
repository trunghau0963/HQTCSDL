import * as elements from "typed-html";
import PatientPage from "../patient";
import Info from "../../../components/info/info";
import Profile from "../../../components/info/Profile";
import { getPatientById } from "../../../controller/patientController";
import { Patient } from "../../../model/model";
type patientProps = {
  data?: Patient | undefined;
};
const EditProfile = ({ data }: patientProps) => {
  return (
    <PatientPage>
        <Info data={data}/>
    </PatientPage>
  );
};

export default EditProfile;