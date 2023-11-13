import * as elements from "typed-html";
import StaffPage from "../staff";

const Schedule = ({children} : elements.Children) => {
  return (
    <StaffPage>
      <div>Schedule</div>
      {children}
    </StaffPage>
  );
};

export default Schedule;
