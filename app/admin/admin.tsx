import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
import Navbar from "../../components/Navbar";
import { ADMINNAVIGATIONS } from "../../constant";
import Footer from "../../components/Footer";

const AdminPage = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <Navbar children={children} url={"/admin"} NAVIGATIONS={ADMINNAVIGATIONS} />
      <div>{children}</div>
      <Footer/>
    </BaseHtml>
  );
};

export default AdminPage;
