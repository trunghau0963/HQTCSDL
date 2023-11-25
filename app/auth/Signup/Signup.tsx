import * as elements from "typed-html";
import BaseHtml from "../../../layouts/baseHtml";

const Signup = () => {
  return (
    <BaseHtml>
      <div class="main-wrapper  account-wrapper">
        <div class="d-flex flex-column align-items-center p-5 text-primary">
          <div class="p-4 rounded" style="max-width: 600px; width: 100%;">
            <div class="container shadow rounded">
              <form action="" method="Post" class="form-signin mx-2 my-2">
                <a class="account-logo flex items-center" href="/">
                  <span class="fs-4">
                    <img src="/logo.png" class="rounded-circle  my-3" alt="" />
                  </span>
                  <span class="ml-2 font-bold text-4xl mx-2"> HTV</span>
                </a>
                <div class="form-group">
                  <label for="user" class="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    class="form-control rounded"
                    name="user"
                    placeholder="Nguyen Van A"
                  />
                </div>
                <div class="form-group">
                  <label for="phone" class="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    class="form-control rounded"
                    name="phone"
                    placeholder="example: 0903170414"
                  />
                </div>
                <div class="form-group">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control rounded"
                    name="password"
                    placeholder="xxxx-xxxx-xxxx-xxxx-xxxx"
                  />
                </div>

                <div class="form-group checkbox">
                  <label>
                    <input type="checkbox" class="form-check-input">
                      {" "}
                      I have read and agree the Terms & Conditions
                    </input>
                  </label>
                </div>
                <div class="form-group text-center">
                  <button
                    class="btn btn-primary bg-primary rounded-pill"
                    type="submit"
                    onclick=""
                  >
                    Signup
                  </button>
                </div>
                <div class="text-center login-link">
                  Already have an account?{" "}
                  <a href="/verify/login">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </BaseHtml>
  );
};

export default Signup;
