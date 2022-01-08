import { useState, useEffect, useReducer } from "react";
import type { NextPage } from "next";

import { Button, Grid, SelectChangeEvent, TextField } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import PopupNotification from "../../components/PopupNotification";
import CurrencySelect from "./CurrencySelect";

import { CurrencyService } from "../../services/CurrencyService";

import { Currency } from "../../types/currency";

const initialState = {
  firstInput: 0,
  secondInput: 0,
  currencyRate: 75,
};

const CurrencyConverter: NextPage = () => {
  const [error, setError] = useState(false);

  const [currencyPair, setCurrencyPair] = useState<[Currency, Currency]>([
    "USD",
    "RUB",
  ]);

  function currencyReducer(
    state: typeof initialState,
    action: { type: string; payload?: any }
  ) {
    switch (action.type) {
      case "setCurrencyRate":
        return {
          ...state,
          currencyRate: action.payload.value,
        };

      case "firstInputChanged":
        return {
          ...state,
          firstInput: action.payload.value,
          secondInput: Number(
            (action.payload.value * state.currencyRate).toFixed(2)
          ),
        };

      case "secondInputChanged":
        return {
          ...state,
          secondInput: action.payload.value,
          firstInput: Number(
            (action.payload.value / state.currencyRate).toFixed(2)
          ),
        };
      case "spawCurrencyPair":
        const swapRate = 1 / state.currencyRate;
        return {
          ...state,
          currencyRate: swapRate,
          secondInput: Number((state.firstInput * swapRate).toFixed(2)),
        };

      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(currencyReducer, initialState);

  useEffect(() => {
    if (currencyPair) {
      const currencyPairString = `${currencyPair[0]}_${currencyPair[1]}`;
      CurrencyService.getCurrencyRate(currencyPairString)
        .then(({ data }) =>
          dispatch({
            type: "setCurrencyRate",
            payload: { value: data[currencyPairString] },
          })
        )
        .catch((error) => setError(true));
    }
  }, [currencyPair]);

  const handleChangeSelect = (event: SelectChangeEvent, selectIndex: 0 | 1) => {
    const newCurrency = event.target.value as Currency;

    switch (selectIndex) {
      case 0:
        if (currencyPair[1] === newCurrency) swapCurrencyPair();
        else setCurrencyPair((prev) => [newCurrency, prev[1]]);
        break;
      case 1:
        if (currencyPair[0] === newCurrency) swapCurrencyPair();
        else setCurrencyPair((prev) => [prev[0], newCurrency]);
        break;
    }
  };

  const handleInputChange = (event: any, inputIndex: 0 | 1) => {
    const payload = { value: event.target.value };

    switch (inputIndex) {
      case 0:
        dispatch({
          type: "firstInputChanged",
          payload,
        });
        break;
      case 1:
        dispatch({
          type: "secondInputChanged",
          payload,
        });
        break;
    }
  };

  const swapCurrencyPair = () => {
    setCurrencyPair((prev) => [prev[1], prev[0]]);
    dispatch({ type: "spawCurrencyPair" });
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
            value={state.firstInput}
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
            value={state.secondInput}
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
      {error && (
        <PopupNotification
          onPopupClose={setError}
          type="error"
          isOpen={error}
          // TODO: Add i18
          message={"For some reason, currency server is unavailable."}
        />
      )}
    </div>
  );
};

export default CurrencyConverter;
