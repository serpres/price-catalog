export interface CurrencyRate {
  [CurrencyPair: string]: number;
}

export enum Currencies {
  USD = "USD",
  RUB = "RUB",
  BYN = "BYN",
}

export type Currency = keyof typeof Currencies;
