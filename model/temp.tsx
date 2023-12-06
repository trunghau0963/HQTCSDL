export type DentistProps = {
    id: string;
    name: string;
    phone: string;
    password: string;
    gender: string | null;
    dob?: Date;
    address?: string | null;
    isLocked?: boolean;
  };
  
  export type PatientProps= {
    id: string;
    phone: string;
    password: string;
    gender: string | null;
    name: string;
    dob?: Date;
    address?: string | null;
    isLocked?: boolean;
  };
  
  export type StaffProps = {
    id: string;
    phone: string;
    password: string;
    name: string;
    gender: string | null;
    dob?: Date;
    address?: string | null;
    isLocked?: boolean;
  };
  
  export type AdminProps = {
    id: string;
    phone: string;
    password: string;
    name: string;
    gender: string | null;
    dob?: Date;
    address?: string | null;
  };