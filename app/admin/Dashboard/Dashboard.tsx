import * as elements from "typed-html";
import AdminPage from "../admin";
import ToolNavigation from "../../../components/Dashboard/tools-navigation";
import ToolItems from "../../../components/Dashboard/tool-items";
const TOOLS = (baseUrl: string): any[] => [
  {
    title: "Home",
    icon: "/icons/home.svg",
    url: `${baseUrl}/home`,
    color: "btn btn-outline-info",
    slug: "home",
  },
  {
    title: "Schedule",
    icon: "/icons/schedule.svg",
    url: `${baseUrl}/schedule`,
    color: "btn btn-outline-primary",
    slug: "schedule",
  },
  {
    title: "Orders",
    icon: "/icons/drug.svg",
    url: `${baseUrl}/drug`,
    color: "btn btn-outline-danger",
    slug: "drug",
  },
];

const ROLES = (baseUrl: string): any[] => [
  {
    title: "Dentist",
    icon: "/icons/dentist.svg",
    url: `${baseUrl}/dentist`,
    color: "btn btn-outline-info",
    slug: "dentist",
  },
  {
    title: "Patient",
    icon: "/icons/patient.svg",
    url: `${baseUrl}/patient`,
    color: "btn btn-outline-primary",
    slug: "patient",
  },
  {
    title: "Staff",
    icon: "/icons/staff.svg",
    url: `${baseUrl}/staff`,
    color: "btn btn-outline-danger",
    slug: "staff",
  },
];

const DashBoard = ({ children }: elements.Children) => {
  return (
    <AdminPage>
      <div class="d-flex align-items-center justify-content-center my-4">
        <ToolNavigation NAVIGATIONS={TOOLS} title="Dashboard" />
      </div>
      <div class="d-flex align-items-center justify-content-center">
        <div class="text-center mb-14">
          <h1 class="text-muted-foreground text-lg mt-2">ROLES</h1>
          <div class="d-flex text-white">
            {ROLES("/admin").map((tool, index) => (
              <div class={`btn ${tool.color} border border-3 flex my-3 rounded mx-3`}>
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
                    {/* <i class="bi bi-arrow-right"></i> */}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        {children}
      </div>
    </AdminPage>
  );
};

export default DashBoard;
