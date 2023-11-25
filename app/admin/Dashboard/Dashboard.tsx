import * as elements from "typed-html";
import AdminPage from "../admin";
import ToolNavigation from "../../../components/Dashboard/tools-navigation";
import ToolItems from "../../../components/Dashboard/tool-items";
const TOOLS = (baseUrl: string): any[] => [
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
  {
    title: "Services",
    icon: "/icons/service.svg",
    url: `${baseUrl}/service`,
    color: "btn btn-outline-info",
    slug: "home",
  },
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
      <div
        id="dashboard"
        class="d-flex flex-column align-items-center justify-content-center"
        style="height:30vh"
      >
        <div class="text-center mb-14">
          <h1 class="fontweight-bold text-lg">HTV - Hospital Tooth Velocity</h1>
          <h3 class="text-muted-foreground mt-2">Admin View</h3>
        </div>
      </div>
      <main id="main">
        <ToolNavigation NAVIGATIONS={TOOLS} url="/admin" numberOfOption={4} />
      </main>
    </AdminPage>
  );
};
export default DashBoard;
