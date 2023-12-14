import * as elements from "typed-html";
import { AddService, EditService, DeleteService } from "./functionService";
import { Service } from "../../model/model";
type ServiceProps = {
  Data: Service[];
  url: string;
};

const ServiceComponent = ({ Data, url }: ServiceProps) => {
  return (
    <div class="main-wrapper h-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="row">
              <div class="col-sm-6 col-md-12 my-2 mx-2">
                <AddService url={url} />
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
                          <EditService Data={data} url={url} />
                          <DeleteService Data={data} url={url} />
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
