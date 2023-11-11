import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";

const Info = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <div class="d-flex flex-column align-items-center text-primary mt-5 bg-light">
        <h1 class="m-5">Thông tin cá nhân</h1>

        <div class="d-flex">
            <div class="m-3">
                <label for="name" class="form-label">
                    Họ tên:
                </label>
                <input type="text" class="form-control w-100" id="name" />
            </div>

            <div class="m-3">
                <label for="dob" class="form-label">
                    Ngày sinh:
                </label>
                <input type="text" class="form-control" id="dob" />
            </div>
        </div>

        <div class="m-3">
            <label for="address" class="form-label">
                Địa chỉ:
            </label>
            <input type="text" class="form-control w-auto" id="address" style="width: 340px;"/>
        </div>

        <div class="d-flex">
            <div class="m-3">
                <label for="phone" class="form-label">
                    Số điện thoại
                </label>
                <input type="text" class="form-control w-100" id="phone" />
            </div>

            <div class="m-3">
                <label for="email" class="form-label">
                    Email
                </label>
                <input type="text" class="form-control" id="email" />
            </div>
        </div>

        <div class="d-flex m-5">
        <button class="btn btn-danger mx-3">Chỉnh sửa</button>
        <button class="btn btn-primary mx-3">Lưu</button>
        </div>
      </div>
    </BaseHtml>
  );
};

export default Info;
