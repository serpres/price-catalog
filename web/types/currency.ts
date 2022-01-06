export interface CurrencyRate {
    [CurrencyPair:string]: number
}

export enum CurrencyPairs {
    USD_RUB = 'USD_RUB',
    RUB_USD = 'RUB_USD',
    USD_BYN = 'USD_BYN',
    BYN_USD = 'BYN_USD',
    RUB_BYN = 'RUB_BYN',
    BYN_RUB = 'BYN_RUB'
} 