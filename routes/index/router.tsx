import { Router } from "express";
import * as elements from "typed-html";
import Navbar from "../../layouts/navbar";
import Home from "../../components/home/home";
import Login from "../../components/login/login";
import Signup from "../../components/signup/signup";
import Thuoc from "../../components/thuoc/thuoc";
import Info from "../../components/info/info";
import Kham from "../../components/kham/kham";

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  return res.send(
    <Navbar>
      <button class="btn btn-primary" hx-get="/users" hx-swap="outerHTML">
        Click me!
      </button>
    </Navbar>
  );
});

indexRouter.get("/home", async (req, res) => {
  return res.send(
    <Home/>
  );
});

indexRouter.get("/login", async (req, res) => {
  return res.send(
    <Login/>
  );
});

indexRouter.get("/signup", async (req, res) => {
  return res.send(
    <Signup/>
  );
});

indexRouter.get("/thuoc", async (req, res) => {
  return res.send(
    <Thuoc/>
  );
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

export default indexRouter;
