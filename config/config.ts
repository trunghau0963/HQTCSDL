import mssql from "mssql";

const optionProps = {
  encrypt: false,
  trustServerCertificate: true,
  enableArithAbort: true,
};

const poolProps = {
  max: 10,
  min: 0,
  idleTimeoutMillis: 30000,
};
export const sqlConfig = {
  guest: new mssql.ConnectionPool(
    {
      user: process.env.DB_KHACH_USER,
      password: process.env.DB_KHACH_PASSWORD,
      server: process.env.DB_SERVER_URL!,
      port: parseInt(process.env.DB_SERVER_PORT!),
      database: process.env.DB_NAME,
      options: optionProps,
      // pool: poolProps,
    },
    () => console.log("Connected as Guest")
  ).connect(),
  patient: new mssql.ConnectionPool(
    {
      user: process.env.DB_BENHNHAN_USER,
      password: process.env.DB_BENHNHAN_PASSWORD,
      server: process.env.DB_SERVER_URL!,
      port: parseInt(process.env.DB_SERVER_PORT!),
      database: process.env.DB_NAME,
      options: optionProps,
      // pool: poolProps,
    },
    () => console.log("Connected as Patient")
  ).connect(),
  dentist: new mssql.ConnectionPool(
    {
      user: process.env.DB_NHASI_USER,
      password: process.env.DB_NHASI_PASSWORD,
      server: process.env.DB_SERVER_URL!,
      port: parseInt(process.env.DB_SERVER_PORT!),
      database: process.env.DB_NAME,
      options: optionProps,
      // pool: poolProps,
    },
    () => console.log("Connected as Dentist")
  ).connect(),
  staff: new mssql.ConnectionPool(
    {
      user: process.env.DB_NHANVIEN_USER,
      password: process.env.DB_NHANVIEN_PASSWORD,
      server: process.env.DB_SERVER_URL!,
      port: parseInt(process.env.DB_SERVER_PORT!),
      database: process.env.DB_NAME,
      options: optionProps,
      // pool: poolProps,
    },
    () => console.log("Connected as Staff")
  ).connect(),
  admin: new mssql.ConnectionPool(
    {
      user: process.env.DB_QUANTRI_USER,
      password: process.env.DB_QUANTRI_PASSWORD,
      server: process.env.DB_SERVER_URL!,
      port: parseInt(process.env.DB_SERVER_PORT!),
      database: process.env.DB_NAME,
      options: optionProps,
      // pool: poolProps,
    },
    () => console.log("Connected as Admin")
  ).connect(),
};

export type Role = keyof typeof sqlConfig;

export async function getDatabase(role: Role) {
  return (await sqlConfig[role]).request();
}
