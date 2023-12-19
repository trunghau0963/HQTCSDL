import * as elements from "typed-html";
import { Staff, Patient, Dentist } from "../../../model/model";
import { html2pdf } from "html2pdf-ts";
import { number } from "joi";
import AdminPage from "../admin";
import { EditDentist } from "../../../components/Admin/Dentist/functionDentist";
import { EditStaff } from "../../../components/Admin/Staff/functionStaff";
import { EditPatient } from "../../../components/Admin/Patient/functionPatient";
type User = Patient | Dentist | Staff;
const AccountPage = ({ users, role }: { users: User[]; role: string }) => {
  return (
    <div>
      <div class="row">
        <div class="row">
          <div class="col-sm-6 col-md-12 my-2 mx-2"></div>
          <div class="col-sm-6 col-md-12 my-2 mx-2">
            <form action="" method="POST">
              <div class="form-group form-focus">
                <label class="focus-label"></label>
                <input
                  type="text"
                  class="form-control floating w-100"
                  name="search"
                  placeholder="Search here..."
                />
                <button type="submit" class="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-striped custom-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>PWD</th>
                  <th>Date of birth</th>
                  <th>Address</th>
                  <th>Is block ?</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {users.map((data:User) => (
                  <tr id="service">
                    <td>
                      {(data.hasOwnProperty("MANS") && "MANS" in data && (
                        <span>{data.MANS}</span>
                      )) ||
                        (data.hasOwnProperty("MABN") && "MABN" in data && (
                          <span>{data.MABN}</span>
                        )) ||
                        (data.hasOwnProperty("MANV") && "MANV" in data && (
                          <span>{data.MANV}</span>
                        ))}
                    </td>
                    <td>{data.HOTEN}</td>
                    <td>{data.DIENTHOAI}</td>
                    <td>{data.MATKHAU}</td>
                    <td>{data.NGAYSINH.toISOString().split("T")[0]}</td>
                    <td>{data.DIACHI}</td>
                    <td>
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id={`${role}-${data.DIENTHOAI}`}
                          checked={data.DAKHOA}
                          hx-put="/admin/manageAccount"
                          hx-vars={`
                          {'id': '${
                            (data.hasOwnProperty("MANS") &&
                              "MANS" in data &&
                              data.MANS) ||
                            (data.hasOwnProperty("MABN") &&
                              "MABN" in data &&
                              data.MABN) ||
                            (data.hasOwnProperty("MANV") &&
                              "MANV" in data &&
                              data.MANV)
                          }', 
                          'role': '${role}',
                          'isBlock': '${data.DAKHOA}'}`}
                        />
                      </div>
                      <td>{(role === "NHASI" && <EditDentist data={data}/>) || ((role === "NHANVIEN" && <EditStaff data={data}/>)) || ((role === "BENHNHAN" && <EditPatient data={data}/>))}</td>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
