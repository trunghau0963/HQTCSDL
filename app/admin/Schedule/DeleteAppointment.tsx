import * as elements from "typed-html";
import AdminPage from "../admin";
import DeleteAppointment from "../../../components/Appointment/delete_appointment";

const DeleteAppointmentPage = () => {
  return (
    <AdminPage>
      <DeleteAppointment/>
    </AdminPage>
  );
};

export default DeleteAppointmentPage;
