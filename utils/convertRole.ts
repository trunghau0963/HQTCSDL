export const convertRoleViToEn = (role: string) => {
  if (role === "BENHNHAN") return "patient";
  if (role === "NHANVIEN") return "staff";
  if (role === "NHASI") return "dentist";
  if (role === "QUANTRI") return "admin";
};
