import * as elements from "typed-html";
import BaseHtml from "../../../layouts/baseHtml";

const Login = () => {
  return (
    <BaseHtml>
      <div class="main-wrapper  account-wrapper">
        <div class="d-flex flex-column align-items-center p-5 text-primary">
          <div class="p-4 rounded" style="max-width: 600px; width: 100%;">
            <div class="container shadow rounded">
              <form action="" method="Post" class="form-signin mx-2 my-2">
                <a class="account-logo flex items-center" href="/">
                  <span class="">
                    <img src="/logo.png" class="rounded-circle my-3" alt="" />
                  </span>
                  <span class="ml-2 font-bold text-4xl mx-2"> HTV</span>
                </a>

                <div class="form-group">
                  <label for="email" class="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="form-control rounded"
                    name="email"
                    placeholder="example@example.com"
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
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="rememberMe"
                  />
                  <label class="form-check-label" for="rememberMe">
                    Remember me
                  </label>
                </div>
                <div class="form-group text-center">
                  <button
                    class="btn btn-primary bg-primary rounded-pill"
                    type="submit"
                    onclick=""
                  >
                    Signin
                  </button>
                </div>
              </form>
                <div class="text-center login-link">
                  Create an account <a href="/verify/signup">Signup</a>
                  <br />
                </div>
            </div>
          </div>
        </div>
      </div>
    </BaseHtml>
  );
};

export default Login;
