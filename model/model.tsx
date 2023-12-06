import * as elements from "typed-html";
import { Role } from "../config/config";
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

export type User = {
  id: string;
  HOTEN: string;
  DIENTHOAI: string;
  MATKHAU?: string;
  NGAYSINH?: Date;
  DIACHI?: string;
  DAKHOA?: boolean;
  role: Role;
};

export type Dentist = {
  MANS: string;
  HOTEN: string;
  DIENTHOAI: string;
  MATKHAU?: string;
  NGAYSINH?: Date;
  DIACHI?: string;
  DAKHOA?: boolean;
};
export type Patient = {
  MABN: string;
  HOTEN: string;
  DIENTHOAI: string;
  MATKHAU?: string;
  NGAYSINH?: Date;
  DIACHI?: string;
  DAKHOA?: boolean;
};

export type Staff = {
  MANV: string;
  HOTEN: string;
  DIENTHOAI: string;
  MATKHAU?: string;
  NGAYSINH?: Date;
  DIACHI?: string;
  DAKHOA?: boolean;
};

export type Admin = {
  MAQT: string;
  HOTEN: string;
  DIENTHOAI: string;
  MATKHAU?: string;
  NGAYSINH?: Date;
  DIACHI?: string;
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
  drugIndicate: string;
  quantity: string;
  exp: string;
  price: number;
};
