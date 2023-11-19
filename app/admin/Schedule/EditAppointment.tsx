import * as elements from "typed-html";
import AdminPage from "../admin";
import EditAppointment from "../../../components/Appointment/edit_appointment";

const EditAppointmentPage = () => {
  return (
    <AdminPage>
      <EditAppointment/>
    </AdminPage>
  );
};

export default EditAppointmentPage;
