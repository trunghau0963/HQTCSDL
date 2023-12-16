import * as elements from "typed-html";

type ToolItemsProps = {
  icon: string;
  title: string;
  url: string;
  numberOfOption: number;
};

const ToolItems = ({ icon, title, url, numberOfOption }: ToolItemsProps) => {
  return (
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
