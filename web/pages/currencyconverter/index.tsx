import { useState, useEffect } from "react";
import type { NextPage } from "next";

import { Button, Grid, SelectChangeEvent, TextField } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import CurrencySelect from "./CurrencySelect";

import { CurrncyService } from "../../services/CurrencyService";

import { Currency } from "../../types/currency";

const CurrencyConverter: NextPage = () => {
  const [currencyRate, setCurrencyRate] = useState<number>(1);
  const [currencyPair, setCurrencyPair] = useState<[Currency, Currency]>([
    "USD",
    "RUB",
  ]);
  const [firstInputValue, setFirstInputValue] = useState(0);
  const [secondInputValue, setSecondInputValue] = useState(
    firstInputValue * currencyRate
  );

  useEffect(() => {
    if (currencyPair) {
      const currencyPairString = `${currencyPair[0]}_${currencyPair[1]}`;
      CurrncyService.getCurrencyRate(currencyPairString).then(({ data }) =>
        setCurrencyRate(data[currencyPairString])
      );
    }
  }, [currencyPair]);

  useEffect(() => {
    // TODO: Add ability to change the second input
    setSecondInputValue(Number((firstInputValue * currencyRate).toFixed(2)));
  }, [firstInputValue]);

  const handleChangeSelect = (event: SelectChangeEvent, selectIndex: 0 | 1) => {
    const newCurrency = event.target.value as Currency;

    switch (selectIndex) {
      case 0:
        if (currencyPair[1] === newCurrency) swapCurrencyPair();
        else setCurrencyPair((prev) => [newCurrency, prev[1]]);
        break;
      case 1:
        if (currencyPair[0] === newCurrency) swapCurrencyPair();
        else setCurrencyPair((prev) => [newCurrency, prev[1]]);
        setCurrencyPair((prev) => [prev[0], newCurrency]);
        break;
    }
  };

  const handleInputChange = (event: any, inputIndex: 0 | 1) => {
    switch (inputIndex) {
      case 0:
        setFirstInputValue(event.target.value);
        break;
      case 1:
        setSecondInputValue(event.target.value);
        break;
    }
  };

  const swapCurrencyPair = () => {
    setCurrencyPair((prev) => [prev[1], prev[0]]);
    setFirstInputValue(secondInputValue);
    setSecondInputValue(firstInputValue * currencyRate);
  };

  return (
    <div>
      <Grid
        container
        flexWrap="wrap"
        gap={1}
        alignItems="center"
        justifyContent="center"
        flexDirection={{ xs: "column", lg: "row" }}
      >
        <Grid item>
          <TextField
            id="first-currency"
            value={firstInputValue}
            onChange={(e) => {
              handleInputChange(e, 0);
            }}
          />
          <CurrencySelect
            value={currencyPair[0]}
            selectIndex={0}
            handleChangeSelect={handleChangeSelect}
          />
        </Grid>
        <Grid item>
          <Button onClick={swapCurrencyPair}>
            <CompareArrowsIcon fontSize="large" />
          </Button>
        </Grid>
        <Grid item>
          <TextField
            color="secondary"
            id="second-currency"
            value={secondInputValue}
            onChange={(e) => {
              handleInputChange(e, 1);
            }}
          />
          <CurrencySelect
            value={currencyPair[1]}
            selectIndex={1}
            handleChangeSelect={handleChangeSelect}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CurrencyConverter;
