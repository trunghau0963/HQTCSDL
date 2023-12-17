import * as elements from "typed-html";
import { Staff, Patient, Dentist } from "../../../model/model";
import { html2pdf } from "html2pdf-ts";
import { number } from "joi";
import AdminPage from "../admin";
import AccountPage from "./Account";
const ListAccounts = ({
  patients,
  dentists,
  staffs,
}: {
  patients: Patient[];
  dentists: Dentist[];
  staffs: Staff[];
}) => {
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
            <AccountPage users={patients} role={'BENHNHAN'}/>
          </div>
        </div>
      </div>

      <div class="main-wrapper h-100">
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-sm-4 col-3">
                <h4 class="page-title">Dentist List</h4>
              </div>
            </div>
            <AccountPage users={dentists} role={'NHASI'}/>
          </div>
        </div>
      </div>
      <div class="main-wrapper h-100">
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-sm-4 col-3">
                <h4 class="page-title">Staff List</h4>
              </div>
            </div>
            <AccountPage users={staffs} role={'NHANVIEN'}/>
          </div>
        </div>
      </div>
    </AdminPage>
  );
};

export default ListAccounts;
