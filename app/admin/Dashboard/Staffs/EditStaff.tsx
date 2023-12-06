import * as elements from "typed-html";
import EditStaff from "../../../../components/Staff/edit_staff";
import { StaffProps } from "../../../../model/temp";
interface EditStaffProps {
  Data: StaffProps;
}
const EditStaffPage = ({Data}: EditStaffProps) => {
  return (
    <EditStaff Data={Data}/>
  );
};

export default EditStaffPage;
