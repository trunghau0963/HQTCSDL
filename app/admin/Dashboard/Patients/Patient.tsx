import * as elements from "typed-html";
import DashBoard from "../Dashboard";
import Patient from "../../../../components/Patient/patient";
import AdminPage from "../../admin";

const PatientPage = () => {
  return (
    <AdminPage>
      <Patient/>
    </AdminPage>
  );
};

export default PatientPage;
