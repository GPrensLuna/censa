import cors from "cors";

const opcionCors = {
    origin: "*",
    method: "GET, POST, PUT, DELETE",
    allowedHaders: "Content-Type,Authorization",
};

export const Cors = cors(opcionCors);

/* import {
    json,
    urlencoded,
    type Request,
    type Response,
    type NextFunction,
    type Application,
    type Errback,
} from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";

export const authMiddleware = (server: Application) => {
    server.use(
        urlencoded({ extended: true, limit: "50mb" }),
        json({ limit: "50mb" })
    );
    server.use(cookieParser());
    server.use(morgan("dev"));
    server.use((req: Request, res: Response, next: NextFunction) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        res.header(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, DELETE"
        );

        if (req.method === "OPTIONS") {
            res.sendStatus(200);
        } else {
            next();
        }
    });
};

export const errorMiddleware = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = err.status || 500;
    const message = err.message || "Error interno del servidor";
    console.error(err);
    res.status(status).send(message);
};
 */
