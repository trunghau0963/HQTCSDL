import * as elements from "typed-html";
import AdminPage from "../../admin";
import { Dentist } from "../../../../model/model";
import { AddDentist, EditDentist } from "../../../../components/Admin/Dentist/functionDentist";
import AccountPage from "../../Account/Account";

type DentistProps = {
  dentists: Dentist[];
};

const DentistPage = ({ dentists }: DentistProps) => {
  // console.log('dentist page: ', Data);
  return (
    <AdminPage>
      <div class="main-wrapper h-100">
        <div class="page-wrapper">
          <div class="content">
            <div class="row">
              <div class="col-sm-4 col-3">
                <h4 class="page-title">Dentist List</h4>
              </div>
            </div>
            <AddDentist />
            <AccountPage users={dentists} role={"NHASI"} />
          </div>
        </div>
      </div>
    </AdminPage>
  );
};

export default DentistPage;
