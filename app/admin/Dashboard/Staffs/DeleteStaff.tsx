import * as elements from "typed-html";
import DeleteStaff from "../../../../components/Staff/delete_staff";
import { StaffProps } from "../../../../config/model";

interface DeleteStaffProps {
  Data: StaffProps;
}

const DeleteStaffPage = ({Data} : DeleteStaffProps) => {
  return (
    <DeleteStaff Data={Data}/>
  );
};

export default DeleteStaffPage;
