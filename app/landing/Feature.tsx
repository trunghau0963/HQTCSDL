import * as elements from "typed-html";
import ToolItems from "../../components/Dashboard/tool-items";
const TOOLS = (baseUrl: string): any[] => [
  {
    title: "Dashboard",
    icon: "/icons/dashboard.svg",
    url: `${baseUrl}/dashboard`,
    color: "btn btn-outline-warning",
    slug: "dashboard",
  },
  {
    title: "HomePage",
    icon: "/icons/home.svg",
    url: `${baseUrl}/home`,
    color: "btn btn-outline-info",
    slug: "home",
  },
  {
    title: "Schedules",
    icon: "/icons/schedule.svg",
    url: `${baseUrl}/schedule`,
    color: "btn btn-outline-primary",
    slug: "schedule",
  },
  {
    title: "Cre-Orders",
    icon: "/icons/drug.svg",
    url: `${baseUrl}/drug`,
    color: "btn btn-outline-danger",
    slug: "drug",
  },
];
const Feature = () => {
  return (
    <div  id="features" class="relative d-flex align-items-center justify-content-center">
      <div class="text-center mb-14">
        <h1 class="text-muted-foreground text-lg mt-2">Features</h1>
        <div class="d-flex text-white">
          {TOOLS("/patient").map((tool) => (
            <div
              class={`btn ${tool.color} border border-3 flex my-3 rounded mx-2 px-3 h-auto`}
              // style="width:100px; height:100px"
            >
              <a href={tool.url} class="w-full">
                <div class="flex items-center justify-between ">
                  <div class="">
                    <div class="mr-6 rounded-lg p-1 w-16 h-16 relative flex justify-center">
                      <img
                        src={tool.icon}
                        alt=""
                        style="width: 2rem; height: 2rem;"
                      />
                    </div>
                    <span class="mx-2 text-dark">{tool.title}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
