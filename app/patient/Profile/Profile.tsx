import * as elements from "typed-html";
import PatientPage from "../patient";
import Info from "../../../components/info/info";

const Profile = () => {
  return (
    <PatientPage>
      <Info/>
    </PatientPage>
  );
};

export default Profile;
