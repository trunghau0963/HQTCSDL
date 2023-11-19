import * as elements from "typed-html";
import StaffPage from "../staff";
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
    title: "Drug",
    icon: "/icons/drug.svg",
    url: `${baseUrl}/drug`,
    color: "btn btn-outline-danger",
    slug: "drug",
  },  
];

const Dashboard = () => {
  return (
    <StaffPage>
      <div
        id="dashboard"
        class="d-flex align-items-center justify-content-center"
        style="height:30vh"
      >
        <div class="text-center mb-14">
          <h1 class="fontweight-bold text-lg">HTV - Hospital Tooth Velocity</h1>
          <h3 class="text-muted-foreground mt-2 text-4xl">Staff View</h3>
        </div>
      </div>
      <main id="main">
        <ToolNavigation NAVIGATIONS={TOOLS} url="/staff" numberOfOption={4} />
      </main>
    </StaffPage>
  );
};

export default Dashboard;
