import * as elements from "typed-html";
import PatientPage from "../patient";
import Appointment from "../../../components/Appointment/appointment";

const Schedule = () => {
  return (
    <PatientPage>
      <div style="height:100vh">
        <Appointment />
      </div>
    </PatientPage>
  );
};

export default Schedule;
