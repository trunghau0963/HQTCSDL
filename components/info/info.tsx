import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
import { DentistProps, PatientProps, StaffProps } from "../../model/temp";
import { Admin } from "../../model/model";

const Info = ({ data }: { data: any }) => {
  return (
    <BaseHtml>
      <div class="d-flex flex-column align-items-center text-primary mt-5 bg-light">
        <h1 class="m-5">Thông tin cá nhân</h1>

        <div class="d-flex flex-row">
          <div class="m-5">
            <label for="name" class="form-label">
              Họ tên:
            </label>
            <input
              type="text"
              class="form-control w-100"
              id="name"
              value={data?.HOTEN}
            />
          </div>

          <div class="m-5">
            <label for="dob" class="form-label">
              Ngày sinh:
            </label>
            <input
              type="date"
              class="form-control w-100"
              id="dob"
              value={data?.NGAYSINH.toISOString().split("T")[0]}
            />
          </div>
        </div>
        <div class="d-flex flex-row">
          <div class="m-5">
            <label for="address" class="form-label">
              Địa chỉ:
            </label>
            <input
              type="text"
              class="form-control w-100"
              id="address"
              value={data?.DIACHI}
            />
          </div>

          <div class="m-5">
            <label for="phone" class="form-label">
              Số điện thoại(Read only)
            </label>
            <input
              type="text"
              class="form-control w-100"
              id="phone"
              value={data?.DIENTHOAI}
              readonly="true"
            />
          </div>

          <div class="m-5">
            <label for="pwd" class="form-label">
              Mật khẩu
            </label>
            <input
              type="password"
              class="form-control w-100"
              id="pwd"
              value={data?.MATKHAU}
            />
          </div>
        </div>
        {/* "{'year': document.querySelector('.year').value, 'mon': document.querySelector('.month').value, 'day': 28}" */}
        <div class="d-flex m-5">
          <button
            class="btn btn-danger mx-3"
            hx-put="/patient/home/edit-profile"
            hx-vars={
            `{
                'MABN': '${data.MABN}', 
                'HOTEN': document.querySelector('#name').value, 
                'DIACHI': document.querySelector('#address').value,
                'NGAYSINH': document.querySelector('#dob').value,
                'MATKHAU': document.querySelector('#pwd').value
            }`
        }
          >
            Lưu
          </button>
        </div>
      </div>
    </BaseHtml>
  );
};

export default Info;
