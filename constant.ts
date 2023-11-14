import { ToolItemsProps } from "./config/model";

export const TOOLS = (baseUrl: string): ToolItemsProps[] => [
  {
    title: "dashboard",
    icon: "/icons/dashboard.svg",
    url: `${baseUrl}/dashboard`,
    color: "btn btn-outline-warning",
    slug: "dashboard",
  },
  {
    title: "home",
    icon: "/icons/home.svg",
    url: `${baseUrl}/home`,
    color: "btn btn-outline-info",
    slug: "home",
  },
  {
    title: "schedule",
    icon: "/icons/schedule.svg",
    url: `${baseUrl}/schedule`,
    color: "btn btn-outline-primary",
    slug: "schedule",
  },
];

export const PATIENTNAVIGATIONS = (baseUrl: string) => [
  ...TOOLS(baseUrl),
  {
    title: "orders",
    icon: "/icons/drug.svg",
    url: `${baseUrl}/drug`,
    color: "btn btn-outline-danger",
    slug: "drug",
  },
  {
    title: "dentist",
    icon: "/icons/dentist.svg",
    url: `${baseUrl}/dentist`,
    color: "btn btn-outline-success",
    slug: "dentist",
  },
];

export const DENTISTNAVIGATIONS = (baseUrl: string) => [
  ...TOOLS(baseUrl),
  {
    title: "patient",
    icon: "/icons/patient.svg",
    url: `${baseUrl}/patient`,
    color: "btn btn-outline-success",
    slug: "patient",
  },
];

export const NAVIGATIONS = (baseUrl: string) => [
  ...TOOLS(baseUrl),
  {
    title: "drug",
    icon: "/icons/drug.svg",
    url: `${baseUrl}/drug`,
    color: "btn btn-outline-danger",
    slug: "drug",
  },
];

