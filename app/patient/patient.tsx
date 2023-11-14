import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
import Navbar from "../../components/navbar";
import { PATIENTNAVIGATIONS } from "../../constant";

const PatientPage = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <div class="d-flex">
        <Navbar
          children={children}
          url={"/patient"}
          NAVIGATIONS={PATIENTNAVIGATIONS}
        />
        <div class="w-100">{children}</div>
      </div>
    </BaseHtml>
  );
};

export default PatientPage;
