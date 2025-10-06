import * as elements from "typed-html";
import PatientPage from "../patient";
import ListRole from "../../../components/ListRole";
import { Dentist as DentistProps } from "../../../model/model";

const Dentist = ({dentists}:{dentists:DentistProps[]}) => {
  return (
    <PatientPage>
      <ListRole dentists = {dentists}/>
    </PatientPage>
  );
};

export default Dentist;
