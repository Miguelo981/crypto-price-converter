export interface CryptoResponse {
    id:                              string;
    symbol:                          string;
    name:                            string;
    web_slug:                        string;
    asset_platform_id:               null;
    platforms:                       Platforms;
    detail_platforms:                DetailPlatforms;
    block_time_in_minutes:           number;
    hashing_algorithm:               string;
    categories:                      string[];
    preview_listing:                 boolean;
    public_notice:                   null;
    additional_notices:              any[];
    description:                     Description;
    links:                           CryptoLinks;
    image:                           Image;
    country_origin:                  string;
    genesis_date:                    null;
    sentiment_votes_up_percentage:   number;
    sentiment_votes_down_percentage: number;
    ico_data:                        IcoData;
    watchlist_portfolio_users:       number;
    market_cap_rank:                 number;
    market_data:                     MarketData;
    status_updates:                  any[];
    last_updated:                    Date;
}

export interface Description {
    en: string;
}

export interface DetailPlatforms {
    "": Empty;
}

export interface Empty {
    decimal_place:    null;
    contract_address: string;
}

export interface IcoData {
    ico_start_date:             Date;
    ico_end_date:               Date;
    short_desc:                 string;
    description:                string;
    links:                      IcoDataLinks;
    softcap_currency:           string;
    hardcap_currency:           string;
    total_raised_currency:      string;
    softcap_amount:             null;
    hardcap_amount:             null;
    total_raised:               string;
    quote_pre_sale_currency:    string;
    base_pre_sale_amount:       null;
    quote_pre_sale_amount:      null;
    quote_public_sale_currency: string;
    base_public_sale_amount:    number;
    quote_public_sale_amount:   number;
    accepting_currencies:       string;
    country_origin:             string;
    pre_sale_start_date:        null;
    pre_sale_end_date:          null;
    whitelist_url:              string;
    whitelist_start_date:       null;
    whitelist_end_date:         null;
    bounty_detail_url:          string;
    amount_for_sale:            null;
    kyc_required:               boolean;
    whitelist_available:        null;
    pre_sale_available:         null;
    pre_sale_ended:             boolean;
}

export interface IcoDataLinks {
    web:        string;
    blog:       string;
    slack:      string;
    github:     string;
    twitter:    string;
    facebook:   string;
    telegram:   string;
    whitepaper: string;
}

export interface Image {
    thumb: string;
    small: string;
    large: string;
}

export interface CryptoLinks {
    homepage:                      string[];
    blockchain_site:               string[];
    official_forum_url:            string[];
    chat_url:                      string[];
    announcement_url:              string[];
    twitter_screen_name:           string;
    facebook_username:             string;
    bitcointalk_thread_identifier: null;
    telegram_channel_identifier:   string;
    subreddit_url:                 string;
    repos_url:                     ReposURL;
}

export interface ReposURL {
    github:    string[];
    bitbucket: any[];
}

export interface MarketData {
    current_price:                                { [key: string]: number };
    total_value_locked:                           null;
    mcap_to_tvl_ratio:                            null;
    fdv_to_tvl_ratio:                             null;
    roi:                                          Roi;
    ath:                                          { [key: string]: number };
    ath_change_percentage:                        { [key: string]: number };
    ath_date:                                     { [key: string]: Date };
    atl:                                          { [key: string]: number };
    atl_change_percentage:                        { [key: string]: number };
    atl_date:                                     { [key: string]: Date };
    market_cap:                                   { [key: string]: number };
    market_cap_rank:                              number;
    fully_diluted_valuation:                      { [key: string]: number };
    market_cap_fdv_ratio:                         number;
    total_volume:                                 { [key: string]: number };
    high_24h:                                     { [key: string]: number };
    low_24h:                                      { [key: string]: number };
    price_change_24h:                             number;
    price_change_percentage_24h:                  number;
    price_change_percentage_7d:                   number;
    price_change_percentage_14d:                  number;
    price_change_percentage_30d:                  number;
    price_change_percentage_60d:                  number;
    price_change_percentage_200d:                 number;
    price_change_percentage_1y:                   number;
    market_cap_change_24h:                        number;
    market_cap_change_percentage_24h:             number;
    price_change_24h_in_currency:                 { [key: string]: number };
    price_change_percentage_1h_in_currency:       { [key: string]: number };
    price_change_percentage_24h_in_currency:      { [key: string]: number };
    price_change_percentage_7d_in_currency:       { [key: string]: number };
    price_change_percentage_14d_in_currency:      { [key: string]: number };
    price_change_percentage_30d_in_currency:      { [key: string]: number };
    price_change_percentage_60d_in_currency:      { [key: string]: number };
    price_change_percentage_200d_in_currency:     { [key: string]: number };
    price_change_percentage_1y_in_currency:       { [key: string]: number };
    market_cap_change_24h_in_currency:            { [key: string]: number };
    market_cap_change_percentage_24h_in_currency: { [key: string]: number };
    total_supply:                                 number;
    max_supply:                                   null;
    circulating_supply:                           number;
    last_updated:                                 Date;
}

export interface Roi {
    times:      number;
    currency:   string;
    percentage: number;
}

export interface Platforms {
    "": string;
}