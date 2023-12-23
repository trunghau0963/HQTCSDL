import { ToolItemsProps } from "./model/model";

export const Guset = (baseUrl: string): ToolItemsProps[] => [
  {
    title: "Home",
    icon: "/icons/home.svg",
    url: `${baseUrl}`,
  },
  {
    title: "Dentist",
    icon: "/icons/dentist.svg",
    url: "#dentist",
  },
  {
    title: "Schedule",
    icon: "/icons/schedule.svg",
    url: "#schedule",
  },
  {
    title: "Contact",
    icon: "/icons/about.svg",
    url: "#contact",
  },
];

export const PATIENTNAVIGATIONS = (baseUrl: string) => [
  {
    title: "Dashboard",
    icon: "/icons/dashboard.svg",
    url: `${baseUrl}/dashboard`,
    color: "btn btn-outline-warning",
  },
  {
    title: "Home",
    icon: "/icons/home.svg",
    url: `${baseUrl}/home`,
    color: "btn btn-outline-info",
  },
  {
    title: "Schedule",
    icon: "/icons/schedule.svg",
    url: `${baseUrl}/schedule`,
    color: "btn btn-outline-primary",
  },
  {
    title: "Drugs",
    icon: "/icons/drug.svg",
    url: `${baseUrl}/drug`,
    color: "btn btn-outline-danger",
    slug: "drug",
  },
  {
    title: "Appointment",
    icon: "/icons/service.svg",
    url: `${baseUrl}/appointment`,
    color: "btn btn-outline-danger",
    slug: "drug",
  },
  {
    title: "Dentist",
    icon: "/icons/dentist.svg",
    url: `${baseUrl}/dentist`,
    color: "btn btn-outline-success",
    slug: "dentist",
  },
  {
    title: "Security",
    icon: "/icons/about.svg",
    url: `${baseUrl}/about`,
    color: "btn btn-outline-warning",
    slug: "about",
  },
];

export const DENTISTNAVIGATIONS = (baseUrl: string) => [
  {
    title: "Dashboard",
    icon: "/icons/dashboard.svg",
    url: `${baseUrl}/dashboard`,
    color: "btn btn-outline-warning",
  },
  {
    title: "Schedule",
    icon: "/icons/schedule.svg",
    url: `${baseUrl}/schedule`,
    color: "btn btn-outline-primary",
  },
];

export const STAFFNAVIGATIONS = (baseUrl: string) => [
  {
    title: "Dashboard",
    icon: "/icons/dashboard.svg",
    url: `${baseUrl}/dashboard`,
    color: "btn btn-outline-warning",
  },
  {
    title: "Home",
    icon: "/icons/home.svg",
    url: `${baseUrl}/home`,
    color: "btn btn-outline-info",
  },
  {
    title: "Schedule",
    icon: "/icons/schedule.svg",
    url: `${baseUrl}/schedule`,
    color: "btn btn-outline-primary",
  },
  {
    title: "Service",
    icon: "/icons/service.svg",
    url: `${baseUrl}/service`,
    color: "btn btn-outline-danger",
    slug: "drug",
  },
  {
    title: "Drug",
    icon: "/icons/drug.svg",
    url: `${baseUrl}/drug`,
    color: "btn btn-outline-danger",
    slug: "drug",
  },
  {
    title: "Invoice",
    icon: "/icons/receipt.svg",
    url: `${baseUrl}/invoice`,
    color: "btn btn-outline-warning",
    slug: "invoice",
  },
];

export const ADMINNAVIGATIONS = (baseUrl: string) => [
  {
    title: "Dashboard",
    icon: "/icons/dashboard.svg",
    url: `${baseUrl}/dashboard`,
    color: "btn btn-outline-warning",
    slug: "dashboard",
  },
  {
    title: "Dentists",
    icon: "/icons/schedule.svg",
    url: `${baseUrl}/dentist`,
    color: "btn btn-outline-primary",
    slug: "manageAccount",
  },
  {
    title: "Patients",
    icon: "/icons/schedule.svg",
    url: `${baseUrl}/patient`,
    color: "btn btn-outline-primary",
    slug: "manageAccount",
  },
  {
    title: "Staffs",
    icon: "/icons/schedule.svg",
    url: `${baseUrl}/staff`,
    color: "btn btn-outline-primary",
    slug: "manageAccount",
  },
  {
    title: "Schedule",
    icon: "/icons/schedule.svg",
    url: `${baseUrl}/schedule`,
    color: "btn btn-outline-primary",
  },
  {
    title: "Service",
    icon: "/icons/service.svg",
    url: `${baseUrl}/service`,
    color: "btn btn-outline-danger",
    slug: "drug",
  },
  {
    title: "Drug",
    icon: "/icons/drug.svg",
    url: `${baseUrl}/drug`,
    color: "btn btn-outline-danger",
    slug: "drug",
  },
];
