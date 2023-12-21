import * as elements from "typed-html";
import PatientPage from "../patient";
import { Appointment as AppointmentList } from "../../../components/Appointment/functionAppointment";
import {
  AppointmentDetailProps,
  AppointmentDetail,
} from "../../../model/model";

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
