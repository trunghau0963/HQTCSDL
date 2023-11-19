import * as elements from "typed-html";
import { NavbarProps } from "../config/model";
import { ToolItemsProps } from "../config/model";
const Navbar = ({ url, NAVIGATIONS }: NavbarProps) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary position-sticky top-0 z-3">
      <div class="container-fluid">
        <a href="/" class="logo navbar-brand">
          <img src="/img/logo.png" width="35" height="35" alt="" />{" "}
          <span>HTV Clinic</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
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
              <li class="nav-item dropdown d-none d-sm-block">
                <a
                  href="#"
                  class="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i class="bi bi-bell-fill"></i>
                  <span class="badge badge-pill bg-danger float-right">3</span>
                </a>
                <div class="dropdown-menu notifications">
                  <div class="topnav-dropdown-header">
                    <span>Notifications</span>
                  </div>
                  <div class="drop-scroll">
                    <ul class="notification-list">
                      <li class="notification-message">
                        <a href="activities.html">
                          <div class="media">
                            <span class="avatar">
                              <img
                                alt="John Doe"
                                src="/img/user.jpg"
                                class="img-fluid"
                              />
                            </span>
                            <div class="media-body">
                              <p class="noti-details">
                                <span class="noti-title">John Doe</span> added
                                new task{" "}
                                <span class="noti-title">
                                  Patient appointment booking
                                </span>
                              </p>
                              <p class="noti-time">
                                <span class="notification-time">
                                  4 mins ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="notification-message">
                        <a href="activities.html">
                          <div class="media">
                            <span class="avatar">V</span>
                            <div class="media-body">
                              <p class="noti-details">
                                <span class="noti-title">Tarah Shropshire</span>{" "}
                                changed the task name{" "}
                                <span class="noti-title">
                                  Appointment booking with payment gateway
                                </span>
                              </p>
                              <p class="noti-time">
                                <span class="notification-time">
                                  6 mins ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="notification-message">
                        <a href="activities.html">
                          <div class="media">
                            <span class="avatar">L</span>
                            <div class="media-body">
                              <p class="noti-details">
                                <span class="noti-title">Misty Tison</span>{" "}
                                added{" "}
                                <span class="noti-title">Domenic Houston</span>{" "}
                                and <span class="noti-title">Claire Mapes</span>{" "}
                                to project{" "}
                                <span class="noti-title">
                                  Doctor available module
                                </span>
                              </p>
                              <p class="noti-time">
                                <span class="notification-time">
                                  8 mins ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="notification-message">
                        <a href="activities.html">
                          <div class="media">
                            <span class="avatar">G</span>
                            <div class="media-body">
                              <p class="noti-details">
                                <span class="noti-title">Rolland Webber</span>{" "}
                                completed task{" "}
                                <span class="noti-title">
                                  Patient and Doctor video conferencing
                                </span>
                              </p>
                              <p class="noti-time">
                                <span class="notification-time">
                                  12 mins ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li class="notification-message">
                        <a href="activities.html">
                          <div class="media">
                            <span class="avatar">V</span>
                            <div class="media-body">
                              <p class="noti-details">
                                <span class="noti-title">Bernardo Galaviz</span>{" "}
                                added new task{" "}
                                <span class="noti-title">
                                  Private chat module
                                </span>
                              </p>
                              <p class="noti-time">
                                <span class="notification-time">
                                  2 days ago
                                </span>
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="topnav-dropdown-footer">
                    <a href="activities.html">View all Notifications</a>
                  </div>
                </div>
              </li>
              <li class="nav-item dropdown d-none d-sm-block">
                <a
                  // href="javascript:void(0);"
                  id="open_msg_box"
                  class="hasnotifications nav-link"
                >
                  <i class="bi bi-chat-left-dots-fill"></i>
                  <span class="badge badge-pill bg-danger float-right">8</span>
                </a>
              </li>
              <li class="nav-item dropdown has-arrow end-0">
                <a
                  href="#"
                  class="dropdown-toggle nav-link user-link"
                  data-toggle="dropdown"
                >
                  <span class="user-img">
                    <img
                      class="rounded-circle"
                      src="/img/user.jpg"
                      width="24"
                      alt="Admin"
                    />
                    <span class="status online"></span>
                  </span>
                  <span>ROLE</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="/home/profile">
                    My Profile
                  </a>
                  <a class="dropdown-item" href="/home/edit-profile">
                    Edit Profile
                  </a>

                  <a class="dropdown-item" href="/logout">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
