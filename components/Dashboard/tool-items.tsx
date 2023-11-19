import * as elements from "typed-html";

type ToolItemsProps = {
  icon: string;
  title: string;
  url: string;
  numberOfOption: number;
};

const ToolItems = ({ icon, title, url, numberOfOption }: ToolItemsProps) => {
  return (
    // <div class={`btn ${color} btn-2 flex my-3 rounded`}>
    //   <a href={url} class="w-full">
    //     <div class="flex items-center justify-between ">
    //       <div class="flex items-center">
    //         <div class="mr-6 rounded-lg p-1 w-16 h-16 relative flex justify-center">
    //           <img src={icon} alt="" style="width: 2rem; height: 2rem;" />
    //         </div>
    //         <span class="mx-2 text-dark">{title}</span>
    //       </div>
    //       <i class="bi bi-arrow-right"></i>
    //     </div>
    //   </a>
    // </div>
    <div class={`col-lg-${numberOfOption} col-md-6 d-flex align-items-stretch my-2`}>
      <a class="icon-box shadow" href={url}>
        <div class="icon">
          <img src={icon} alt="" style="width: 2rem; height: 2rem;" />
        </div>
        <h4>{title}</h4>
        <p>
          Multi-disease prediction, analysis and pathological laboratory
          services{" "}
        </p>
      </a>
    </div>
  );
};

export default ToolItems;
