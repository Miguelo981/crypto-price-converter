import { createGetTokenRequestFunction } from './common'
import type { Currency, Symbol, CurrencyConversion } from './types'

/**
 *
 * @export
 * @interface GetTokenRequest
 */
export interface GetTokenRequest {
  /**
   *
   * @type {string}
   * @memberof GetTokenRequest
   */
  symbol: Symbol
  /**
   *
   * @type {string}
   * @memberof GetTokenRequest
   */
  currency?: Currency
  /**
   *
   * @type {number}
   * @memberof GetTokenRequest
   */
  quantity?: number
}

/**
 * CryptoConverterAPI - object-oriented interface
 * @export
 * @class CryptoConverterAPI
 * @extends {BaseAPI}
 */
export class CryptoConverterAPI {
  /**
   *
   * @summary Get token price in currency
   * @param {getTokenPrice} getTokenPrice
   * @param {*} [options] Override http request option.
   * @throws {Error}
   */
  public async getTokenPrice(
    { symbol, currency = 'USD' }: GetTokenRequest,
    options?: RequestInit
  ): Promise<number> {
    console.assert(symbol)

    const cryptoId = symbol.split(' ').join('-').toLowerCase()
    const currencyCode = currency.toLowerCase()

    const endpoint = `/coins/${cryptoId}`

    const { market_data } = await createGetTokenRequestFunction({ endpoint, options })

    const cryptoPrice = market_data.current_price[currencyCode]

    if (!cryptoPrice) {
      throw new Error("Currency Not Available!");
    }

    return cryptoPrice;
  }

  /**
   *
   * @summary Convert crypto price to currency with quantity
   * @param {ConvertToCurrency} ConvertToCurrency
   * @param {*} [options] Override http request option.
   * @throws {Error}
   */
  public async ConvertToCrypto(
    { symbol, currency = 'USD', quantity = 1 }: GetTokenRequest,
    options?: RequestInit
  ): Promise<CurrencyConversion> {
    const price = await this.getTokenPrice({ symbol, currency }, options)

    const conversion = price * quantity

    return { amount: conversion, currency, symbol }
  }

  /**
   *
   * @summary Convert crypto price to currency with quantity
   * @param {ConvertToCurrency} ConvertToCurrency
   * @param {*} [options] Override http request option.
   * @throws {Error}
   */
  public async ConvertToCurrency(
    { symbol, currency = 'USD', quantity = 1 }: GetTokenRequest,
    options?: RequestInit
  ): Promise<CurrencyConversion> {
    const price = await this.getTokenPrice({ symbol, currency }, options)

    const conversion = quantity / price

    return { amount: conversion, currency, symbol }
  }
}
