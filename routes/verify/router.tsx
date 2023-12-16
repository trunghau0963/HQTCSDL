import { Router } from "express";
import * as elements from "typed-html";
import Signup from "../../app/auth/Signup/Signup";
import Login from "../../app/auth/Login/Login";
import AppointmentDetail from "../../components/appointment";

const verifyRouter = Router();

verifyRouter.get("/signup", async (req, res) => {
  return res.send(<Signup />);
});

verifyRouter.get("/login", async (req, res) => {
  return res.send(<Login />);
});

verifyRouter.get("/apm", async (req, res) => {
  return res.send(<AppointmentDetail />);
});

export default verifyRouter;
