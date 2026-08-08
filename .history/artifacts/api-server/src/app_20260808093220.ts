import express, { type Express } from "express";
import cors from "cors";
import pinoHttp, { type CustomAttributeKeys } from "pino-http";
import type { IncomingMessage, ServerResponse } from "http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// Manejo de compatibilidad para la importación ESM/CommonJS de pino-http
const pinoMiddleware = typeof pinoHttp === "function" ? pinoHttp : (pinoHttp as any).default;

app.use(
  pinoMiddleware({
    logger,
    serializers: {
      req(req: IncomingMessage) {
        return {
          id: (req as any).id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res: ServerResponse) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;