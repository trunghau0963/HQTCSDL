import * as elements from "typed-html";
import AdminPage from "../../admin";
import { AddDentist } from "../../../../components/Admin/Dentist/functionDentist";
import AccountPage from "../../Account/Account";
import { Patient } from "../../../../model/model";
import { AddPatient } from "../../../../components/Admin/Patient/functionPatient";

type PatientProps = {
  patients: Patient[];
};

const DentistPage = ({ patients }: PatientProps) => {
  return (
    <AdminPage>
      <div class="main-wrapper h-100">
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-sm-4 col-3">
                <h4 class="page-title">Patient List</h4>
              </div>
            </div>
            <AddPatient />
            <AccountPage users={patients} role={"BENHNHAN"} />
          </div>
        </div>
      </div>
    </AdminPage>
  );
};

export default DentistPage;
