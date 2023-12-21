import * as elements from "typed-html";
import DentistPage from "../dentist";
import { EditProfile, Profile } from "../../../components/info/functionProfile";
import { Dentist } from "../../../model/model";
type DentistProps = {
  data?: Dentist | undefined;
};
const EditProfilePage = ({ data }: DentistProps) => {
  return (
    <DentistPage>
      <EditProfile
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

export default EditProfilePage;
