import * as elements from "typed-html";
import DentistPage from "../dentist";
import ScheduleComponent from "../../../components/Dentist/Schedule/ScheduleComponent";
import { Schedule } from "../../../model/model";

const SchedulePage = ({
  Free,
  Registered,
  idDentist,
}: {
  Free: Schedule[];
  Registered: Schedule[];
  idDentist: string;
}) => {
  // console.log(idDentist);
  return (
    <DentistPage>
      <ScheduleComponent
        Free={Free}
        Registered={Registered}
        idDentist={idDentist}
      />
    </DentistPage>
  );
};

export default SchedulePage;
