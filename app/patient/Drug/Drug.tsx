import * as elements from "typed-html";
import PatientPage from "../patient";

const Drug = () => {
  return (
    <PatientPage>
      <div class="d-flex flex-column align-items-center text-primary">
        <h2 class="text-center my-3">Bảng thuốc</h2>
        <div class="input-group m-3 mt-5 w-25">
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

            <p class="float-left fs-2">Các loại thuốc tiêu biểu</p>

            <div class="d-flex">
                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>

                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>

                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>

                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>

                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>
            </div>

            <div class="d-flex">
                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>

                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>

                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>

                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>

                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>
            </div>

            <div class="d-flex">
                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>

                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>

                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>

                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>

                <div class="d-flex flex-column m-3">
                    <img src="https://placehold.co/150x100"/>
                    <ul class="list-unstyled mt-2">
                        <li>Tên thuốc:</li>
                        <li>Giá:</li>
                    </ul>
                </div>
            </div>
    </div>
    </PatientPage>
  );
};

export default Drug;
