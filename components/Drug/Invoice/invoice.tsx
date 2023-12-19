import * as elements from "typed-html";
import AddInvoice from "./add_invoice";
import { Invoice } from "../../../model/model";
import PrintInvoice from "./print_invoice";

type InvoiceProps = {
  Data: Invoice[];
};

const InvoiceComponent = ({ Data }: InvoiceProps) => {
  return (
    <div class="main-wrapper h-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-sm-4 col-3">
              <h4 class="page-title">Invoice</h4>
            </div>
            <div class="row">
              <div class="col-sm-6 col-md-12 my-2 mx-2">
                <AddInvoice />
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
                      <th>ID</th>
                      <th>Name Of Dentist</th>
                      <th>Name of Patient</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Total</th>
                      <th>Description</th>
                      <th>Symptom</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data.map((data) => (
                      <tr>
                        <td
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Tooltip on top"
                        >
                          {data.MACT}
                        </td>
                        <td>
                          <div class="d-flex">
                            {data.HOTENNHASI}{" "}
                            <img
                              src="/icons/warning.svg"
                              class="mx-2"
                              style="width: 20px; height: 20px;"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title={`ID : ${data.MANS}`}
                            />
                          </div>
                        </td>
                        <td>
                          <div class="d-flex">
                            {data.HOTENBENHNHAN}
                            <img
                              src="/icons/warning.svg"
                              class="mx-2"
                              style="width: 20px; height: 20px;"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title={`ID : ${data.MABN}`}
                            />
                          </div>
                        </td>
                        <td>{data.NGAYKHAM.toDateString()}</td>
                        <td>{data.GIOKHAM}</td>
                        <td>{data.TONGTIEN}</td>
                        <td>{data.CHANDOAN}</td>
                        <td>{data.TRIEUCHUNG}</td>
                        <td class="text-right">
                          <PrintInvoice />
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

export default InvoiceComponent;
