import { Router } from "express";
import * as elements from "typed-html";
import Profile from "../../components/info/Profile";
import BaseHtml from "../../layouts/baseHtml";
import AddDentist from "../../components/Dentist/add_dentist";
import Reciept from "../../components/receipt";
const testRouter = Router();

testRouter.get("/profile", async (req, res) => {
  return res.send(
    <BaseHtml>
      <Profile />
    </BaseHtml>
  );
});
testRouter.get("/", async (req, res) => {
  return res.send(
    <Reciept/>
  );
});


export default testRouter;
