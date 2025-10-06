import * as elements from "typed-html";
import AdminPage from "../admin";
import ServiceComponent from "../../../components/Service/service";
import { Service } from "../../../model/model";

const ServicePage = ({ services }: { services: Service[] }) => {
  return (
    <AdminPage>
      <ServiceComponent Data={services} url="admin" />
    </AdminPage>
  );
};

export default ServicePage;
