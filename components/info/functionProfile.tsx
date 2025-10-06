import * as elements from "typed-html";

type ProfileProps = {
  id?: string;
  name?: string;
  phone?: string;
  dob?: string;
  address?: string;
  role?: string;
};

export const Profile = ({
  id,
  name,
  phone,
  dob,
  address,
  role,
}: ProfileProps) => {
  return (
    <section class="min-vh-100" style="background-color: #f4f5f7;">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-6 mb-4 mb-lg-0">
          <div class="card mb-3" style="border-radius: .5rem;">
            <div class="row g-0">
              <div class="bg-warning col-md-4 gradient-custom text-center text-white d-flex justify-content-center align-items-center flex-col">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar"
                  class="img-fluid my-5"
                  style="width: 80px;"
                />
                <h5>{name?.toUpperCase()}</h5>
                <p>{role?.toUpperCase()}</p>
                <i class="far fa-edit mb-5"></i>
              </div>
              <div class="col-md-8">
                <div class="card-body p-4">
                  <h6>Information</h6>
                  <hr class="mt-0 mb-4" />
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>ID:</h6>
                      <p class="text-muted">{id}</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Phone</h6>
                      <p class="text-muted">{phone}</p>
                    </div>
                  </div>
                  <h6>Projects</h6>
                  <hr class="mt-0 mb-4" />
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Address</h6>
                      <p class="text-muted">{address}</p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Day of birth</h6>
                      <p class="text-muted">{dob}</p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start">
                    <a href="#!">
                      <i class="bi bi-facebook me-3"></i>
                    </a>
                    <a href="#!">
                      <i class="bi bi-twitter  me-3"></i>
                    </a>
                    <a href="#!">
                      <i class="bi bi-instagram "></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const EditProfile = ({
  id,
  name,
  phone,
  dob,
  address,
  role,
}: ProfileProps) => {
  return (
    <section class="min-vh-100" style="background-color: #f4f5f7;">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-6 mb-4 mb-lg-0">
          <div class="card mb-3" style="border-radius: .5rem;">
            <div class="row g-0">
              <div class="bg-warning col-md-4 gradient-custom text-center text-white d-flex justify-content-center align-items-center flex-col">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar"
                  class="img-fluid my-5"
                  style="width: 80px;"
                />
                <h5>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="name"
                    placeholder="Name"
                    value={name?.toUpperCase()}
                    style="background-color: #f4f5f7;"
                  />
                </h5>
                <p>{role?.toUpperCase()}</p>
                <i class="far fa-edit mb-5"></i>
              </div>
              <div class="col-md-8">
                <div class="card-body p-4">
                  <h6>Information</h6>
                  <hr class="mt-0 mb-4" />
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>PassWord</h6>
                      <p class="text-muted">
                        <input
                          type="password"
                          class="form-control w-100"
                          id="pwd"
                          placeholder="---- ----"
                        />
                      </p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Phone</h6>
                      <p class="text-muted">{phone}</p>
                    </div>
                  </div>
                  <h6>More</h6>
                  <hr class="mt-0 mb-4" />
                  <div class="row pt-1">
                    <div class="col-6 mb-3">
                      <h6>Address</h6>
                      <p class="text-muted">
                        <input
                          type="text"
                          class="form-control w-100"
                          id="address"
                          value={address}
                          placeholder="Address"
                        />
                      </p>
                    </div>
                    <div class="col-6 mb-3">
                      <h6>Day of birth</h6>
                      <p class="text-muted">
                        {" "}
                        <input
                          type="date"
                          class="form-control w-100"
                          id="dob"
                          value={dob}
                          placeholder="Day of birth"
                        />
                      </p>
                    </div>
                  </div>
                  <div class="d-flex justify-content-start">
                    <a href="#!">
                      <i class="bi bi-facebook me-3"></i>
                    </a>
                    <a href="#!">
                      <i class="bi bi-twitter  me-3"></i>
                    </a>
                    <a href="#!">
                      <i class="bi bi-instagram "></i>
                    </a>
                    <button
                      class="btn btn-danger mx-3"
                      hx-put={`/${role}/edit-profile`}
                      hx-vars={`{
                          'MA': '${id}', 
                          'HOTEN': document.querySelector('#name').value, 
                          'DIACHI': document.querySelector('#address').value,
                          'NGAYSINH': document.querySelector('#dob').value,
                          'MATKHAU': document.querySelector('#pwd').value
                      }`}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
