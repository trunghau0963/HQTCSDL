import { config } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { getDatabase, Role } from "./config/config";
import path from "path";
import morgan from "morgan";
import indexRouter from "./routes/index/router";
import authRouter, {getRole} from "./routes/auth/router";
import usersRouter from "./routes/users/router";
import verifyRouter from "./routes/verify/router";
import patientRouter from "./routes/patient/router";
import dentistRouter from "./routes/dentist/router";
import staffRouter from "./routes/staff/router";
import adminRouter from "./routes/admin/router";
import testRouter from "./routes/test/router";

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

// app.use(async (req, res, next) => {
//   try {
//     await getDb("guest");
//     return next();
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.use("/", authRouter);
app.use("/users", usersRouter);
app.use("/verify", verifyRouter);
app.use("/patient", patientRouter);
app.use("/dentist", dentistRouter);
app.use("/staff", staffRouter);
app.use("/admin", adminRouter);
app.use("/test", testRouter);

export default app;
