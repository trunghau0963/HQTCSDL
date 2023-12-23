import * as elements from "typed-html";
import { NavbarProps } from "../model/model";
import { ToolItemsProps } from "../model/model";
const Navbar = ({ url, NAVIGATIONS }: NavbarProps) => {
  const role: boolean =
    url === "/patient" ||
    url === "/dentist" ||
    url === "/staff" ||
    url === "/admin"
      ? true
      : false;
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary position-fixed w-100 top-0 z-3">
      <div class="container-fluid">
        <a href="/" class="logo navbar-brand">
          <img src="/img/logo.png" width="45" height="45" alt="" />{" "}
          <span>HTV Clinic</span>
        </a>
        <div
          class="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <ul class="nav nav-pills mb-auto">
              {NAVIGATIONS(url).map((nav: ToolItemsProps) => (
                <li class="nav-item mb-2">
                  <a
                    href={nav.url}
                    class="nav-link gap-2 btn btn-link"
                    // aria-current="page"
                  >
                    <div class="mx-3">{nav.title}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div class="btn-group" role="group">
            {role ? (
              <button class="btn btn-link btn-sm text-decoration-none">
                Profile
              </button>
            ) : (
              ""
            )}
            {role ? (
              <button class="btn btn-link btn-sm text-decoration-none">
                Edit
              </button>
            ) : (
              ""
            )}

            {role ? (
              <button
                class="btn btn-link btn-sm text-decoration-none"
                hx-post="/auth/logout"
                hx-trigger="click"
              >
                LogOut
              </button>
            ) : (
              <a
                href="/auth/login"
                class="btn btn-link btn-sm text-decoration-none"
              >
                LogIn
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;