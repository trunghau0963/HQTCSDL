import * as elements from "typed-html";
import DentistPage from "../dentist";
import ScheduleComponent from "../../../components/Dentist/Schedule/ScheduleComponent";
import { Schedule, AppointmentDetail } from "../../../model/model";

const SchedulePage = ({
  Free,
  Registered,
  RegisteredFinished,
  idDentist,
}: {
  Free: Schedule[];
  Registered: AppointmentDetail[];
  RegisteredFinished: AppointmentDetail[];
  idDentist: string;
}) => {
  // console.log(idDentist);
  return (
    <DentistPage>
      <ScheduleComponent
        Free={Free}
        Registered={Registered}
        RegisteredFinished={RegisteredFinished}
        idDentist={idDentist}
      />
    </DentistPage>
  );
};

export default SchedulePage;
