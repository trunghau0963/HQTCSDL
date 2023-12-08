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
  MATKHAU: string;
  NGAYSINH: Date;
  DIACHI: string;
  DAKHOA: boolean;
};
export type Patient = {
  MABN: string;
  HOTEN: string;
  DIENTHOAI: string;
  MATKHAU: string;
  NGAYSINH: Date;
  DIACHI: string;
  DAKHOA: boolean;
};

export type Staff = {
  MANV: string;
  HOTEN: string;
  DIENTHOAI: string;
  MATKHAU: string;
  NGAYSINH: Date;
  DIACHI: string;
  DAKHOA: boolean;
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

export type Appointment = {
  MABN: string;
  MANS: string;
  NGAYKHAM: Date;
  GIOKHAM: Date;
};

export type Invoice = {
  MACT: string;
  MABN: string;
  MANS: string;
  NGAYKHAM: Date;
  GIOKHAM: Date;
  TONGTIEN: number;
  CHANDOAN: string;
  TRIEUCHUNG: string;
};

export type Schedule= {
  MANS: string;
  NGAYKHAM: Date;
  GIOKHAM: Date;
};

export type Prescription = {
  MACT: string;
  MALO: string;
  MATHUOC: string;
  SOLUONG: number;
  LIEULUONG: string;
  THANHTIEN: number;
};

export type Service = {
  MADV: string;
  TENDV: string;
  DONGIA: number;
};

export type drugProps = {
  MALO: string;
  MATHUOC: string;
  TENTHUOC: string;
  CHIDINH: string;
  SOLUONG: string;
  DONVI: string;
  NGAYHETHAN: Date;
  DONGIA: number;
};

export type serviceIndicators = {
  MACT: string;
  MADV: string;
  THANHTIEN: number;
};
