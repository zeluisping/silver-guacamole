import Koa from "koa";
import KoaLogger from "koa-logger";

const port = process.env["PORT"] || 3000;
const app = new Koa();

app.use(KoaLogger());
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
