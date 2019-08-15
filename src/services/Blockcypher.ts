import Axios from "axios";

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
interface IEthereumBalance {
  address: string;
  total_received: number;
  total_sent: number;
  balance: number;
  unconfirmed_balance: number;
  final_balance: number;
  n_tx: number;
  unconfirmed_n_tx: number;
  final_n_tx: number;
  nonce: number;
  pool_nonce: number;
}

export default new (class {
  async FetchEthereumBalance(
    address: string
  ): Promise<IEthereumBalance | null> {
    try {
      const response = await Axios.get<IEthereumBalance>(
        `https://api.blockcypher.com/v1/eth/main/addrs/${address}/balance`
      );
      return response.data;
    } catch (e) {
      return null;
    }
  }
})();
