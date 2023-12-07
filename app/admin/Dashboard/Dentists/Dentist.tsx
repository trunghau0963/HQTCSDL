import * as elements from "typed-html";
import DentistComponent from "../../../../components/Dentist/dentist";
import AdminPage from "../../admin";
import { Dentist } from "../../../../model/model";

type DentistProps = {
  Data: Dentist[];
};

const DentistPage = ({ Data }: DentistProps) => {
  // console.log('dentist page: ', Data);
  return (
    <AdminPage>
      <DentistComponent Data={Data} />
    </AdminPage>
  );
};

export default DentistPage;
