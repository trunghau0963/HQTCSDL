import * as elements from "typed-html";
import ToolItems from "./tool-items";

interface ToolNavigationProps {
  NAVIGATIONS(props:string): any[];
  url: string;
  numberOfOption: number;

}

const ToolNavigation = ({ NAVIGATIONS, url, numberOfOption }: ToolNavigationProps) => {
  return (
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
