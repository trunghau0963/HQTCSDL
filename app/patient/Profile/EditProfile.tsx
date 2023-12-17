import * as elements from "typed-html";
import PatientPage from "../patient";
import Info from "../../../components/info/info";
import Profile from "../../../components/info/Profile";
import { getPatientById } from "../../../controller/patientController";
import { Admin, Patient } from "../../../model/model";
import DentistPage from "../../dentist/dentist";
import AdminPage from "../../admin/admin";
import StaffPage from "../../staff/staff";
type dataProps = {
  data?: Patient | Admin | Patient;
  role: string;
};
const EditProfile = ({ data, role }: dataProps) => {
  if (role === "patient") {
    return (
      <PatientPage>
        <Info data={data} role={role} />
      </PatientPage>
    );
  }
  else if (role === "dentist") {
    return (
      <DentistPage>
        <Info data={data} role={role} />
      </DentistPage>
    );
  }
  else if (role === "admin") {
    return (
      <AdminPage>
        <Info data={data} role={role} />
      </AdminPage>
    );
  }
  else{
    return (
      <StaffPage>
        <Info data={data} role={role} />
      </StaffPage>
    );
  }
};

export default EditProfile;
