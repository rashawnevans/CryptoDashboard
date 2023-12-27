"use client";

import React, { useEffect, useState } from "react";
import { Crypto } from "../lib/definitions";
import getCryptoData from "../api/page";
import { LineChart } from "@mui/x-charts/LineChart";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

export default function ListItem(props: Crypto) {
  const { name, ticker } = props;
  const [assetMin, setAssestMin] = useState(0);
  const [assetMax, setAssestMax] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [priceChange, setPriceChange] = useState(0);
  const [priceChangePercent, setPriceChangePercent] = useState(0);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (name) {
      getCryptoData(name).then((data: any) => {
        const allValues = data.data.map((item: any) =>
          parseFloat(item.priceUsd)
        );
        const timeValues = data.data.map((item: any) => item.time);
        setAssestMin(+Math.min(...allValues).toFixed(2));
        setAssestMax(+Math.max(...allValues).toFixed(2));
        const currentPrice = allValues.pop();
        setCurrentPrice(+currentPrice.toFixed(2));
        setPriceChange(+(currentPrice - allValues[0]).toFixed(2));
        setPriceChangePercent(
          +((1 - allValues[0] / currentPrice) * 100).toFixed(2)
        );
        setY(allValues);
        setX(timeValues);
      });
    }
  }, [name]);

  return (
    <Grid
      item
      xs={2.4}
      style={{
        padding: 20,
        border: "2px solid #000",
        background: priceChange >= 0 ? "Green" : "Red",
      }}
    >
      <h5>{ticker}/USD</h5>
      <h1>${currentPrice}</h1>
      <h5 className="mb-8">{name.toLocaleUpperCase()}</h5>
      <h5>H: {assetMax}</h5>
      <h5>L: {assetMin}</h5>

      <Box className="flex items-center">
        <h5>
          {priceChangePercent > 0
            ? "+" + priceChangePercent
            : priceChangePercent}
          %
        </h5>
        <span className="text-5xl ml-2 mr-2"> · </span>
        <h5>{priceChange}</h5>
      </Box>
      {x.length > 0 && y.length > 0 && width && (
        <span style={{ position: "relative", left: -60, zIndex: 100 }}>
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
            height={240}
            width={width * 0.21}
          />
        </span>
      )}
    </Grid>
  );
}
