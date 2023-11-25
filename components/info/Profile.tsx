import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
const Profile = () => {
  return (
    <BaseHtml>
      <div class="flex items-center justify-center h-screen m-5">
        <div class="rounded-lg shadow-lg p-5">
          <div class="h-24 bg-blue-600 rounded-t-lg"></div>
          <img
            src="/img/user.jpg"
            height="100"
            width="100"
            class="rounded-full -mt-12 border-4 border-white mx-auto"
            alt="User avatar"
            style="aspect-ratio: 100 / 100; object-fit: cover;"
          />
          <div class="text-center mt-2">
            <h2 class="text-lg font-semibold">John Doe</h2>
            <p class="text-gray-500">Software Engineer</p>
          </div>
          <div class="flex justify-around my-4">
            <div class="text-center">
              <h3 class="font-semibold text-lg">500</h3>
              <p class="text-gray-500">Followers</p>
            </div>
            <div class="text-center">
              <h3 class="font-semibold text-lg">300</h3>
              <p class="text-gray-500">Following</p>
            </div>
          </div>
          <div class="row">
            <form action="" method="post">
              <div class="form-group">
                <label for="">Username</label>
                <input
                  class="form-control"
                  type="text"
                  name="username"
                />
              </div>
              <div class="form-group">
                <label for="">Email</label>
                <input
                  class="form-control"
                  type="email"
                  name="email"
                />
              </div>

              <div class="form-group">
                <label for="">password</label>
                <input class="form-control" type="text" name="password" />
              </div>

              <div class="form-group">
                <label for="">New Password</label>
                <input class="form-control" type="text" name="new_password" />
              </div>

              <button class="btn btn-primary btn-rounded">Edit Profile</button>
            </form>
          </div>
          <div class="px-6 py-4">
            <button class="btn btn-danger">
              Follow
            </button>
          </div>
        </div>
      </div>
    </BaseHtml>
  );
};

export default Profile;
