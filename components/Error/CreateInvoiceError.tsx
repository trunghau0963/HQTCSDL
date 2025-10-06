import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
const CreateInvoiceError = ({route}:{route:string}) => {
  return (
    <BaseHtml>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3">
            {" "}
            <span class="text-danger">Opps!</span> Create invoice failed.
          </p>
          <p class="lead">Appointment has been cancelled</p>
          <a href={`/${route}/schedule`} class="btn btn-primary">
            Go back
          </a>
        </div>
      </div>
    </BaseHtml>
  );
};

export default CreateInvoiceError;
