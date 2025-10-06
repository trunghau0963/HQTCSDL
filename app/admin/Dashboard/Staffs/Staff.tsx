import * as elements from "typed-html";
import AdminPage from "../../admin";
import { Staff } from "../../../../model/model";
import { AddStaff } from "../../../../components/Admin/Staff/functionStaff";
import { SearchFunction } from "../../../../components/Search";
import { TableOfPerson } from "../../../../components/Table/functionTable";

const StaffPage = () => {
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
            <AddStaff />
            <SearchFunction roleUrl="admin" role={"staff"} Table={TableOfPerson}/>
          </div>
        </div>
      </div>
    </AdminPage>
  );
};

export default StaffPage;
