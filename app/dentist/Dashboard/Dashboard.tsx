import * as elements from "typed-html";
import DentistPage from "../dentist";
import ToolNavigation from "../../../components/Dashboard/tools-navigation";
const TOOLS = (baseUrl: string): any[] => [
  {
    title: "Home",
    icon: "/icons/home.svg",
    url: `${baseUrl}/home`,
  },
  {
    title: "Schedule",
    icon: "/icons/schedule.svg",
    url: `${baseUrl}/schedule`,
  },
];
const Dashboard = () => {
  return (
    <DentistPage>
      <div
        id="dashboard"
        class="d-flex align-items-center justify-content-center"
        style="height:30vh"
      >
        <div class="text-center mb-14">
          <h1 class="fontweight-bold text-lg">HTV - Hospital Tooth Velocity</h1>
          <h3 class="text-muted-foreground mt-2">Dentist</h3>
        </div>
      </div>
      <main id="main">
        <ToolNavigation NAVIGATIONS={TOOLS} url="/dentist" numberOfOption={6} />
      </main>
    </DentistPage>
  );
};

export default Dashboard;
