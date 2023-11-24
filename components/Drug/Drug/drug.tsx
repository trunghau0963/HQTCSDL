import * as elements from "typed-html";
import AddDrugPage from "../../../app/admin/Drugs/AddDrug";
import DeleteDrugPage from "../../../app/admin/Drugs/DeleteDrug";
import EditDrugPage from "../../../app/admin/Drugs/EditDrug";
import { drugData } from "../../../config/hardcode/hardcode";

const Drug = () => {
  return (
    <div class="main-wrapper h-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-sm-4 col-3">
              <h4 class="page-title">Drug</h4>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-12 my-2 mx-2">
                <AddDrugPage />
              </div>
              <div class="col-sm-6 col-md-12 my-2 mx-2">
                <form action="" method="POST">
                  <div class="form-group form-focus">
                    <label class="focus-label"></label>
                    <input
                      type="text"
                      class="form-control floating w-100"
                      name="search"
                      placeholder="Search here..."
                    />
                    <button type="submit" class="btn btn-primary">
                      Search
                    </button>
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
                      <th>Chi dinh</th>
                      <th>Qunatity</th>
                      <th>Exp day</th>
                      <th>Price</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drugData.map((data) => (
                      <tr>
                        <td>{data.idConsignment}</td>
                        <td>{data.idDrug}</td>
                        <td>{data.name}</td>
                        <td>{data.chidinh}</td>
                        <td>{data.quantity}</td>
                        <td>{data.exp}</td>
                        <td>{data.price}</td>
                        <td class="text-right">
                          <EditDrugPage Data={data} />
                          <DeleteDrugPage Data={data} />
                        </td>
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

export default Drug;
