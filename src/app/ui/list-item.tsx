"use client";

import React, { useEffect, useState } from "react";
import { Crypto } from "../lib/definitions";
import getCryptoData from "../api/page";
import { LineChart } from "@mui/x-charts/LineChart";
import Grid from "@mui/material/Grid";

export default function ListItem(props: Crypto) {
  const { name, ticker } = props;
  const [assetMin, setAssestMin] = useState(0);
  const [assetMax, setAssestMax] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [priceChange, setPriceChange] = useState(0);
  const [priceChangePercent, setPriceChangePercent] = useState(0);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);

  useEffect(() => {
    if (name) {
      getCryptoData(name).then((data: any) => {
        console.log("data", data);
        const allValues = data.data.map((item: any) =>
          parseFloat(item.priceUsd)
        );
        const timeValues = data.data.map((item: any) => item.time);
        setAssestMin(Math.min(...allValues));
        setAssestMax(Math.max(...allValues));
        const currentPrice = allValues.pop();
        setCurrentPrice(currentPrice);
        setPriceChange(currentPrice - allValues[0]);
        setPriceChangePercent((1 - allValues[0] / currentPrice) * 100);
        setY(allValues);
        setX(timeValues);
      });
    }
  }, [name]);

  return (
    <Grid
      item
      xs={4}
      style={{
        padding: 20,
        border: "2px solid #000",
        background: priceChange >= 0 ? "Green" : "Red",
      }}
    >
      <p>{name}</p>
      <p>{ticker}/USD</p>
      <p>Min: {assetMin}</p>
      <p>Max: {assetMax}</p>
      <p>Curr: {currentPrice}</p>
      <p>Cha: {priceChange}</p>
      <p>Cha%: {priceChangePercent}%</p>
      <LineChart
        leftAxis={null}
        bottomAxis={null}
        xAxis={[{ data: x }]}
        series={[
          {
            data: y,
            showMark: false,
          },
        ]}
        width={500}
        height={300}
      />
    </Grid>
  );
}
