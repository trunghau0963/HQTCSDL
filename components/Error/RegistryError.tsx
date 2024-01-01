import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
const RegistryError = ({route}:{route:string}) => {
  return (
    <BaseHtml>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3">
            {" "}
            <span class="text-danger">Opps!</span> Registration failed.
          </p>
          <p class="lead">Appointment has been scheduled</p>
          <a href={`/${route}/schedule`} class="btn btn-primary">
            Go back
          </a>
        </div>
      </div>
    </BaseHtml>
  );
};

export default RegistryError;
