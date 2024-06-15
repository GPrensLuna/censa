import { Router } from "express";
import * as ROUTER from "../Controllers";

export const routes = Router();

routes.post("/Register", ROUTER.PostRegister);
routes.post("/Login", ROUTER.PostLogin);
