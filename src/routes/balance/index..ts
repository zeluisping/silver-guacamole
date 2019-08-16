import KoaRouter from "koa-router";
import Blockcypher from "../../services/Blockcypher";
import ValidateEthereumAddress from "../../utils/ValidateEthereumAddress";
import WeisToEther from "../../utils/WeisToEther";

const route = new KoaRouter();
export default route;

route.get("/:address", async (ctx, next) => {
  const address = ValidateEthereumAddress(ctx.params["address"]);
  if (typeof address === "undefined") {
    ctx.response.status = 400;
    await next();
    return;
  }

  const data = await Blockcypher.FetchEthereumBalance(address);
  if (data === null) {
    ctx.response.status = 404;
    await next();
    return;
  }

  ctx.response.body = WeisToEther(data.balance).toNumber();

  await next();
});
