import * as elements from "typed-html";
import { Service } from "../../../model/model";
import { AddService } from "../../../components/Service/functionService";
import { SearchFunction } from "../../../components/Search";
import { TableOfService } from "../../../components/Table/functionTable";
type ServiceProps = {
  Data: Service[];
  url: string;
};

const ServiceComponent = ({ Data, url }: ServiceProps) => {
  return (
    <div class="main-wrapper h-100">
      <div class="page-wrapper">
        <div class="content">
          <div class="row">
            <AddService url={url} />
            <SearchFunction roleUrl={url} role="service" Table={TableOfService} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
