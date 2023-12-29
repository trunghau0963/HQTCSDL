import * as elements from "typed-html";
import { Staff, Patient, Dentist, drugProps, Service } from "../../model/model";
import { EditDrug, DeleteDrug } from "../Drug/Drug/functionDrug";
import { Account } from "../Admin/functionAdmin";
import { DeleteService, EditService } from "../Service/functionService";
type User = Patient | Dentist | Staff;

export const SearchResult = ({
  users,
  role,
}: {
  users: User[];
  role: string;
}) => {
  return (
    <tbody id={`search-${role}-result`}>
      {!users || users.length === 0 ? (
        <td>Not found</td>
      ) : (
        users.map((data: User) => <Account data={data} role={role} />)
      )}
    </tbody>
  );
};

export const SearchDrugResult = ({
  drugs,
  role,
  url,
}: {
  drugs: drugProps[];
  role: string;
  url: string;
}) => {
  return (
    <tbody id={`search-${role}-result`}>
      {!drugs || drugs.length === 0 ? (
        <tr>
          <td>Not found</td>
        </tr>
      ) : (
        drugs.map((data: any) => (
          <tr>
            <td>{data.MALO}</td>
            <td>{data.MATHUOC}</td>
            <td>{data.TENTHUOC}</td>
            <td>{data.CHIDINH}</td>
            <td>{data.SOLUONG}</td>
            <td>{data.DONVI}</td>
            <td>{data.NGAYHETHAN.toISOString().split("T")[0]}</td>
            <td>{data.DONGIA}</td>
            <td class="text-right">
              <EditDrug Data={data} url={url} />
              <DeleteDrug Data={data} url={url} />
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export const SearchServiceResult = ({
  services,
  role,
  url,
}: {
  services: Service[];
  role: string;
  url: string;
}) => {
  return (
    <tbody id={`search-${role}-result`}>
      {!services || services.length === 0 ? (
        <tr>
          <td>Not found</td>
        </tr>
      ) : (
        services.map((data: any) => (
          <tr id="service">
            <td>{data.MADV}</td>
            <td>{data.TENDV}</td>
            <td>{data.DONGIA}</td>
            <td class="text-right">
              <EditService Data={data} url={url} />
              <DeleteService Data={data} url={url} />
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};
