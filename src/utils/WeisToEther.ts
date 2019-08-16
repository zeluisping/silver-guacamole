import Decimal from "decimal.js";

const WEIS_TO_ETHER_INVERSE = Math.pow(10, 18);

export default function WeisToEther(x: Decimal): Decimal {
  return x.div(WEIS_TO_ETHER_INVERSE).toSignificantDigits(18);
}
