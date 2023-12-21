import * as elements from "typed-html";
import AdminPage from "../admin";
import { EditProfile, Profile } from "../../../components/info/functionProfile";
import { Admin } from "../../../model/model";

const EditProfilePage = ({ data }: { data?: Admin | undefined }) => {
  return (
    <AdminPage>
      <EditProfile
        id={data?.MAQT}
        name={data?.HOTEN}
        phone={data?.DIENTHOAI}
        dob={data?.NGAYSINH?.toDateString()}
        address={data?.DIACHI}
        role={"Dentist"}
      />
    </AdminPage>
  );
};

export default EditProfilePage;
