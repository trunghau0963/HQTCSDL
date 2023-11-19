import * as elements from "typed-html";
import AdminPage from "../admin";
import AddAppointment from "../../../components/Appointment/add_appointment";

const AddAppointmentPage = () => {
  return (
    <AdminPage>
      <AddAppointment/>
    </AdminPage>
  );
};

export default AddAppointmentPage;
