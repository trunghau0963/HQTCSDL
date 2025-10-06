import * as elements from "typed-html";
import { drugProps } from "../../../model/model";
import { SearchFunction } from "../../../components/Search";
import { TableOfDrug } from "../../../components/Table/functionTable";
import { AddDrug } from "../../../components/Drug/Drug/functionDrug";
const DrugComponent = ({ drugs, url }: { drugs: drugProps[]; url: string }) => {
  return (
    <div class="main-wrapper h-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <AddDrug url="staff"/>
            <SearchFunction roleUrl="staff" role="drug" Table={TableOfDrug} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugComponent;
