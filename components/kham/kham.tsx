import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";

const Kham = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <div class="container d-flex mx-0 text-primary">
        <div class="col-5 me-5">
          <table class="my-5 text-center table table-striped table-bordered">
            <caption class="fw-bold">Bệnh nhân chờ khám</caption>
            <tr>
              <th scope="col">Giới tính</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">Năm sinh</th>
              <th scope="col">Thực hiện khám</th>
              <th scope="col">Xóa</th>
            </tr>
            <tr>
              <td class="mx-1">Nam</td>
              <td class="mx-1">Đoàn Ngọc Thức</td>
              <td class="mx-1">12/12/2003</td>
              <td>
                <button class="btn btn-primary">Khám</button>
              </td>
              <td>
                <button class="btn btn-danger">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>Nữ</td>
              <td>Francisco</td>
              <td>21/12/2003</td>
              <td>
                <button class="btn btn-primary">Khám</button>
              </td>
              <td>
                <button class="btn btn-danger">Xóa</button>
              </td>
            </tr>
          </table>

          <table class="my-5 text-center table table-striped table-bordered">
            <caption class="fw-bold">Bệnh nhân đã khám</caption>
            <tr>
              <th scope="col">Giới tính</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">Năm sinh</th>
              <th scope="col">Ngày Khám</th>
            </tr>
            <tr>
              <td>Nữ</td>
              <td>Maria</td>
              <td>2001</td>
              <td>11/11/2003</td>
            </tr>
            <tr>
              <td>Nam</td>
              <td>Võ Nam Đăng</td>
              <td>2003</td>
              <td>11/11/2003</td>
            </tr>
          </table>
        </div>

        <div class="col-7 d-flex flex-column ms-5 my-5 rounded-4 mx-0">
          <div class="d-flex">
            <div class="d-flex flex-column mx-3">
              <h3>Thông tin bệnh nhân</h3>

              <div class="d-flex flex-column border border-5 p-4">
                <div class="d-flex">
                  <p class="me-5">Họ và tên: Đoàn Ngọc Thức</p>
                  <p class="ms-5">Giới tính: Nam</p>
                </div>

                <p>Ngày sinh: 12/12/2003</p>
                <p>Địa chỉ: Đường X, quận Y, thành phố Z</p>
              </div>
            </div>

            <div class="d-flex flex-column mx-3">
              <h3>Chuẩn đoán</h3>

              <div class="d-flex flex-column border border-5 p-4">
                <div class="d-flex">
                  <p class="me-5">Họ và tên: Đoàn Ngọc Thức</p>
                  <p class="ms-5">Giới tính: Nam</p>
                </div>

                <p>Ngày sinh: 12/12/2003</p>
                <p>Địa chỉ: Đường X, quận Y, thành phố Z</p>
              </div>
            </div>
          </div>

          <h3 class="text-center mt-5 mb-3">Chỉ định dịch vụ</h3>
          <div>
            <table class="my-5 text-center table table-striped table-bordered sticky-top">
              <tr>
                <th scope="col">Mã dịch vụ</th>
                <th scope="col">Tên dịch vụ</th>
                <th scope="col">Chọn</th>
              </tr>

              <tr>
                <td class="mx-1">NR</td>
                <td class="mx-1">Nhổ răng</td>
                <td class="text-center">
                  <div class="form-check text-center">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>TR</td>
                <td>Trám răng</td>
                <td class="text-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>CV</td>
                <td>Cạo vôi</td>
                <td class="text-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>CX</td>
                <td>Chụp X-quang</td>
                <td class="text-center">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <h3 class="text-center">Kê toa thuốc</h3>

          <div class="d-flex">
           <label for="namethuoc">Tên thuốc:</label>
           <input type="text" class="form-control w-100" id="namethuoc" />

           <label for="amount">Số lượng:</label>
           <input type="text" class="form-control w-100" id="amount" />

           <label for="unit">Đơn vị:</label>
           <input type="text" class="form-control w-100" id="unit" />

           <label for="usage">Cách dùng:</label>
           <input type="text" class="form-control w-100" id="usage" />

           <button class="btn btn-success">Thêm</button>
          </div>

          <table class="my-3 text-center table table-striped table-bordered">
            <tr>
              <th>Mã thuốc</th>
              <th>Tên thuốc</th>
              <th>Số lượng</th>
              <th>Đơn vị</th>
              <th>Cách dùng</th>
            </tr>

            <tr>
              <td>TD</td>
              <td>Thể dục</td>
              <td>60</td>
              <td>Viên</td>
              <td>1 Ngày 1 lần</td>
            </tr>

            <tr>
              <td>TD</td>
              <td>Thể dục</td>
              <td>60</td>
              <td>Viên</td>
              <td>1 Ngày 1 lần</td>
            </tr>

            <tr>
              <td>TD</td>
              <td>Thể dục</td>
              <td>60</td>
              <td>Viên</td>
              <td>1 Ngày 1 lần</td>
            </tr>
           </table>

          <button class="btn btn-primary">Lưu toa thuốc</button>

        </div>
      </div>
    </BaseHtml>
  );
};

export default Kham;
