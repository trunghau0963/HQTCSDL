import * as elements from "typed-html";
import BaseHtml from "../../../layouts/baseHtml";

const Signup = () => {
  return (
    <BaseHtml>
      <div>
        <section class="h-100 h-custom" >
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-8 col-xl-6">
                <div class="card rounded-3">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                    class="w-100"
                    style="border-top-left-radius: .3rem; border-top-right-radius: .3rem;"
                    alt="Sample photo"
                  />
                  <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                      Registration Info
                    </h3>

                    <form id="signup-form" hx-post="/auth/signup">
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          class="form-control form-control-lg"
                          name="name"
                          required=""
                        />
                        <label class="form-label" for="name">
                          Your Name
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          class="form-control form-control-lg"
                          name="password"
                          required=""
                        />
                        <label class="form-label" for="password">
                          Password
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="date"
                          id="dob"
                          class="form-control form-control-lg"
                          name="dob"
                          required=""
                          max={new Date().toISOString().split("T")[0]}
                        />
                        <label class="form-label" for="dob">
                          Date of Birth
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="tel"
                          id="phone"
                          class="form-control form-control-lg"
                          name="phone"
                          required=""
                        />
                        <label class="form-label" for="phone">
                          Phone Number
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <textarea
                          id="address"
                          class="form-control form-control-lg"
                          name="address"
                          required=""
                        ></textarea>
                        <label class="form-label" for="address">
                          Address
                        </label>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="checkbox"
                          name="agree"
                        />
                        <label class="form-check-label" for="checkbox">
                          I agree all statements in{" "}
                          <a href="#!" class="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="submit"
                          hx-target="#signup-form"
                          hx-swap="outerHTML"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="/login" class="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BaseHtml>
  );
};
export default Signup;
