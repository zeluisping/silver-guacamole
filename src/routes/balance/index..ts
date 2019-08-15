import KoaRouter from "koa-router";
import Blockcypher from "../../services/Blockcypher";

const route = new KoaRouter();
export default route;

route.get("/:address", async (ctx, next) => {
  const address = ctx.params["address"];
  // @todo validate address?

  const balance = await Blockcypher.FetchEthereumBalance(address);
  if (balance === null) {
    // @todo maybe return same code as Blockcypher?
    ctx.response.status = 404;
    await next();
    return;
  }

  ctx.response.body = balance;
  await next();
});
