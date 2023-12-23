import * as elements from "typed-html";
import { Staff, Patient, Dentist } from "../../model/model";
import { EditDentist } from "../../components/Admin/Dentist/functionDentist";
import { EditStaff } from "../../components/Admin/Staff/functionStaff";
import { EditPatient } from "../../components/Admin/Patient/functionPatient";
type User = Patient | Dentist | Staff;

export const SearchFunction = ({ role }: { role: string }) => {
  return (
    <div>
      <div class="row">
        <div class="col-sm-6 col-md-12 my-2 mx-2">
          <form>
            <div class="form-group form-focus">
              <input
                autocomplete="off"
                name="name"
                type="search"
                hx-post={`/admin/${role}/search`}
                hx-trigger="input changed delay:100ms, search, load"
                hx-target={`#search-${role}-result`}
                hx-swap="outerHTML"
                class="form-control floating w-100"
                placeholder="Search here..."
              />
              <button type="submit" class="btn btn-primary">
                Search
              </button>
            </div>
          </form>
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
              <tbody id={`search-${role}-result`}></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SearchResult = ({
  users,
  role,
}: {
  users: User[];
  role: string;
}) => {
  return (
    <tbody id={`search-${role}-result`}>
      {!users || users.length === 0 ? (
        <tr>
          <td>Not found</td>
        </tr>
      ) : (
        users.map((data: User) => <Account data={data} role={role} />)
      )}
    </tbody>
  );
};

export const Account = ({ data, role }: { data: User; role: string }) => {
  return (
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
              (data.hasOwnProperty("MANS") && "MANS" in data && data.MANS) ||
              (data.hasOwnProperty("MABN") && "MABN" in data && data.MABN) ||
              (data.hasOwnProperty("MANV") && "MANV" in data && data.MANV)
            }', 
            'role': '${role}',
            'isBlock': '${data.DAKHOA}'}`}
          />
        </div>
        <td>
          {(role === "NHASI" && <EditDentist data={data} />) ||
            (role === "NHANVIEN" && <EditStaff data={data} />) ||
            (role === "BENHNHAN" && <EditPatient data={data} />)}
        </td>
      </td>
    </tr>
  );
};

export const AccountPage = ({
  users,
  role,
}: {
  users: User[];
  role: string;
}) => {
  return (
    <div class="row" id="">
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
              {users.map((data: User) => (
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
                    <td>
                      {(role === "NHASI" && <EditDentist data={data} />) ||
                        (role === "NHANVIEN" && <EditStaff data={data} />) ||
                        (role === "BENHNHAN" && <EditPatient data={data} />)}
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
