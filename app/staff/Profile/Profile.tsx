import * as elements from "typed-html";
import StaffPage from "../staff";
import { Profile } from "../../../components/info/functionProfile";
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
        role={"staff"}
      />
    </StaffPage>
  );
};

export default ProfilePage;
