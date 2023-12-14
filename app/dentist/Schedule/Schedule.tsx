import * as elements from "typed-html";
import DentistPage from "../dentist";
import ScheduleComponent from "../../../components/Dentist/Schedule/ScheduleComponent";
import { Schedule } from "../../../model/model";

const SchedulePage = ({
  Free,
  Registered,
}: {
  Free: Schedule[];
  Registered: Schedule[];
}) => {
  return (
    <DentistPage>
      <ScheduleComponent Free={Free} Registered={Registered} />
    </DentistPage>
  );
};

export default SchedulePage;
