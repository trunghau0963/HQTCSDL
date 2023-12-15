import * as elements from "typed-html";
import StaffPage from "../staff";
import ServiceComponent from "../../../components/Service/service";
import { Service } from "../../../model/model";

const ServicePage = ({ services  }: { services: Service[] }) => {
  return (
    <StaffPage>
      <ServiceComponent Data={services} url='staff' />
    </StaffPage>
  );
};
export default ServicePage;
