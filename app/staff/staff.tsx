import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
import Navbar from "../../layouts/navbar";
import { NAVIGATIONS } from "../../constant";
import Footer from "../../components/Footer";
const StaffPage = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <Navbar children={children} url={"/staff"} NAVIGATIONS={NAVIGATIONS} />
      <div class="w-100">{children}</div>
      <Footer/>
    </BaseHtml>
  );
};

export default StaffPage;
