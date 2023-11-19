import * as elements from "typed-html";
import { StaffProps } from "../../config/model";

interface DeleteStaffProps {
  Data: StaffProps;
}
const DeleteStaff = ({ Data }: DeleteStaffProps) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-link text-decoration-none"
        data-toggle="modal"
        data-target=".delete-Staff"
      >
        <i class="bi bi-eraser"></i>
        Delete
      </button>

      <div
        class="modal fade delete-Staff"
        tabindex="1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="main-wrapper">
              <div class="page-wrapper">
                <div class="content">
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <h4 class="page-title">Delete Doctor</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                      <form method="post">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label>
                                Name <span class="text-danger">*</span>
                              </label>
                              <input
                                class="form-control"
                                type="text"
                                name="first_name"
                                value={Data.name}
                              />
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label>Phone</label>
                              <input
                                class="form-control"
                                type="text"
                                name="last_name"
                                value={Data.phone}
                              />
                            </div>
                          </div>
                          <div class="col-sm-6"></div>
                          <div class="col-sm-6">
                            <div class="form-group gender-select">
                              <label class="gen-label">Gender:</label>
                              <div class="form-check-inline">
                                <label class="form-check-label">
                                  <input
                                    type="radio"
                                    name="gender"
                                    class="form-check-input"
                                    value="male"
                                  />
                                  Male
                                </label>
                              </div>
                              <div class="form-check-inline">
                                <label class="form-check-label">
                                  <input
                                    type="radio"
                                    name="gender"
                                    class="form-check-input"
                                    value="female"
                                  />
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12">
                            <div class="row">
                              <div class="col-sm-12">
                                <div class="form-group">
                                  <label>Address</label>
                                  <input
                                    type="text"
                                    class="form-control "
                                    name="address"
                                    value={Data.address ? Data.address : "Null"}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label>
                                Password <span class="text-danger">*</span>
                              </label>
                              <input
                                class="form-control"
                                type="text"
                                name="phone"
                                value={Data.password}
                              />
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label>Avatar</label>
                              <div class="profile-upload">
                                <div class="upload-img">
                                  <img alt="" src="/img/user.jpg" />
                                </div>
                                <div class="upload-input">
                                  <input
                                    type="file"
                                    class="form-control"
                                    name="image"
                                    value="<%= list[i].image %>"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label>Short Biography</label>
                          {/* <textarea class="form-control" rows="3" cols="30" name="biography"></textarea> */}
                        </div>
                        <div class="m-t-20 text-center">
                          <button class="btn btn-primary submit-btn">
                            Delete Doctor
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="notification-box">
                  <div class="msg-sidebar notifications msg-noti">
                    <div class="topnav-dropdown-header">
                      <span>Messages</span>
                    </div>
                    <div class="drop-scroll msg-list-scroll" id="msg_list">
                      <ul class="list-box">
                        <li>
                          <a href="chat.html">
                            <div class="list-item">
                              <div class="list-left">
                                <span class="avatar">R</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">
                                  Richard Miles{" "}
                                </span>
                                <span class="message-time">12:28 AM</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <div class="list-item new-message">
                              <div class="list-left">
                                <span class="avatar">J</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">John Doe</span>
                                <span class="message-time">1 Aug</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <div class="list-item">
                              <div class="list-left">
                                <span class="avatar">T</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">
                                  {" "}
                                  Tarah Shropshire{" "}
                                </span>
                                <span class="message-time">12:28 AM</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <div class="list-item">
                              <div class="list-left">
                                <span class="avatar">M</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">Mike Litorus</span>
                                <span class="message-time">12:28 AM</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <div class="list-item">
                              <div class="list-left">
                                <span class="avatar">C</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">
                                  {" "}
                                  Catherine Manseau{" "}
                                </span>
                                <span class="message-time">12:28 AM</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <div class="list-item">
                              <div class="list-left">
                                <span class="avatar">D</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">
                                  {" "}
                                  Domenic Houston{" "}
                                </span>
                                <span class="message-time">12:28 AM</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <div class="list-item">
                              <div class="list-left">
                                <span class="avatar">B</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">
                                  {" "}
                                  Buster Wigton{" "}
                                </span>
                                <span class="message-time">12:28 AM</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <div class="list-item">
                              <div class="list-left">
                                <span class="avatar">R</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">
                                  {" "}
                                  Rolland Webber{" "}
                                </span>
                                <span class="message-time">12:28 AM</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <div class="list-item">
                              <div class="list-left">
                                <span class="avatar">C</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">
                                  {" "}
                                  Claire Mapes{" "}
                                </span>
                                <span class="message-time">12:28 AM</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <div class="list-item">
                              <div class="list-left">
                                <span class="avatar">M</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">
                                  Melita Faucher
                                </span>
                                <span class="message-time">12:28 AM</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <div class="list-item">
                              <div class="list-left">
                                <span class="avatar">J</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">
                                  Jeffery Lalor
                                </span>
                                <span class="message-time">12:28 AM</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <div class="list-item">
                              <div class="list-left">
                                <span class="avatar">L</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">Loren Gatlin</span>
                                <span class="message-time">12:28 AM</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="chat.html">
                            <div class="list-item">
                              <div class="list-left">
                                <span class="avatar">T</span>
                              </div>
                              <div class="list-body">
                                <span class="message-author">
                                  Tarah Shropshire
                                </span>
                                <span class="message-time">12:28 AM</span>
                                <div class="clearfix"></div>
                                <span class="message-content">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="topnav-dropdown-footer">
                      <a href="chat.html">See all messages</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteStaff;
