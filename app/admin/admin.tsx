import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
import Navbar from "../../components/navbar";
import { NAVIGATIONS } from "../../constant";

const AdminPage = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <div class="d-flex">
        <Navbar children={children} url={"/admin"} NAVIGATIONS={NAVIGATIONS} />
        <div class="w-100">{children}</div>
      </div>
    </BaseHtml>
  );
};

export default AdminPage;
