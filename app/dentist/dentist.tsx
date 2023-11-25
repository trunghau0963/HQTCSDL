import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
import Navbar from "../../components/Navbar";
import { DENTISTNAVIGATIONS } from "../../constant";
import Footer from "../../components/Footer";
const DentistPage = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <Navbar
        children={children}
        url={"/dentist"}
        NAVIGATIONS={DENTISTNAVIGATIONS}
      />
      <div class="w-100">{children}</div>
      <Footer/>
    </BaseHtml>
  );
};

export default DentistPage;
