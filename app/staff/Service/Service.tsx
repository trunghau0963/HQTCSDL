import * as elements from "typed-html";
import StaffPage from "../staff";

import { Service } from "../../../model/model";
import ServiceComponent from "./ServiceComponent";

const ServicePage = ({ services  }: { services: Service[] }) => {
  return (
    <StaffPage>
      <ServiceComponent Data={services} url='staff' />
    </StaffPage>
  );
};
export default ServicePage;
