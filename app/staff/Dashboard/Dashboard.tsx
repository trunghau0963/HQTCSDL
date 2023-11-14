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
      <div class="d-flex align-items-center justify-content-center my-5">
        <ToolNavigation NAVIGATIONS={TOOLS} title="Dashboard" />
      </div>
    </StaffPage>
  );
};

export default Dashboard;
