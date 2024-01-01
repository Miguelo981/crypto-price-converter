/* tslint:disable */
/* eslint-disable */
/**
 * CryptoConverter API
 *
 * The version of the CryptoConverter document: 1.0.0
 * 
 *
 * Do not edit the class manually.
 */

export const BASE_PATH = "https://api.coingecko.com/api".replace(/\/+$/, "");
export const API_V = "/v3"

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    endpoint: string | URL;
    options: RequestInit;
}


/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}