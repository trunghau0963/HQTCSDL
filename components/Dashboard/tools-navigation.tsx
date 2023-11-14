import * as elements from "typed-html";
import ToolItems from "./tool-items";

interface ToolNavigationProps {
  NAVIGATIONS(props:string): any[];
  title?: string;
}

const ToolNavigation = ({ NAVIGATIONS, title }: ToolNavigationProps) => {
  return (
    <div class="">
      <div class="text-center mb-14">
        <h1 class="fontweight-bold">HTV - Hospital Tooth Velocity</h1>
        <h3 class="text-muted-foreground text-lg mt-2">{title}</h3>
      </div>
      <div class="text-white">
        {NAVIGATIONS('/patient').map((tool, index) => (
          <ToolItems key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolNavigation;
