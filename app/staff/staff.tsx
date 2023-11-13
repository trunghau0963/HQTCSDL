import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
import Navbar from "../../components/navbar";
import { NAVIGATIONS } from "../../constant";


const StaffPage = ({children}: elements.Children) => {
  return (
    <BaseHtml>
      <div class="d-flex">
        <Navbar children={children} url={'/staff'} NAVIGATIONS={NAVIGATIONS}/>
        {children}
      </div>
    </BaseHtml>
  );
};

export default StaffPage;
