import * as elements from "typed-html";
import DashBoard from "../Dashboard";
import Staff from "../../../../components/Staff/staff";
import AdminPage from "../../admin";

const StaffPage = () => {
  return (
    <AdminPage>
      <Staff />
    </AdminPage>
  );
};

export default StaffPage;
