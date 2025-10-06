import * as elements from "typed-html";
import { Dentist as DentistProps } from "../model/model";
function chunkArray(array: DentistProps[], size: number) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}
const ListRole = ({ dentists }: { dentists: DentistProps[] }) => {
  return (
    <div class="d-flex">
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
          <button class="btn btn-primary m-3 me-5">Đăng nhập / Đăng ký</button>
        </div>

        <hr />
        <div>
          <p class="fw-bold m-3">Đội ngũ bác sĩ</p>
          {chunkArray(dentists, 5).map((chunk, index) => (
            <div class="d-flex">
              {chunk.map((element) => (
                <div class="d-flex flex-column align-items-center">
                  <img
                    src="/img/staff-thumb_03.jpg"
                    class="rounded-circle mx-3"
                    width="300"
                    height="300"
                  />
                  <h2 class="mt-3">NS.{element.HOTEN}</h2>
                  <h2 class="mt-3">
                    {element.NGAYSINH.toISOString().split("T")[0]}
                  </h2>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListRole;
