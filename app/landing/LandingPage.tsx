import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";

import Hero from "./Hero";
import Topbar from "./topbar";
import Footer from "./footer";

const LandingPage = ({ children }: elements.Children) => {
  return (
    <BaseHtml>
      <div class="h-full w-full">
        <Topbar />
        <Hero />
        {children}
        <Footer />
      </div>
    </BaseHtml>
  );
};

export default LandingPage;
