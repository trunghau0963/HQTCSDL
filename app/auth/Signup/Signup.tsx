import * as elements from "typed-html";
import BaseHtml from "../../../layouts/baseHtml";

const Signup = () => {
  return (
    <BaseHtml>
      <section class="vh-100 bg-image">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style="border-radius: 15px;">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form id="signup-form" hx-post="/signup">
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
                        <a href="#!" class="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <h2>Sign Up</h2>

      <form id="signup-form" hx-post="/signup">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required="" />

        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required="" />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required="" />

        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required="" />

        <label for="address">Address:</label>
        <textarea id="address" name="address" required=""></textarea>

        <button type="submit" hx-target="#signup-form" hx-swap="outerHTML">
          Sign Up
        </button>
      </form> */}
    </BaseHtml>
  );
};
export default Signup;
