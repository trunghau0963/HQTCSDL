import * as elements from "typed-html";
import AdminPage from "../../admin";
import { Dentist } from "../../../../model/model";
import { AddDentist } from "../../../../components/Admin/Dentist/functionDentist";
import { SearchFunction } from "../../../../components/Admin/functionAdmin";

const DentistPage = () => {
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
            <SearchFunction role={"dentist"} />
          </div>
        </div>
      </div>
    </AdminPage>
  );
};

export default DentistPage;
