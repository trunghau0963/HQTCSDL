import * as elements from "typed-html";
import PatientPage from "../patient";
import ToolNavigation from "../../../components/Dashboard/tools-navigation";

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
  {
    title: "Service",
    icon: "/icons/service.svg",
    url: `${baseUrl}/service`,
    color: "btn btn-outline-danger",
    slug: "drug",
  },  
  {
    title: "Dentist",
    icon: "/icons/dentist.svg",
    url: `${baseUrl}/dentist`,
    color: "btn btn-outline-success",
    slug: "dentist",
  },
  {
    title: "Security",
    icon: "/icons/about.svg",
    url: `${baseUrl}/about`,
    color: "btn btn-outline-warning",
    slug: "about",
  },
];

const Dashboard = () => {
  return (
    <PatientPage>
      <div
        id="dashboard"
        class="d-flex align-items-center justify-content-center"
        style="height:30vh"
      >
        <div class="text-center mb-14">
          <h1 class="fontweight-bold text-lg">HTV - Hospital Tooth Velocity</h1>
          <h3 class="text-muted-foreground mt-2">Patient View</h3>
        </div>
      </div>
      <main id="main">
        <ToolNavigation NAVIGATIONS={TOOLS} url="/patient" numberOfOption={4} />
      </main>
    </PatientPage>
  );
};

export default Dashboard;
