import * as elements from "typed-html";
import Calendar from "../../../components/Appointment/patientAppointment/calendar";
import DentistAvailable from "../../../components/Appointment/patientAppointment/dentistList";
import { DentistData } from "../../../config/hardcode/hardcode";
import FormContact from "../../../components/Appointment/patientAppointment/addAppoinment";
import { Schedule, drugProps } from "../../../model/model";
import StaffPage from "../staff";

const Schedule = ({role}:{role:string}) => {
  return (
    <StaffPage>
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
    </StaffPage>
  );
};

export default Schedule;
