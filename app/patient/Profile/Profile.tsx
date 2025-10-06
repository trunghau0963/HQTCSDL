import * as elements from "typed-html";
import PatientPage from "../patient";
import { Profile } from "../../../components/info/functionProfile";
import { Patient } from "../../../model/model";
type patientProps = {
  data?: Patient | undefined;
};
const ProfilePage = ({ data }: patientProps) => {
  return (
    <PatientPage>
      <Profile
        id={data?.MABN}
        name={data?.HOTEN}
        phone={data?.DIENTHOAI}
        dob={data?.NGAYSINH?.toDateString()}
        address={data?.DIACHI}
        role={"Patient"}
      />
    </PatientPage>
  );
};

export default ProfilePage;
