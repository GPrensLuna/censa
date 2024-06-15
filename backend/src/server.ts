import express, { json } from "express";
import { Cors } from "./Middleware/configureMiddleware";
import { routes } from "./Router/router";

export const server = express();

server.use(Cors);
server.use(json());

server.use("/api", routes);
