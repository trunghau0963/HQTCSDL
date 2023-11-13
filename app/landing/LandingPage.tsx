import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";

import Hero from "./Hero";
import Topbar from "./topbar";
import Footer from "./footer";

const LandingPage = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
    <Topbar/>
      <div class="h-full w-full">
        <Hero />
        {children}
      </div>
      <Footer/>
    </BaseHtml>
  );
};

export default LandingPage;
