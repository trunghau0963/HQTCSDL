import * as elements from "typed-html";
import DashBoard from "../Dashboard";
import Dentist from "../../../../components/Dentist/dentist";
import AdminPage from "../../admin";

const DentistPage = () => {
  return (
    <AdminPage>
      <Dentist/>
    </AdminPage>
  );
};

export default DentistPage;
