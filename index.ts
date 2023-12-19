import { config } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { getDatabase, Role } from "./config/config";
import path from "path";
import morgan from "morgan";
import authRouter, { getRole } from "./routes/auth/router";
import patientRouter from "./routes/patient/router";
import dentistRouter from "./routes/dentist/router";
import staffRouter from "./routes/staff/router";
import adminRouter from "./routes/admin/router";
import guestRouter from "./routes/guest/router";

config();

const app = express();

// app.use(morgan("combined"));

// Cấu hình static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(getRole);

app.use("/", guestRouter);
app.use("/auth", authRouter);
app.use("/patient", patientRouter);
app.use("/dentist", dentistRouter);
app.use("/staff", staffRouter);
app.use("/admin", adminRouter);

export default app;
