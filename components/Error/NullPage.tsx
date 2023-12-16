import * as elements from "typed-html";
import StaffPage from "../../app/staff/staff";

const NullPage = ({ title }: { title: string }) => {
  return (
    <StaffPage>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3">
            {" "}
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">{`The ${title} you're looking for doesn't exist.`}</p>
          <a href="/staff/invoice" class="btn btn-primary">
            Previous
          </a>
        </div>
      </div>
    </StaffPage>
  );
};

export default NullPage;
