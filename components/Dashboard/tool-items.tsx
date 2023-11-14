import * as elements from "typed-html";
import { cva } from "class-variance-authority";
import { ToolItemsProps } from "../../config/model";

const ToolItems = ({ icon, title, url, color, slug }: ToolItemsProps) => {
  return (
    <div class={`btn ${color} btn-2 flex my-3 rounded`}>
      <a href={url} class="w-full">
        <div class="flex items-center justify-between ">
          <div class="flex items-center">
            <div class="mr-6 rounded-lg p-1 w-16 h-16 relative flex justify-center">
              <img src={icon} alt="" style="width: 2rem; height: 2rem;" />
            </div>
            <span class="mx-2 text-dark">{title}</span>
          </div>
          <i class="bi bi-arrow-right"></i>
        </div>
      </a>
    </div>
  );
};

export default ToolItems;
