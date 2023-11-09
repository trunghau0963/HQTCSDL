import { Router } from "express";
import * as elements from "typed-html";
import Navbar from "../../layouts/navbar";

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

indexRouter.get("/appointment", async (req, res) => {
  return res.send(
    <Navbar>
      <button class="btn btn-primary" hx-get="/users" hx-swap="outerHTML">
        Apponintment
      </button>
    </Navbar>
  );
});

export default indexRouter;
