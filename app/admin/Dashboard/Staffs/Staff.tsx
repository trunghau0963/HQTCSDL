import * as elements from "typed-html";
import AdminPage from "../../admin";
import AccountPage from "../../Account/Account";
import { Patient, Staff } from "../../../../model/model";
import { AddPatient } from "../../../../components/Admin/Patient/functionPatient";

type StaffProps = {
  staffs: Staff[];
};

const DentistPage = ({ staffs }: StaffProps) => {
  // console.log('dentist page: ', Data);
  return (
    <AdminPage>
      <div class="main-wrapper h-100">
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-sm-4 col-3">
                <h4 class="page-title">Staff List</h4>
              </div>
            </div>
            <AddPatient />
            <AccountPage users={staffs} role={"NHANVIEN"} />
          </div>
        </div>
      </div>
    </AdminPage>
  );
};

export default DentistPage;
