import * as elements from "typed-html";
import Logo from "../../components/Logo";

const Topbar = () => {
  return (
    <div class="border-b w-full p-4">
      <div class="max-w-5xl mx-auto w-full flex items-center justify-between">
        <Logo />
        <div>
          <a href="/dashboard">
            <button class="gradient-btn">
              <span class="mr-2">Get Started</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
