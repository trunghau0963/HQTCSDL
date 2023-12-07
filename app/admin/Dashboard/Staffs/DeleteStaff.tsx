import * as elements from "typed-html";
import DeleteStaff from "../../../../components/Staff/delete_staff";
import { Staff } from "../../../../model/model";

type StaffProps = {
  Data: Staff;
};

const DeleteStaffPage = ({Data} : StaffProps) => {
  return (
    <DeleteStaff Data={Data}/>
  );
};

export default DeleteStaffPage;
