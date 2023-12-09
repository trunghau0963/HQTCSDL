import * as elements from "typed-html";
import AddServicePage from "../../app/admin/Service/AddService";
import DeleteServicePage from "../../app/admin/Service/DeleteService";
import EditServicePage from "../../app/admin/Service/EditService";
import { Service } from "../../model/model";
type ServiceProps = {
  Data: Service[];
};

const ServiceComponent = ({ Data }: ServiceProps) => {
  return (
    <div class="main-wrapper h-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-sm-4 col-3">
              <h4 class="page-title">patient</h4>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-12 my-2 mx-2">
                <AddServicePage />
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
                      <th>Id Service</th>
                      <th>Name Service</th>
                      <th>Price</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data.map((data) => (
                      <tr id="service">
                        <td>{data.MADV}</td>
                        <td>{data.TENDV}</td>
                        <td>{data.DONGIA}</td>
                        <td class="text-right">
                          <EditServicePage Data={data} />
                          {/* <DeleteServicePage Data={data} /> */}
                          {/* <button
                            type="button"
                            class="btn btn-link text-decoration-none"
                            hx-delete="/admin/service"
                            hx-target="#service"
                            hx-params={`{"MADV": ${data.MADV}}`}
                            hx-headers={`{"MADV": ${data.MADV}}`}
                          >
                            <i class="bi bi-eraser"></i>
                            Delete
                          </button> */}
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

export default ServiceComponent;
