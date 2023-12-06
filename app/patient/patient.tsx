import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
import Navbar from "../../layouts/navbar";
import { PATIENTNAVIGATIONS } from "../../constant";
import Footer from "../../components/Footer";

const PatientPage = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <Navbar
        children={children}
        url={"/patient"}
        NAVIGATIONS={PATIENTNAVIGATIONS}
      />
      <div class="w-100">{children}</div>
      <Footer/>
    </BaseHtml>
  );
};

export default PatientPage;
