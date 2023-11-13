import * as elements from "typed-html";
import BaseHtml from "../../../layouts/baseHtml";

const Signup = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <div class="dark-background">
        <div class="d-flex flex-column align-items-center p-5 text-primary">
          <h1 class="m-5">Đăng ký</h1>

          <div
            class="bg-light p-4 rounded"
            style="max-width: 600px; width: 100%;"
          >
            <h3 class="text-center mb-3">Phòng Khám Nha Khoa VHT</h3>
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input type="text" class="form-control" id="email" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Mật khẩu
                </label>
                <input type="password" class="form-control" id="password" />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">
                  Xác nhận lại mật khẩu
                </label>
                <input type="password" class="form-control" id="password" />
              </div>

              <button type="submit" class="btn btn-primary w-100">
                Đăng ký
              </button>
            </form>

            <p class="mt-3 text-center">
              Nếu bạn đã có tài khoản, <a href="/login">hãy đăng nhập ở đây!</a>
            </p>
          </div>
        </div>
      </div>
    </BaseHtml>
  );
};

export default Signup;