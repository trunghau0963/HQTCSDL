import * as elements from "typed-html";
import StaffPage from "../staff";
import DrugComponent from "../../../components/Drug/Drug/drug";
import { drugProps } from "../../../model/model";

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
