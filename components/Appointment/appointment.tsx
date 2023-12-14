import * as elements from "typed-html";

const Data = [
  {
    id: 1,
    patientName: "Babs",
    doctorName: "Adamsson",
    date: "9/3/2023",
    time: "8/14/2023",
    phone: "740-737-4460",
  },
  {
    id: 2,
    patientName: "Karissa",
    doctorName: "Macrae",
    date: "9/12/2023",
    time: "11/2/2023",
    phone: "172-438-8401",
  },
  {
    id: 3,
    patientName: "Shari",
    doctorName: "McSkeagan",
    date: "9/14/2023",
    time: "5/23/2023",
    phone: "113-237-1103",
  },
  {
    id: 4,
    patientName: "Tarah",
    doctorName: "Algore",
    date: "6/16/2023",
    time: "12/9/2022",
    phone: "340-374-0388",
  },
  {
    id: 5,
    patientName: "Ferrel",
    doctorName: "Alsina",
    date: "7/9/2023",
    time: "9/11/2023",
    phone: "455-291-6043",
  },
  {
    id: 6,
    patientName: "Malory",
    doctorName: "Blackstone",
    date: "8/1/2023",
    time: "10/6/2023",
    phone: "562-105-1268",
  },
  {
    id: 7,
    patientName: "Brandise",
    doctorName: "Morriarty",
    date: "8/6/2023",
    time: "9/11/2023",
    phone: "777-121-1290",
  },
  {
    id: 8,
    patientName: "Ariel",
    doctorName: "Meddick",
    date: "4/5/2023",
    time: "4/30/2023",
    phone: "199-124-2398",
  },
  {
    id: 9,
    patientName: "Melessa",
    doctorName: "Emmison",
    date: "4/16/2023",
    time: "12/1/2022",
    phone: "891-708-1595",
  },
  {
    id: 10,
    patientName: "Brit",
    doctorName: "Acton",
    date: "3/26/2023",
    time: "10/5/2023",
    phone: "530-741-3585",
  },
];

const Appointment = () => {
  return (
    <div>
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <div class="col-sm-4 col-3">
              <h4 class="page-title">Appointments</h4>
            </div>
            <div class="my-3">
              <a
                href="/admin/schedule/add_appointment"
                class="text-center btn btn-tertiary btn-rounded float-right w-100 py-3 text-white"
              >
                <i class="bi bi-calendar2-plus-fill"></i> Add Appointment
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-striped custom-table">
                  <thead>
                    <tr>
                      <th>Appointment ID</th>
                      <th>Patient Name</th>
                      <th>Doctor Name</th>

                      <th>Appointment Date</th>
                      <th>Appointment Time</th>
                      <th>Patient Phone</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data.map((data) => (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.patientName}</td>
                        <td>{data.doctorName}</td>
                        <td>{data.date}</td>
                        <td>{data.time}</td>
                        <td>{data.phone}</td>

                        <td class="text-right">
                          <div class="dropdown">
                            <button
                              class="btn btn-outline-primary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Action
                            </button>
                            <div
                              class="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a
                                class="dropdown-item"
                                href="/admin/schedule/edit_appointment/"
                              >
                                <i class="bi bi-pencil-square"></i> Edit
                              </a>
                              <a
                                class="dropdown-item"
                                href="/admin/schedule/delete_appointment/"
                              >
                                <i class="bi bi-eraser"></i> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
                        <span class="message-author">Richard Miles </span>
                        <span class="message-time">12:28 AM</span>
                        <div class="clearfix"></div>
                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
                        <span class="message-author"> Tarah Shropshire </span>
                        <span class="message-time">12:28 AM</span>
                        <div class="clearfix"></div>
                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
                        <span class="message-author"> Catherine Manseau </span>
                        <span class="message-time">12:28 AM</span>
                        <div class="clearfix"></div>
                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
                        <span class="message-author"> Domenic Houston </span>
                        <span class="message-time">12:28 AM</span>
                        <div class="clearfix"></div>
                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
                        <span class="message-author"> Buster Wigton </span>
                        <span class="message-time">12:28 AM</span>
                        <div class="clearfix"></div>
                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
                        <span class="message-author"> Rolland Webber </span>
                        <span class="message-time">12:28 AM</span>
                        <div class="clearfix"></div>
                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
                        <span class="message-author"> Claire Mapes </span>
                        <span class="message-time">12:28 AM</span>
                        <div class="clearfix"></div>
                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
                        <span class="message-author">Melita Faucher</span>
                        <span class="message-time">12:28 AM</span>
                        <div class="clearfix"></div>
                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
                        <span class="message-author">Jeffery Lalor</span>
                        <span class="message-time">12:28 AM</span>
                        <div class="clearfix"></div>
                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
                        <span class="message-author">Tarah Shropshire</span>
                        <span class="message-time">12:28 AM</span>
                        <div class="clearfix"></div>
                        <span class="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
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
        <div
          id="delete_appointment"
          class="modal fade delete-modal"
          role="dialog"
        >
          {/* <% for (var i = 0; i < list.length; i++){ %>
                <form action="/appointment/delete_appointment/<%=list[i].id%>" method="POST">
                    <% } %>
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <img src="assets/img/sent.png" alt="" width="50" height="46">
                        <h3>Are you sure want to delete this Appointment?</h3>
                        <div class="m-t-20"> <a href="#" class="btn btn-white" data-dismiss="modal">Close</a>
                            <button type="submit" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </form> */}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
