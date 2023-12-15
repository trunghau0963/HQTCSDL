import * as elements from "typed-html";
import StaffComponent from "../../../../components/Admin/Staff/staff";
import AdminPage from "../../admin";
import { Staff } from "../../../../model/model";

type StaffProps = {
  Data: Staff[];
};

const StaffPage = ({ Data }: StaffProps) => {
  return (
    <AdminPage>
      <StaffComponent Data={Data}/>
    </AdminPage>
  );
};

export default StaffPage;
