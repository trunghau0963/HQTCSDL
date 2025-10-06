import * as elements from "typed-html";
import {
  Staff,
  Patient,
  Dentist,
  drugProps,
  Service,
  Schedule,
  AppointmentDetail,
  AppointmentDetailProps,
} from "../../model/model";
import { EditDrug, DeleteDrug } from "../Drug/Drug/functionDrug";
import { Account } from "../Admin/functionAdmin";
import { DeleteService, EditService } from "../Service/functionService";
import {
  AddAppointment,
  PostAppointment,
} from "../Dentist/Schedule/functionSchedule";
type User = Patient | Dentist | Staff;

export const SearchResult = ({
  users,
  role,
}: {
  users: User[];
  role: string;
}) => {
  return (
    <tbody id={`search-${role}-result`}>
      {!users || users.length === 0 ? (
        <td>Not found</td>
      ) : (
        users.map((data: User) => <Account data={data} role={role} />)
      )}
    </tbody>
  );
};

export const SearchDrugResult = ({
  drugs,
  role,
  url,
}: {
  drugs: drugProps[];
  role: string;
  url: string;
}) => {
  return (
    <tbody id={`search-${role}-result`}>
      {!drugs || drugs.length === 0 ? (
        <tr>
          <td>Not found</td>
        </tr>
      ) : (
        drugs.map((data: any, idx: number) => (
          <tr>
            <td>{data.MALO}</td>
            <td>{data.MATHUOC}</td>
            <td>{data.TENTHUOC}</td>
            <td>{data.CHIDINH}</td>
            {/* <td>{data.SOLUONG}</td> */}
            <td>
              <div
                id={`button-change-quantity-${data.MATHUOC}`}
                class="d-flex align-items-center"
              >
                {/* <div id={`button-change-quantity-${data.MATHUOC}`}></div> */}
                <button
                  class="btn btn-link text-decoration-none text-dark px-0"
                  hx-get={`/${url}/edit-drug-quantity`}
                  hx-vars={`{'MALO': '${data.MALO}', 'MATHUOC': '${data.MATHUOC}', 'SOLUONG': '${data.SOLUONG}', 'idx': ${idx}} `}
                  hx-target={`#button-change-quantity-${data.MATHUOC}`}
                >
                  <div class="d-flex">
                    <p>{data.SOLUONG}</p>
                    <img
                      src="/icons/warning.svg"
                      class="mx-2"
                      style="width: 15px; height: 15px;"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Click to edit quantity"
                    />
                  </div>
                </button>
              </div>
            </td>
            <td>{data.DONVI}</td>
            <td>{data.NGAYHETHAN.toISOString().split("T")[0]}</td>
            <td>{data.DONGIA}</td>
            <td class="text-right">
              <EditDrug Data={data} url={url} />
              <DeleteDrug Data={data} url={url} />
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export const SearchServiceResult = ({
  services,
  role,
  url,
}: {
  services: Service[];
  role: string;
  url: string;
}) => {
  return (
    <tbody id={`search-${role}-result`}>
      {!services || services.length === 0 ? (
        <tr>
          <td>Not found</td>
        </tr>
      ) : (
        services.map((data: any) => (
          <tr id="service">
            <td>{data.MADV}</td>
            <td>{data.TENDV}</td>
            <td>{data.DONGIA}</td>
            <td class="text-right">
              <EditService Data={data} url={url} />
              <DeleteService Data={data} url={url} />
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export const SearchScheduleResult = ({
  Free,
  Registered,
  RegisteredFinished,
  role,
}: {
  Free: Schedule[];
  Registered: AppointmentDetail[];
  RegisteredFinished: AppointmentDetail[];
  role: string;
}) => {
  let idx = 1;
  console.log("Free: ", Free);
  console.log("registered: ", Registered);
  console.log("registeredFinished", RegisteredFinished);
  return (
    <tbody id={`search-${role}-result`}>
      {!Free || Free.length === 0 ? (
        <tr>
          <td>Not found Done Schedule Free Schedule</td>
        </tr>
      ) : (
        Free.map((data) => (
          <tr>
            <td>
              <img
                width="50"
                height="50"
                src={`/img/user.jpg`}
                onerror="this.onerror=null;this.src='/img/user.jpg';"
                class="ms-2 rounded-circle"
                alt=""
              />{" "}
              <h2></h2>
            </td>
            <td>{idx++}</td>
            <td>{data.MANS}</td>
            <td>{data.HOTEN}</td>
            <td>{data.NGAYKHAM.toLocaleDateString()}</td>
            <td>{data.GIOKHAM.toISOString().split("T")[1].split(".")[0]}</td>
            <td class="text-right">
              <button
                class="btn btn-sm btn-tertiary text-light px-2"
                id={`registered-appointment-${idx}-button`}
              >
                <i class="bi bi-calendar"></i>
                Free Schedule
              </button>
            </td>
          </tr>
        ))
      )}
      {!RegisteredFinished || RegisteredFinished.length === 0 ? (
        <tr>
          <td>Not found Registered Schedule Schedule which Is Done</td>
        </tr>
      ) : (
        RegisteredFinished.map((data) => (
          <tr id="schedule">
            <td>
              <img
                width="50"
                height="50"
                src={`/img/user.jpg`}
                onerror="this.onerror=null;this.src='/img/user.jpg';"
                class="ms-2 rounded-circle"
                alt=""
              />{" "}
              <h2></h2>
            </td>
            <td>{idx++}</td>
            <td>{data.MANS}</td>
            <td>{data.HOTENNHASI}</td>
            <td>{data.NGAYKHAM.toLocaleDateString()}</td>
            <td>{data.GIOKHAM.toISOString().split("T")[1].split(".")[0]}</td>
            <td class="text-right">
              <button
                class={`btn btn-sm btn-success`}
                id={`get-registered-${idx}-button`}
              >
                <span>
                  <i class="bi bi-calendar-check-fill"></i>Success Schedule
                </span>
              </button>
            </td>
          </tr>
        ))
      )}
      {!Registered || Registered.length === 0 ? (
        <tr>
          <td>Not found Registered Schedule</td>
        </tr>
      ) : (
        Registered.map((data) => (
          <tr>
            <td>
              <img
                width="50"
                height="50"
                src={`/img/user.jpg`}
                onerror="this.onerror=null;this.src='/img/user.jpg';"
                class="ms-2 rounded-circle"
                alt=""
              />{" "}
              <h2></h2>
            </td>
            <td>{idx++}</td>
            <td>{data.MANS}</td>
            <td>{data.HOTENNHASI}</td>
            <td>{data.NGAYKHAM.toLocaleDateString()}</td>
            <td>{data.GIOKHAM.toISOString().split("T")[1].split(".")[0]}</td>
            <td class="text-right">
              <button
                class={`btn btn-sm btn-warning`}
                id={`get-registered-${idx}-button`}
              >
                <span>
                  <i class="bi bi-calendar2-plus-fill"></i>
                  Unfinished Schedule
                </span>
              </button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export const SearchScheduleResultOfNhasi = ({
  Free,
  Registered,
  RegisteredFinished,
  role,
}: {
  Free: Schedule[];
  Registered: AppointmentDetail[];
  RegisteredFinished: AppointmentDetail[];
  role: string;
}) => {
  let idx = 1;
  return (
    <tbody id={`search-${role}-result`}>
      {(!Free && !Registered && !RegisteredFinished) ||
      (Free.length === 0 &&
        Registered.length === 0 &&
        RegisteredFinished.length === 0) ? (
        <tr>
          <td>Not found</td>
        </tr>
      ) : !Free || Free.length === 0 ? (
        ""
      ) : (
        Free.map((data) => (
          <tr>
            <td>
              <img
                width="50"
                height="50"
                src={`/img/user.jpg`}
                onerror="this.onerror=null;this.src='/img/user.jpg';"
                class="ms-2 rounded-circle"
                alt=""
              />{" "}
              <h2></h2>
            </td>
            <td>{idx++}</td>
            <td>
              <em>Undefined</em>
            </td>
            <td>
              <em>Undefined</em>
            </td>
            <td>{data.NGAYKHAM.toLocaleDateString()}</td>
            <td>{data.GIOKHAM.toISOString().split("T")[1].split(".")[0]}</td>
            <td class="text-right">
              <AddAppointment
                idDentist={data.MANS}
                nameOfDentist={data.HOTEN}
                date={data.NGAYKHAM}
                time={data.GIOKHAM}
                idx={idx}
              />
            </td>
          </tr>
        ))
      )}
      {!RegisteredFinished || RegisteredFinished.length === 0
        ? ""
        : RegisteredFinished.map((data) => (
            <tr>
              <td>
                <img
                  width="50"
                  height="50"
                  src={`/img/user.jpg`}
                  onerror="this.onerror=null;this.src='/img/user.jpg';"
                  class="ms-2 rounded-circle"
                  alt=""
                />{" "}
                <h2></h2>
              </td>
              <td>{idx++}</td>
              <td>{data.MABN}</td>
              <td>{data.HOTENBENHNHAN}</td>
              <td>{data.NGAYKHAM.toLocaleDateString()}</td>
              <td>{data.GIOKHAM.toISOString().split("T")[1].split(".")[0]}</td>
              <td class="text-right">
                <PostAppointment
                  idDentist={data.MANS}
                  date={data.NGAYKHAM}
                  time={data.GIOKHAM}
                  idx={idx}
                  isDone={true}
                />
              </td>
            </tr>
          ))}
      {!Registered || Registered.length === 0
        ? ""
        : Registered.map((data) => (
            <tr>
              <td>
                <img
                  width="50"
                  height="50"
                  src={`/img/user.jpg`}
                  onerror="this.onerror=null;this.src='/img/user.jpg';"
                  class="ms-2 rounded-circle"
                  alt=""
                />{" "}
                <h2></h2>
              </td>
              <td>{idx++}</td>
              <td>{data.MABN}</td>
              <td>{data.HOTENBENHNHAN}</td>
              <td>{data.NGAYKHAM.toLocaleDateString()}</td>
              <td>{data.GIOKHAM.toISOString().split("T")[1].split(".")[0]}</td>
              <td class="text-right">
                <PostAppointment
                  idDentist={data.MANS}
                  date={data.NGAYKHAM}
                  time={data.GIOKHAM}
                  idx={idx}
                  isDone={false}
                />
              </td>
            </tr>
          ))}
    </tbody>
  );
};
