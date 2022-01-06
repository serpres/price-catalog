import { useState, useEffect } from "react";
import type { NextPage } from "next";

import { Button, Grid, TextField } from "@mui/material";

import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import { CurrncyService } from "../../services/CurrencyService";

import { CurrencyPairs } from "../../types/currency";

const CurrencyConverter: NextPage = () => {
  const [currency, setCurrency] = useState<any>();
  // TODO: Make a currency selection menu, implement the request according to selected currency

  useEffect(() => {
    CurrncyService.getCurrencyRate(CurrencyPairs.USD_RUB).then(({ data }) =>
      setCurrency(data[CurrencyPairs.USD_RUB])
    );
  }, []);

  return (
    <div>
      <Grid
        container
        flexWrap="wrap"
        gap={1}
        alignItems="center"
        justifyContent="center"
        width="100%"
        flexDirection={{ xs: "column", lg: "row" }}
      >
        <Grid item>
          <TextField id="first-currency" label="USD" />
        </Grid>
        <Grid item>
          {/* TODO: Make a currency swap on button click */}
          <Button>
            <CompareArrowsIcon fontSize="large" />
          </Button>
        </Grid>
        <Grid item>
          <TextField
            id="second-currency"
            label="RUB"
            variant="filled"
            value={currency}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CurrencyConverter;
