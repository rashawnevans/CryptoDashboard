import { ONE_DAY } from "../lib/constants";

/**
 *
 * @param coinName
 * @returns
 */
export default async function getCryptoData(coinName: string = "bitcoin") {
  const endTime: number = Date.now();
  const startTime: number = endTime - ONE_DAY;
  const url: string = `https://api.coincap.io/v2/assets/${coinName}/history?interval=m30&end=${endTime}&start=${startTime}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
