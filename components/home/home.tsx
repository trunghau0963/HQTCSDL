import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";

const Home = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <div class="d-flex">
        <div class="d-flex flex-column p-3 bg-body-tertiary vh-100 w-100 max-w-xs sticky-top">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span class="fs-4">Logo</span>
          </a>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a
                href="#"
                class="nav-link active d-flex align-items-center"
                aria-current="page"
              >
                <i class="me-2 my-2 bi-house" />
                <span>Trang chủ</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="nav-link link-body-emphasis d-flex align-items-center"
              >
                <i class="me-2 my-2 bi bi-capsule-pill" />
                Thuốc
              </a>
            </li>

            <li>
              <a
                href="#"
                class="nav-link link-body-emphasis d-flex align-items-center"
              >
                <i class="me-2 my-2 bi bi-tag" />
                Dịch vụ
              </a>
            </li>

            <li>
              <a
                href="#"
                class="nav-link link-body-emphasis d-flex align-items-center"
              >
                <i class="me-2 my-2 bi bi-person" />
                Tài khoản
              </a>
            </li>

            <li>
              <a
                href="#"
                class="nav-link link-body-emphasis d-flex align-items-center"
              >
                <i class="me-2 my-2 bi bi-book" />
                Lịch sử
              </a>
            </li>
          </ul>
        </div>
        <div class="flex-grow-1">
          <div class="d-flex m-0 justify-content-between">
            <div class="input-group m-3 w-50">
              <input
                type="text"
                class="form-control"
                placeholder="Tìm kiếm"
                aria-label="Tìm kiếm"
                aria-describedby="basic-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="basic-addon2"
              >
                <i class="bi bi-search" />
              </button>
            </div>
            <button class="btn btn-primary m-3 me-5">
              Đăng nhập / Đăng ký
            </button>
          </div>

          <hr />

          <div>
            <p class="fw-bold m-3">Đội ngũ bác sĩ</p>
            <div class="d-flex">
              <div class="d-flex flex-column align-items-center">
              <img
                src="https://placehold.co/200x200"
                class="rounded-circle mx-3"
              />
              <p class="mt-3">Bác sĩ Shaw</p>
              </div>

              <div class="d-flex flex-column align-items-center">
              <img
                src="https://placehold.co/200x200"
                class="rounded-circle mx-3"
              />
              <p class="mt-3">Bác sĩ Shaw</p>
              </div>

              <div class="d-flex flex-column align-items-center">
              <img
                src="https://placehold.co/200x200"
                class="rounded-circle mx-3"
              />
              <p class="mt-3">Bác sĩ Shaw</p>
              </div>
            </div>
          </div>

          <div>
            <p class="fw-bold m-3">Phòng khám</p>
            <div class="d-flex">
              <img
                style="max-width: 200px; max-height: 250px;"
                src="https://placehold.co/600x400"
                alt="Hospital illustration"
                class="m-0 p-0 img-fluid ms-4">
              </img>
              <div>
              <p class="m-3">Phòng Khám Quản Trị Cơ sở</p>
              <p class="m-3 mt-0">Địa chỉ: Đường X, quận Y, thành phố Z</p>
              </div>
            </div>
          </div>

          <div>
            <p class="m-3 fw-bold">Bệnh viện</p>
            <div class="d-flex ">
              <img
                style="max-width: 200px; max-height: 250px;"
                src="https://placehold.co/600x400"
                alt="Hospital illustration"
                class="m-0 p-0 img-fluid ms-4"
              />
              <div>
                <p class="m-3">Bệnh viện Quản Trị Cơ sở</p>
                <p class="m-3 mt-0">Địa chỉ: Đường X, quận Y, thành phố Z</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseHtml>
  );
};

export default Home;
