import * as elements from "typed-html";
import StaffPage from "../staff";

import { drugProps } from "../../../model/model";
import DrugComponent from "./DrugComponent";

type drugPageProps = {
  drugs: drugProps[];
};

const DrugPage = ({ drugs }: drugPageProps) => {
  return (
    <StaffPage>
      <DrugComponent drugs={drugs} url="staff" />
    </StaffPage>
  );
};

export default DrugPage;
