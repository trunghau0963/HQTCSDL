import { Router } from "express";
import * as elements from "typed-html";
import LandingPage from "../../app/landing/LandingPage";

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  return res.send(<LandingPage />);
});

export default indexRouter;
