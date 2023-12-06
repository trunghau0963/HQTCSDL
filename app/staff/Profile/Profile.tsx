import * as elements from "typed-html";
import StaffPage from "../staff";
import Info from "../../../components/info/info";
import Profile from "../../../components/info/Profile";
import { Staff } from "../../../model/model";
type dentisttProps = {
  data?: Staff | undefined;
};
const ProfilePage = ({ data }: dentisttProps) => {
  return (
    <StaffPage>
      <Profile
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

export default ProfilePage;
