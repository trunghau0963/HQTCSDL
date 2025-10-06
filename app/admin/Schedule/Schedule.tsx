import * as elements from "typed-html";
import AdminPage from "../admin";
import { AllScheduleComponent } from "../../../components/Dentist/Schedule/ScheduleComponent";
import { Schedule, AppointmentDetail, AppointmentDetailProps } from "../../../model/model";

const SchedulePage = ({
  Free,
  Registered,
  RegisteredFinished,
}: {
  Free: Schedule[];
  Registered: AppointmentDetail[];
  RegisteredFinished: AppointmentDetailProps[];
}) => {
  return (
    <AdminPage>
      <AllScheduleComponent
        Free={Free}
        Registered={Registered}
        RegisteredFinished={RegisteredFinished}
      />
    </AdminPage>
  );
};

export default SchedulePage;
