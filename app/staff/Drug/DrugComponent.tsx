import * as elements from "typed-html";
import { drugProps } from "../../../model/model";
const DrugComponent = ({ drugs, url }: { drugs: drugProps[]; url: string }) => {
  return (
    <div class="main-wrapper h-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="row">
              <div class="col-sm-6 col-md-12 my-2 mx-2">
                <form action="" method="POST">
                  <div class="form-group form-focus">
                    <label class="focus-label"></label>
                    <input
                      type="search"
                      class="form-control floating w-100"
                      name="search"
                      placeholder="Search here..."
                      hx-post="/drug/search"
                      hx-trigger="input changed delay:500ms, search"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Id Consignment</th>
                      <th>Id Drug</th>
                      <th>Name Drug</th>
                      <th>Assign</th>
                      <th>Quantity</th>
                      <th>Unit</th>
                      <th>Exp day</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drugs.map((data: any) => (
                      <tr>
                        <td>{data.MALO}</td>
                        <td>{data.MATHUOC}</td>
                        <td>{data.TENTHUOC}</td>
                        <td>{data.CHIDINH}</td>
                        <td>{data.SOLUONG}</td>
                        <td>{data.DONVI}</td>
                        <td>{data.NGAYHETHAN.toISOString().split("T")[0]}</td>
                        <td>{data.DONGIA}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugComponent;
