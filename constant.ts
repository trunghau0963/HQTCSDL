import { ToolItemsProps } from "./config/model";

export const TOOLS = (baseUrl: string): ToolItemsProps[] => [
  {
    title: "dashboard",
    icon: "/icons/dashboard.svg",
    url: `${baseUrl}/dashboard`,
    slug: "dashboard",
  },
  {
    title: "home",
    icon: "/icons/home.svg",
    url: `${baseUrl}/home`,
    color: "bg-blue-500",
    slug: "home",
  },
  {
    title: "schedule",
    icon: "/icons/schedule.svg",
    url: `${baseUrl}/schedule`,
    color: "bg-green-500",
    slug: "schedule",
  },
];

export const PATIENTNAVIGATIONS = (baseUrl: string) => [
  ...TOOLS(baseUrl),
  {
    title: "orders",
    icon: "/icons/orders.svg",
    url: `${baseUrl}/orders`,
    color: "bg-amber-500",
    slug: "orders",
  },
  {
    title: "dentist",
    icon: "/icons/dentist.svg",
    url: `${baseUrl}/dentist`,
    color: "bg-orange-500",
    slug: "dentist",
  },
];

export const DENTISTNAVIGATIONS = (baseUrl: string) => [
  ...TOOLS(baseUrl),
  {
    title: "patient",
    icon: "/icons/patient.svg",
    url: `${baseUrl}/patient`,
    color: "bg-amber-500",
    slug: "patient",
  },
];

export const NAVIGATIONS = (baseUrl: string) => [
  ...TOOLS(baseUrl),
  {
    title: "drug",
    icon: "/icons/drug.svg",
    url: `${baseUrl}/drug`,
    color: "bg-amber-500",
    slug: "drug",
  },
];

