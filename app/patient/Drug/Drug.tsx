import * as elements from "typed-html";
import PatientPage from "../patient";
import { drugProps } from "../../../model/model";

function chunkArray(array: drugProps[], size: number) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}

const Drug = ({ drugs }: { drugs: drugProps[] }) => {
  return (
    <PatientPage>
      <div
        class="d-flex flex-column align-items-center text-primary"
        style="height:100vh"
      >
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

        {chunkArray(drugs, 5).map((chunk, index) => (
          <div class="d-flex">
            {chunk.map((data) => (
              <div class="d-flex flex-column m-3">
                <img src="/img/pile_drug.jpg" alt={data.TENTHUOC} width="150" height="100"/>
                <ul class="list-unstyled mt-2">
                  <li>Tên thuốc: {data.TENTHUOC}</li>
                  <li>Giá: {data.DONGIA}</li>
                  <li>Đơn vị tính: {data.DONVI}</li>
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </PatientPage>
  );
};

export default Drug;
