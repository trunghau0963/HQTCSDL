import * as elements from "typed-html";
import { Schedule } from "../../model/model";

export const temp = ({ schedules }: { schedules: Schedule[] }) => {
  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
      {schedules.map((schedule, idx) => {
        <div class="accordion-item">
          <h2 class="accordion-header" id={`flush-heading${idx}`}>
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${idx}`}
              aria-expanded="false"
              aria-controls={`flush-collapse${idx}`}
            >
              <div class="p-6 my-3 mx-3">
                <div class="d-flex align-items-center my-3">
                  <img
                    src="/icons/date.svg"
                    alt=""
                    style="width: 1.5rem; height: 1.5rem;"
                  />
                  <h4 class="fw-bold ms-4">Date:</h4>
                  <p class="ms-4">${schedule.NGAYKHAM.toDateString()}</p>
                </div>
                <div class="d-flex align-items-center my-3">
                  <img
                    src="/icons/time.svg"
                    alt=""
                    style="width: 1.5rem; height: 1.5rem;"
                  />
                  <h4 class="fw-bold ms-4">Time:</h4>
                  <p class="ms-4">
                    $
                    {schedule.GIOKHAM.toISOString().split("T")[1].split(".")[0]}
                  </p>
                </div>
              </div>
            </button>
          </h2>
          <div
            id={`flush-collapse${idx}`}
            class="accordion-collapse collapse"
            aria-labelledby={`flush-heading${idx}`}
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>;
      })}

      <div class="accordion" id="accordionExample">
        {schedules.map((schedule, idx) => {
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};
