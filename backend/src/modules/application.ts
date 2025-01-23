import type { Express, Router, RequestHandler as Handler } from "express";
import express from 'express';
import { addr } from '@/library/tag';
const log = console.info;
class Application {
  server: Express;
  router: Router;
  node: string;
  host: string;
  port: number; 
  version: string;
  constructor(config?) {
    this.server = express();
    this.node = config.node || "development"
    this.host = config.host || "localhost";
    this.port = config.port || 4000;
    this.version = config.version || "0.0.0";
  }
  public use(mw: Handler) {this.server.use()}
  public set(key: string, val: any) {this.server.set(key, val)}
  public get(key: string) {this.server.get(key)}
  public route(prefix: string, router: Router) {this.server.use(prefix, router)};
  public Router(router: Router) {
    this.router = router;
    this.server.use(router);
  }
  public listen () {
    let address = addr(this.host, this.port);
    this.server.listen(this.port, () => {
      log(`Server listening on ${address}`);     
    })
  }
};

export default Application;