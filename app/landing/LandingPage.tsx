import * as elements from "typed-html";
import BaseHtml from "../../layouts/baseHtml";

import Hero from "./Hero";
import Topbar from "./topbar";
import Footer from "./footer";
import Feature from "./Feature";

const LandingPage = () => {
  return (
    <BaseHtml>
      <div class="h-full w-full">
        <Topbar />
        <Hero />
        <Feature/>
        <Footer />
      </div>
    </BaseHtml>
  );
};

export default LandingPage;
