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

export type AppointmentProps = {
  idDentist: string;
  idPatient: string;
  date: Date;
};

export type scheduleOfDentistProps = {
  idDentist: string;
  date: Date;
};

export type invoiceProps = {
  id: string;
  idPatient: string;
  idDentist: string;
  date: string;
  total: number;
  description: string;
  symptom: string;
};

export type serviceProps = {
  id: string;
  name: string;
  price: number;
};

export type drugProps = {
  idConsignment: string;
  idDrug: string;
  name: string;
  chidinh: string;
  quantity: number;
  exp: string;
  price: number;
};

