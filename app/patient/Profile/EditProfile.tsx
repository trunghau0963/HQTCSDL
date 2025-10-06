import * as elements from "typed-html";
import PatientPage from "../patient";
import { EditProfile, Profile } from "../../../components/info/functionProfile";
import { Patient } from "../../../model/model";
type patientProps = {
  data?: Patient | undefined;
};
const EditProfilePage = ({ data }: patientProps) => {
  return (
    <PatientPage>
      <EditProfile
        id={data?.MABN}
        name={data?.HOTEN}
        phone={data?.DIENTHOAI}
        dob={data?.NGAYSINH?.toDateString()}
        address={data?.DIACHI}
        role={"patient"}
      />
    </PatientPage>
  );
};

export default EditProfilePage;
