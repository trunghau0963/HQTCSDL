import * as elements from "typed-html";
import PatientPage from "../patient";
import Calendar from "../../../components/calendar";
import DentistAvailable from "../../../components/dentistList";
import FormContact from "../../../components/Appointment/patientAppointment/addAppoinment";
import { Schedule, drugProps } from "../../../model/model";

const Schedule = ({role}:{role:string}) => {
  // const dates = Array.from({ length: 31 }, (_, index) => index + 1);
  // const storage: any[][] = new Array(5).fill(null).map(() => new Array(7).from({ length: 31 }, (_, index) => index + 1).fill(null));
  return (
    <PatientPage>
      <div
        id="dashboard"
        class="d-flex align-items-center justify-content-center"
        style="height:30vh"
      >
        <div class="text-center mb-14">
          <h1 class="fontweight-bold text-lg">
            Please choose your appointment
          </h1>
          <h3 class="text-muted-foreground mt-2">Patient View</h3>
        </div>
      </div>
      <main class="d-flex align-items-center justify-content-center min-vh-100 p-5">
        <Calendar role={role}/>
        <DentistAvailable/>
      </main>
    </PatientPage>
  );
};

export default Schedule;
