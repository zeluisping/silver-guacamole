import KoaRouter from "koa-router";

const route = new KoaRouter();
export default route;

route.get("/:address", async (ctx, next) => {
  // const address = ctx.params["address"];

  await next();
});
