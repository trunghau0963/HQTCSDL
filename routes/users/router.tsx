import { Router } from "express";
import * as elements from "typed-html";
import { admin, dentist, patient, staff } from "../auth/router";
// vd import file gì đó trong layout (Dentist) trong đây, m send dô cái file đó dô layout để code giao diện cho nó

const usersRouter = Router();

usersRouter.get("/guest", async (req, res) => {
  return res.send(<p>Guest</p>);
});

usersRouter.get("/patient", patient, async (req, res) => {
  return res.send(<p>Patient</p>);
});

usersRouter.get("/dentist", dentist, async (req, res) => {
  return res.send(<p>Dentist</p>);
  // hoặc return res.send(<Dentist/>);
});

usersRouter.get("/staff", staff, async (req, res) => {
  return res.send(<p>Staff</p>);
});

usersRouter.get("/admin", admin, async (req, res) => {
  return res.send(<p>Admin</p>);
});

export default usersRouter;
