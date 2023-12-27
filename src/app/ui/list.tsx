import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { cryptos } from "../lib/constants";
import ListItem from "./list-item";
import { Crypto } from "../lib/definitions";

export default function List() {
  return (
    <Box
      sx={{ width: "100%" }}
      className="flex min-h-screen flex-row items-center justify-between p-24"
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {cryptos.map((item: Crypto) => (
          <ListItem key={item.ticker} name={item.name} ticker={item.ticker} />
        ))}
      </Grid>
    </Box>
  );
}
