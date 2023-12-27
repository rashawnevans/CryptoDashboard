import { ONE_DAY } from "../lib/constants";

/**
 * Create function that makes a call to coincap api to get crypto data
 * @param coinName
 * @returns
 */
export default async function getCryptoData(coinName: string = "bitcoin") {
  const endTime: number = Date.now();
  const startTime: number = endTime - ONE_DAY;
  // can change interval using 'interval' query parameter
  const url: string = `https://api.coincap.io/v2/assets/${coinName}/history?interval=m30&end=${endTime}&start=${startTime}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
