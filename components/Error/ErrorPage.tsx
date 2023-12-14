import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
const Error = () => {
  return (
    <BaseHtml>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3">
            {" "}
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">The page you’re looking for doesn’t exist.</p>
          <a href="/" class="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </BaseHtml>
  );
};

export default Error;
