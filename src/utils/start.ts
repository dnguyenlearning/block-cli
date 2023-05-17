import * as https from "https";
import * as http from "http";
import * as fse from "fs-extra";
import * as path from "path";
import * as express from "express";
import { cors } from "./cors";
import Config from "../config";
import { createBlockCliSocket } from "./socket";
import { getPackageJSON, getBlockConfig } from "./project";
import { IBlockCliSocket } from "../interface/socket";
import * as core from "express-serve-static-core";

const sslDir = path.resolve(__dirname, "../../ssl");

export const hostComplied = (
  app: core.Express,
  port: string,
  protocol: string
): {
  blockCliSocket: IBlockCliSocket | undefined;
  server: http.Server | https.Server;
} => {
  let server = null;
  app.use(cors());
  let blockCliSocket: IBlockCliSocket | undefined;
  if (protocol === "https") {
    const privateKey = fse.readFileSync(
      path.resolve(sslDir, "server.key"),
      "utf8"
    );
    const certificate = fse.readFileSync(
      path.resolve(sslDir, "server.crt"),
      "utf8"
    );
    const credentials = { key: privateKey, cert: certificate };

    server = https.createServer(credentials, app);
    app.use(express.static(path.join(Config.releaseCodePath)));
    blockCliSocket = createBlockCliSocket(server);
    // sandbox
    const blockConfig = getBlockConfig();
    app.get("/blockConfig", (req, res) => {
      res.send({
        sandbox: blockConfig.sandbox,
        packageId: blockConfig.packageId,
      });
    });
  } else {
    server = http.createServer(app);
    // cli info

    app.use(express.static(path.join(Config.releaseCodePath)));
    app.get("/block-cli/info", (req, res) => {
      const blockCliPackageJSON = getPackageJSON(
        path.resolve(__dirname, "../../")
      );
      res.send({
        version: blockCliPackageJSON.version,
      });
    });
    app.get("/ping.png", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../../ping.png"));
    });
  }
  server.listen(port);
  return {
    blockCliSocket,
    server,
  };
};

export const hostCompliedFile = (port: string, protocol: string) => {
  const app = express();
  return hostComplied(app, port, protocol).blockCliSocket;
};
