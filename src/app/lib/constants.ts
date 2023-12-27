import { Crypto } from "./definitions";

export const ONE_DAY: number = 1000 * 60 * 60 * 24;
export const cryptos: Crypto[] = [
  { name: "bitcoin", ticker: "BTC" },
  { name: "ethereum", ticker: "ETH" },
  { name: "solana", ticker: "SOL" },
  { name: "xrp", ticker: "XRP" },
  { name: "cardano", ticker: "ADA" },
  { name: "polkadot", ticker: "DOT" },
  { name: "avalanche", ticker: "AVAX" },
  { name: "polygon", ticker: "MATIC" },
  { name: "chainlink", ticker: "LINK" },
  { name: "litecoin", ticker: "LTC" },
  { name: "bitcoin-cash", ticker: "BCH" },
  { name: "cosmos", ticker: "ATOM" },
  { name: "uniswap", ticker: "UNI" },
  { name: "internet-computer", ticker: "ICP" },
  { name: "monero", ticker: "XMR" },

  // This values give errors due to various reasons
  // { name: "dogecoin", ticker: "DOGE" }, // Max and min are very small numbers which causes graph errors
  // { name: "bnb", ticker: "BNB" }, // Not found in api call
  // { name: "tron", ticker: "TRX" }, // Max & Min values not displayed
];
