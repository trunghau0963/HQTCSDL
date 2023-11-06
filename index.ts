import { config } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { getDb, DbName } from "./dbs";
import path from "path";
import morgan from "morgan";
import indexRouter from "./src/routes/index/router";
// import authRouter from "./routes/auth/router";
// import usersRouter from "./routes/users/router";

config();

const app = express();

app.use(morgan("combined"));

// Cấu hình static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
// app.use(async (req, res, next) => {
//   req.db = await getDb("guest");

//   return next();
// });
app.use(async (req, res, next) => {
  try {
    await getDb("guest");
    return next();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.use("/", indexRouter);
// app.use("/auth", authRouter);
// app.use("/users", usersRouter);

export default app;
