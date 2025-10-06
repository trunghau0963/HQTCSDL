import * as elements from "typed-html";
import AdminPage from "../admin";
import { Profile } from "../../../components/info/functionProfile";
import { Admin } from "../../../model/model";
type dentisttProps = {
  data?: Admin | undefined;
};
const ProfilePage = ({ data }: dentisttProps) => {
  return (
    <AdminPage>
      <Profile
        id={data?.MAQT}
        name={data?.HOTEN}
        phone={data?.DIENTHOAI}
        dob={data?.NGAYSINH?.toDateString()}
        address={data?.DIACHI}
        role={"Admin"}
      />
    </AdminPage>
  );
};

export default ProfilePage;
