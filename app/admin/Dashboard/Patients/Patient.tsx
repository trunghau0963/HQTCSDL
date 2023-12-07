import * as elements from "typed-html";
import PatientComponent from "../../../../components/Patient/patient";
import AdminPage from "../../admin";
import { Patient } from "../../../../model/model";

type PatientProps = {
  Data: Patient[];
};

const PatientPage = ({Data} : PatientProps) => {
  return (
    <AdminPage>
      <PatientComponent Data={Data}/>
    </AdminPage>
  );
};

export default PatientPage;
