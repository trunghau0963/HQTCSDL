import * as elements from "typed-html";
import ToolItems from "./tool-items";

interface ToolNavigationProps {
  NAVIGATIONS(props:string): any[];
  url: string;
  numberOfOption: number;

}

const ToolNavigation = ({ NAVIGATIONS, url, numberOfOption }: ToolNavigationProps) => {
  return (
    // <div class="">
    //   <div class="text-center mb-14">
    //     <h1 class="fontweight-bold text-lg">HTV - Hospital Tooth Velocity</h1>
    //     <h3 class="text-muted-foreground mt-2">{title}</h3>
    //   </div>
    //   <div class="text-white">
    //     {NAVIGATIONS(url).map((tool, index) => (
    //       <ToolItems key={index} {...tool} />
    //     ))}
    //   </div>
    // </div>
    <section id="services" class="services">
    <div class="container">
      <div class="row">
      {NAVIGATIONS(url).map((tool, index) => (
          <ToolItems key={index} {...tool} numberOfOption={numberOfOption} />
        ))}

      </div>
    </div>
  </section>
  );
};

export default ToolNavigation;
