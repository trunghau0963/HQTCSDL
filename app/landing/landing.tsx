import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";
import Navbar from "../../layouts/navbar";
import { Guset } from "../../constant";
import Footer from "../../components/Footer";

const LandingPage = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <Navbar children={children} url={"/"} NAVIGATIONS={Guset} />
      <div class="w-100 min-vh-100">{children}</div>
      <Footer />
    </BaseHtml>
  );
};

export default LandingPage;
