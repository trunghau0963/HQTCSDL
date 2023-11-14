import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
import Navbar from "../../components/navbar";
import { DENTISTNAVIGATIONS } from "../../constant";
const DentistPage = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <div class="d-flex">
        <Navbar
          children={children}
          url={"/dentist"}
          NAVIGATIONS={DENTISTNAVIGATIONS}
        />
        <div class="w-100">{children}</div>
      </div>
    </BaseHtml>
  );
};

export default DentistPage;
