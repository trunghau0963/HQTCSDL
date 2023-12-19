import * as elements from "typed-html";
import { Schedule } from "../../../model/model";
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
                class="close btn btn-tertiary icon-h-sm icon-w-sm border-0 rounded"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div id="schedule" class="schedule">
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentistAvailable;
