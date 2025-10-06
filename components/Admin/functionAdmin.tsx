import * as elements from "typed-html";
import { Staff, Patient, Dentist } from "../../model/model";
import { EditDentist } from "../../components/Admin/Dentist/functionDentist";
import { EditStaff } from "../../components/Admin/Staff/functionStaff";
import { EditPatient } from "../../components/Admin/Patient/functionPatient";
type User = Patient | Dentist | Staff;

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


