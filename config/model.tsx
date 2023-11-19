import * as elements from "typed-html";
export interface ToolItemsProps {
  icon: string;
  title: string;
  url: string;
  color?: string;
  slug: "home" | "dashboard" | "schedule";
}
//????????????????
//???????????

// obj co type childen nen extends

export interface NavbarProps extends elements.Children {
  url: string;
  NAVIGATIONS(props: string): any[];
}

export type DentistProps = {
  id: string;
  name: string;
  phone: string;
  password: string;
  gender: string | null;
  address: string | null;
  isLocked: boolean;
};

export type PatientProps = {
  id: string;
  phone: string;
  password: string;
  gender: string | null;
  name: string;
  dob: string;
  address: string;
  isLocked: boolean;
};

export type StaffProps = {
  id: string;
  phone: string;
  password: string;
  name: string;
  gender: string | null;
  address: string | null;
  isLocked: boolean;
};

export type AdminProps = {
  id: string;
  phone: string;
  password: string;
  name: string;
  gender: string | null;
  address: string | null;
};

export type Appointment = {
  idDentist: string;
  idPatient: string;
  date: Date;
};

export type scheduleOfDentist = {
  idDentist: string;
  date: Date;
};

export type invoice = {
  id: string;
  idPatient: string;
  idDentist: string;
  date: Date;
  total: number;
  decription: string;
  symptom: string;
};

export type service = {
  id: string;
  name: string;
  price: number;
};

// export type drug = {

// }
