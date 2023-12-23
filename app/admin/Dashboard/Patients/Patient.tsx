import * as elements from "typed-html";
import AdminPage from "../../admin";
import { AddDentist } from "../../../../components/Admin/Dentist/functionDentist";
import { AccountPage } from "../../../../components/Admin/functionAdmin";
import { Patient } from "../../../../model/model";
import { SearchFunction } from "../../../../components/Admin/functionAdmin";

type PatientProps = {
  patients: Patient[];
};

const PatientPage = () => {
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
            <AddDentist />
            <SearchFunction role={"patient"} />
          </div>
        </div>
      </div>
    </AdminPage>
  );
};

export default PatientPage;
