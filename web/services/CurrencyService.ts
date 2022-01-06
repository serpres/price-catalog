import { AxiosResponse } from "axios";

import { exchangeApi } from "../api/api";

import { CurrencyRate } from "../types/currency";

export class CurrncyService {
    static getCurrencyRate(currencyPair: string): Promise<AxiosResponse<CurrencyRate>>{
        return exchangeApi.get(`api/v7/convert?q=${currencyPair}&compact=ultra`)
    }
}