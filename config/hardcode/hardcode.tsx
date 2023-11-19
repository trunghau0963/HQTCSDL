import * as elements from "typed-html";
import { DentistProps, PatientProps, StaffProps } from "../model";
export const DentistData: DentistProps[] = [
  {
    id: "1",
    name: "Dr. Smith",
    phone: "123-456-7890",
    password: "password123",
    gender: "Male",
    address: "123 Main St, City",
    isLocked: false,
  },
  {
    id: "2",
    name: "Dr. Johnson",
    phone: "987-654-3210",
    password: "securePass",
    gender: "Female",
    address: "456 Oak St, Town",
    isLocked: false,
  },
  {
    id: "3",
    name: "Dr. Davis",
    phone: "555-123-4567",
    password: "letMeIn",
    gender: "Male",
    address: "789 Pine St, Village",
    isLocked: true,
  },
  {
    id: "4",
    name: "Dr. Miller",
    phone: "333-999-8888",
    password: "password456",
    gender: "Female",
    address: "987 Elm St, City",
    isLocked: false,
  },
  {
    id: "5",
    name: "Dr. Wilson",
    phone: "777-222-1111",
    password: "access123",
    gender: null,
    address: null,
    isLocked: true,
  },
  {
    id: "6",
    name: "Dr. Brown",
    phone: "111-444-7777",
    password: "brownPass",
    gender: "Male",
    address: "543 Birch St, Town",
    isLocked: false,
  },
  {
    id: "7",
    name: "Dr. Lee",
    phone: "222-333-4444",
    password: "leePass",
    gender: null,
    address: "654 Maple St, Village",
    isLocked: true,
  },
  {
    id: "8",
    name: "Dr. Taylor",
    phone: "888-777-6666",
    password: "taylorPass",
    gender: "Female",
    address: "876 Pine St, City",
    isLocked: false,
  },
  {
    id: "9",
    name: "Dr. Moore",
    phone: "444-555-6666",
    password: "moorePass",
    gender: "Male",
    address: "765 Oak St, Town",
    isLocked: false,
  },
];

export const StaffData: StaffProps[] = [
  {
    id: "1",
    phone: "555-1234",
    password: "pass123",
    name: "John Doe",
    gender: "Male",
    address: "123 Main St",
    isLocked: false,
  },
  {
    id: "2",
    phone: "555-5678",
    password: "pass456",
    name: "Jane Smith",
    gender: "Female",
    address: "456 Oak Ave",
    isLocked: true,
  },
  {
    id: "3",
    phone: "555-9876",
    password: "pass789",
    name: "Bob Johnson",
    gender: "Male",
    address: "789 Pine Ln",
    isLocked: false,
  },
  {
    id: "4",
    phone: "555-4321",
    password: "passabc",
    name: "Alice Brown",
    gender: "Female",
    address: "321 Cedar Dr",
    isLocked: true,
  },
  {
    id: "5",
    phone: "555-8765",
    password: "passdef",
    name: "Charlie Wilson",
    gender: "Male",
    address: "654 Birch Rd",
    isLocked: false,
  },
];

export const PatientData: PatientProps[] = [
  {
    id: "1",
    phone: "555-1234",
    password: "pass123",
    gender: "Male",
    name: "John Doe",
    dob: "1990-05-15",
    address: "123 Main St, Cityville",
    isLocked: false,
  },
  {
    id: "2",
    phone: "555-5678",
    password: "securePass",
    gender: "Female",
    name: "Jane Smith",
    dob: "1985-08-22",
    address: "456 Oak Ave, Townsville",
    isLocked: true,
  },
  {
    id: "3",
    phone: "555-9876",
    password: "undefined",
    gender: null,
    name: "Alex Johnson",
    dob: "1995-03-10",
    address: "789 Pine Rd, Villagetown",
    isLocked: false,
  },
  {
    id: "4",
    phone: "555-4321",
    password: "secret123",
    gender: "Non-Binary",
    name: "Sam Taylor",
    dob: "1988-11-28",
    address: "101 Cedar Ln, Hamlet City",
    isLocked: true,
  },
  {
    id: "5",
    phone: "555-6543",
    password: "userPass",
    gender: "Female",
    name: "Emily White",
    dob: "1992-07-03",
    address: "202 Maple Dr, Countryside",
    isLocked: false,
  },
  {
    id: "6",
    phone: "555-8765",
    password: "undefined",
    gender: null,
    name: "Chris Brown",
    dob: "1982-12-17",
    address: "303 Birch Ave, Suburbia",
    isLocked: false,
  },
  {
    id: "7",
    phone: "555-1098",
    password: "securePwd",
    gender: "Male",
    name: "Michael Miller",
    dob: "1998-04-05",
    address: "404 Elm St, Metropolis",
    isLocked: true,
  },
];
