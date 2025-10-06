import * as elements from "typed-html";
import StaffPage from "../staff";
import { EditProfile, Profile } from "../../../components/info/functionProfile";
import { Staff } from "../../../model/model";

const EditProfilePage = ({ data }: { data?: Staff | undefined }) => {
  return (
    <StaffPage>
      <EditProfile
        id={data?.MANV}
        name={data?.HOTEN}
        phone={data?.DIENTHOAI}
        dob={data?.NGAYSINH?.toDateString()}
        address={data?.DIACHI}
        role={"Staff"}
      />
    </StaffPage>
  );
};

export default EditProfilePage;
