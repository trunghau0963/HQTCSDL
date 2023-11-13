import * as elements from "typed-html";
const Logo = () => {
  return (
    <div class="flex items-center">
      <span class="fs-5">
        <img src="logo.png" alt="" class="icon-w-lg rounded-circle" />
      </span>
      <span class="ml-2 font-bold text-4xl mx-2"> HTV</span>
    </div>
  );
};

export default Logo;
