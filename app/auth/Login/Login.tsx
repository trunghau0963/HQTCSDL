import * as elements from "typed-html";
import BaseHtml from "../../../layouts/baseHtml";

const Login = () => {
  return (
    <BaseHtml>
      <section class="">
        <div
          class="px-4 py-5 px-md-5 text-center text-lg-start"
          // style="background-color: hsl(0, 0%, 96%)"
        >
          <div class="container">
            <div class="row gx-lg-5 align-items-center">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <h1 class="my-5 display-3 fw-bold ls-tight">
                  The best offer <br />
                  <span class="text-primary">for your teeth</span>
                </h1>
                <p style="color: hsl(217, 10%, 50.8%)">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>

              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="card">
                  <div class="card-body py-5 px-md-5">
                    <form id="login-form" hx-post="/login">
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="phone"
                          class="form-control"
                          name="phone"
                        />
                        <label class="form-label" for="phone">
                          Phone
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          class="form-control"
                          name="password"
                        />
                        <label class="form-label" for="password">
                          Password
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <select class="form-select" id="role" name="role">
                          <option value="admin">Admin</option>
                          <option value="patient">Patient</option>
                          <option value="staff">Staff</option>
                          <option value="dentist">Dentist</option>
                        </select>
                        <label class="form-label" for="role">
                          Role
                        </label>
                      </div>

                      <button
                        type="submit"
                        class="w-100 btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Sign up
                      </button>

                      <hr class="my-4"></hr>
                      <div class="text-center">
                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="bi bi-facebook"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="bi bi-google"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="bi bi-twitter"></i>
                        </button>

                        <button
                          type="button"
                          class="btn btn-link btn-floating mx-1"
                        >
                          <i class="bi bi-github"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseHtml>
  );
};

export default Login;
