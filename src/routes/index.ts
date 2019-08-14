import KoaRouter from "koa-router";
import BalanceRoutes from "./balance/index.";

const routing = {
  "/balance": BalanceRoutes
};

const route = new KoaRouter();
export default route;

const keys = Object.keys(routing) as (keyof typeof routing)[];
for (const path of keys) {
  const cursor = routing[path];
  route.use(path, cursor.routes()).use(cursor.allowedMethods());
}
