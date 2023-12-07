import * as elements from "typed-html";
import EditStaff from "../../../../components/Staff/edit_staff";
import { Staff } from "../../../../model/model";

type StaffProps = {
  Data: Staff;
};
const EditStaffPage = ({ Data }: StaffProps) => {
  return <EditStaff Data={Data} />;
};

export default EditStaffPage;
