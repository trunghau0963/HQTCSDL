import * as elements from "typed-html";

const temp = () => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target=".bd-example-modal-lg"
      >
        Large modal
      </button>

      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">...</div>
        </div>
      </div>

      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target=".bd-example-modal-sm"
      >
        Small modal
      </button>

      <div
        class="modal fade bd-example-modal-sm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm">
          <div class="modal-content">...</div>
        </div>
      </div>
    </div>
  );
};

export default temp;
