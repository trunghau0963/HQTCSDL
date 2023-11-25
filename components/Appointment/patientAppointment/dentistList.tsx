import * as elements from "typed-html";
import { DentistData } from "../../../config/hardcode/hardcode";
const DentistAvailable = () => {
  return (
    <div
      class="modal fade appoinment"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content rounded bg-light">
          <div class="modal-header">
            <h5 class="modal-title" id="contactInfoModalLabel">
              <h1 class="text-lg">List of Available Dentist</h1>
            </h5>
            <div class="d-flex align-items-center gap-3">
              <button
                class="close btn btn-warning icon-h-sm icon-w-sm border-0 rounded"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          {DentistData.map((data) => (
            <div class="row w-auto py-3 m-3">
              <img
                class="col-sm-3 col-md-3 p-0 rounded-2 w-auto"
                src={`/img/doctor-thumb-0${data.id}.jpg`}
                alt={`${data.name}`}
              />
              <div class="col-sm-9 col-md-9">
                <div class="d-flex justify-content-between align-items-center">
                  <h1 class="text-4xl">{data.name}</h1>
                  <a href="/patient/schedule/add_appointment"
                    class={`btn btn-primary ${data.isLocked ? `` : `disabled`}`}
                  >
                    <h1
                      class={`text-lg ${
                        data.isLocked ? `text-success` : `text-warning`
                      }`}
                    >
                      {data.isLocked ? "Available" : "Unavailable"}
                    </h1>
                  </a>
                </div>
                <h3 class="text-lg">{data.gender ? data.gender : "Null"}</h3>
                <p class="fw-lighter">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DentistAvailable;
