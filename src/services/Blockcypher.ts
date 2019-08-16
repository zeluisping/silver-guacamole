import Axios from "axios";
import { Decimal } from "decimal.js";

/*
{
  "address": "738d145faabb1e00cf5a017588a9c0f998318012",
  "total_received": 9762206505909057760,
  "total_sent": 6916970312523512365,
  "balance": 2845236193385545395,
  "unconfirmed_balance": 0,
  "final_balance": 2845236193385545395,
  "n_tx": 702,
  "unconfirmed_n_tx": 0,
  "final_n_tx": 702
}
*/
interface IEthereumBalance<T = number> {
  address: string;
  total_received: T;
  total_sent: T;
  balance: T;
  unconfirmed_balance: T;
  final_balance: T;
  n_tx: number;
  unconfirmed_n_tx: number;
  final_n_tx: number;
}
const IEthereumBalanceCurrencyKeys: (keyof IEthereumBalance)[] = [
  "total_received",
  "total_sent",
  "balance",
  "unconfirmed_balance",
  "final_balance"
];

function ToDecimalBalance(
  balance: IEthereumBalance<number | string>
): IEthereumBalance<Decimal> {
  const final: IEthereumBalance<Decimal> = balance as any;
  for (const key of IEthereumBalanceCurrencyKeys) {
    final[key] = new Decimal(balance[key]) as any;
  }
  return final;
}

export default abstract class {
  static async FetchEthereumBalance(
    address: string
  ): Promise<IEthereumBalance<Decimal> | null> {
    try {
      const response = await Axios.get<IEthereumBalance>(
        `https://api.blockcypher.com/v1/eth/main/addrs/${address}/balance`
      );
      return ToDecimalBalance(response.data);
    } catch (e) {
      return null;
    }
  }
}
