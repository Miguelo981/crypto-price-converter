import { API_V, BASE_PATH, RequestArgs } from "./base";
import { CryptoResponse } from "./models/gecko";

export async function createGetTokenRequestFunction({ endpoint, options }: RequestArgs): Promise<CryptoResponse> {
    const url = new URL(`${BASE_PATH}${API_V}${endpoint}`);

    url.searchParams.set("localization", "false");
    url.searchParams.set("tickers", "false");
    url.searchParams.set("community_data", "false");
    url.searchParams.set("developer_data", "false");

    const res = await fetch(url, {
        ...options
    });

    if (!res.ok) {
        throw new Error('Crypto Not Available');
    }

    return (await res.json()) as CryptoResponse;
}