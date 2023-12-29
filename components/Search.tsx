import * as elements from "typed-html";

export const SearchFunction = ({
  roleUrl,
  role,
  Table,
}: {
  roleUrl: string;
  role: string;
  Table: () => string;
}) => {
  return (
    <div>
      <div class="row">
        <div class="col-sm-6 col-md-12 my-2 mx-2">
          <form>
            <div class="form-group form-focus">
              <input
                autocomplete="off"
                name="name"
                type="search"
                hx-post={`/${roleUrl}/${role}/search`}
                hx-trigger="input changed delay:100ms, search, load"
                hx-target={`#search-${role}-result`}
                hx-swap="outerHTML"
                class="form-control floating w-100"
                placeholder="Search here..."
              />
              <button type="submit" class="btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-striped custom-table">
              <thead>
                <Table />
              </thead>
              <tbody id={`search-${role}-result`}></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
