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

export type AppointmentDetailProps = {
  MANS: string;
  TENNS: string;
  MABN: string;
  TENBN: string;
  NGAYKHAM: Date;
  GIOKHAM: Date;
};

export type Appointment = {
  MABN: string;
  MANS: string;
  NGAYKHAM: Date;
  GIOKHAM: Date;
};

export type Invoice = {
  MACT: string;
  DIENTHOAI: string;
  MABN: string;
  HOTENBENHNHAN: string;
  MANS: string;
  HOTENNHASI: string;
  NGAYKHAM: Date;
  GIOKHAM: Date;
  TONGTIEN: number;
  CHANDOAN: string;
  TRIEUCHUNG: string;
};

export type Schedule = {
  MANS: string;
  HOTEN: string;
  NGAYKHAM: Date;
  GIOKHAM: Date;
};

export type Prescription = {
  MACT: string;
  MALO: string;
  TENTHUOC: string;
  MATHUOC: string;
  SOLUONG: number;
  LIEULUONG: number;
  DONGIA: number;
  THANHTIEN: number;
};

export type Service = {
  MADV: string;
  TENDV: string;
  DONGIA: number;
  DAXOA: boolean;
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
  DAXOA: boolean;
};

export type serviceIndicators = {
  MACT: string;
  MADV: string;
  TENDV: string;
  DONGIA: Number;
  THANHTIEN: number;
};
