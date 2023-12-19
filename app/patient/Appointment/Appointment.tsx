import * as elements from "typed-html";
import PatientPage from "../patient";
import AppointmentList from "../../../components/Appointment/appointment_for_patient";
import { AppointmentDetailProps, AppointmentDetail } from "../../../model/model";

const Appointment = ({
  appointments,
  appointmentsFinished,
}: {
  appointments: AppointmentDetailProps[];
  appointmentsFinished: AppointmentDetail[];
}) => {
  return (
    <PatientPage>
      <AppointmentList
        appointments={appointments}
        appointmentsFinished={appointmentsFinished}
      />
    </PatientPage>
  );
};

export default Appointment;
