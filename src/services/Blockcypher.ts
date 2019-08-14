import Axios from "axios";

export default new (class {
  async FetchEthereumBalance(address: string) {
    const res = await Axios.get(
      `https://api.blockcypher.com/v1/eth/main/addrs/${address}/balance`
    );
    // @todo handle res.status
    return res.status === 200;
  }
})();
