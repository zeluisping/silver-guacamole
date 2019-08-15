import Koa from "koa";
import KoaLogger from "koa-logger";
import Routes from "./routes";

const port = process.env["PORT"] || 3000;
const app = new Koa();

app.use(KoaLogger());
app.use(Routes.routes()).use(Routes.allowedMethods());
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
