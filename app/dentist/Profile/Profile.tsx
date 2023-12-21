import * as elements from "typed-html";
import DentistPage from "../dentist";
import Info from "../../../components/info/info";
import { Profile } from "../../../components/info/functionProfile";
import { Dentist } from "../../../model/model";
type dentisttProps = {
  data?: Dentist | undefined;
};
const ProfilePage = ({ data }: dentisttProps) => {
  return (
    <DentistPage>
      <Profile
        id={data?.MANS}
        name={data?.HOTEN}
        phone={data?.DIENTHOAI}
        dob={data?.NGAYSINH?.toDateString()}
        address={data?.DIACHI}
        role={"Dentist"}
      />
    </DentistPage>
  );
};

export default ProfilePage;
