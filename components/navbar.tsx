import * as elements from "typed-html";

import BaseHtml from "../layouts/baseHtml";
import Logo from "./Logo";
import { NavbarProps } from "../config/model";
import { ToolItemsProps } from "../config/model";
const Navbar = ({ children, url, NAVIGATIONS }: NavbarProps) => {
  // const currentUrl = window.location.href;
  return (
    <BaseHtml>
      <div class="d-flex">
        <div class="d-flex flex-column p-3 bg-body-tertiary vh-100 w-100 max-w-xs">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <div class="flex items-center">
              <span class="fs-5">
                <img src="logo.png" alt="" class="icon-w-lg rounded-circle" />
              </span>
              <span class="ml-2 font-bold text-4xl mx-2"> HTV</span>
            </div>
          </a>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            {NAVIGATIONS(url).map((nav: ToolItemsProps) => (
              <li class="nav-item mb-2">
                <a
                  href={nav.url}
                  class="nav-link d-flex align-items-center gap-2"
                >
                  <div class="flex items-center py-1 rounded-lg px-5 opacity-50 hover:opacity-100">
                    <div class="flex items-center p-2">
                      <img src={nav.icon} alt="" />
                      {nav.title}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <hr />
          <div class="dropdown">
            <a
              href="#"
              class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                class="rounded-circle me-2 icon-w-sm icon-h-sm"
              />
              <strong>Dank</strong>
            </a>
            <ul class="dropdown-menu text-small shadow">
              <li>
                <a class="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BaseHtml>
  );
};

export default Navbar;
