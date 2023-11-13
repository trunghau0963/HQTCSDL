import { Router } from "express";
import * as elements from "typed-html";
import LandingPage from "../../app/landing/LandingPage";
import Navbar from "../../components/navbar";
import Info from "../../components/info/info";
import Kham from "../../components/kham/kham";
import Checkappointment from "../../components/checkappointment/checkappointment";

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  return res.send(<LandingPage />);
});

indexRouter.get("/info", async (req, res) => {
  return res.send(
    <Info/>
  );
});

indexRouter.get("/kham", async (req, res) => {
  return res.send(
    <Kham/>
  );
});

indexRouter.get("/checkappointment", async (req, res) => {
  return res.send(
    <Checkappointment/>
  );
});

export default indexRouter;
