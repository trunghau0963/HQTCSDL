import * as elements from "typed-html";
import DentistPage from "../dentist";
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
    title: "Patient",
    icon: "/icons/patient.svg",
    url: `${baseUrl}/patient`,
    color: "btn btn-outline-success",
    slug: "patient",
  },
];
const Dashboard = () => {
  return (
    <DentistPage>
      <div class="d-flex align-items-center justify-content-center my-5">
        <ToolNavigation NAVIGATIONS={TOOLS} title="Dashboard" />
      </div>
    </DentistPage>
  );
};

export default Dashboard;
