export type Symbol =
  | 'Bitcoin'
  | 'Ethereum'
  | 'Dai'
  | 'Solana'
  | 'Cardano'
  | 'Binance Coin'
  | 'Ripple'
  | 'Polkadot'
  | 'Litecoin'
  | 'Bitcoin Cash'
  | 'Chainlink'
  | 'Stellar'
  | 'USD Coin'
  | 'Uniswap'
  | 'Dogecoin'
  | 'Wrapped Bitcoin'
  | 'Aave'
  | 'Cosmos'
  | 'Crypto.com Coin'
  | 'THETA'
  | 'VeChain'
  | 'Tron'
  | 'Monero'
  | 'EOS'
  | 'IOTA'
  | 'Tezos'
  | 'Neo'
  | 'Maker'
  | 'Bitcoin SV'
  | 'Tether'
  | 'Filecoin'
  | 'Dash'
  | 'Compound'
  | 'Algorand'
  | 'Ethereum Classic'
  | 'Theta Fuel'
  | 'Wrapped UST'
  | 'Celsius'
  | 'Decred'
  | 'Zilliqa'
  | 'Huobi Token'
  | 'NEM'
  | 'Synthetix'
  | 'PancakeSwap'
  | 'OKB'
  | 'BitTorrent'
  | 'Quant'
  | 'Avalanche'
  | 'Kusama'
  | 'Zcash'
  | 'DigiByte'
  | 'SushiSwap'
  | 'Elrond'
  | 'The Graph'
  | 'Hedera Hashgraph'
  | 'Horizen'
  | 'Helium'
  | 'Chiliz'
  | 'Nexo'
  | 'Enjin Coin'
  | 'Curve DAO Token'
  | 'Celo'
  | 'Nexo'
  | 'Waves'
  | 'Ontology'
  | 'KuCoin Token'
  | 'Qtum'
  | 'Telcoin'
  | 'Ren'
  | 'Band Protocol'
  | 'BakerySwap'
  | 'Zcash'
  | 'OMG Network'
  | 'Harmony'
  | 'Balancer'
  | 'iExec RLC'
  | 'SwissBorg'
  | 'Origin Protocol'
  | 'TomoChain'
  | 'Perpetual Protocol'
  | 'SKALE'
  | 'Raydium'
  | 'Serum'
  | 'Pax Dollar'
  | 'WazirX'
  | 'Civic'
  | 'Arweave'
  | 'Keep3rV1'
  | 'ANKR'
  | 'STASIS EURO'
  | 'NuCypher'
  | 'Orchid'
  | 'Reef'
  | 'district0x'
  | 'UTRUST'
  | 'Terra Virtua Kolect'
  | 'Verge'
  | 'WINK'
  | 'StormX'
  | 'COTI'
  | 'Fantom'
  | 'Akash Network'
  | 'SafeMoon'
  | 'Unibright'
  | 'Celer Network'
  | 'Frontier'
  | 'NKN'
  | 'Linear'
  | 'FunFair'
  | 'Tellor'
  | 'Metal'
  | 'MaidSafeCoin';

export type Currency =
  | 'EUR'
  | 'USD'
  | 'GBP'
  | 'JPY'
  | 'AUD'
  | 'CAD'
  | 'CHF'
  | 'CNY'
  | 'SEK'
  | 'NZD'
  | 'NOK'
  | 'SGD'
  | 'MXN'
  | 'HKD'
  | 'KRW'
  | 'TRY'
  | 'INR'
  | 'BRL'
  | 'ZAR'
  | 'RUB'
  | 'DKK'
  | 'PLN'
  | 'THB'
  | 'IDR'
  | 'HUF'
  | 'CZK'
  | 'ILS'
  | 'CLP'
  | 'PHP'
  | 'AED'
  | 'MYR'
  | 'SAR'
  | 'RON'
  | 'QAR'
  | 'CRC'
  | 'ARS'
  | 'COP'
  | 'HRK'
  | 'DOP'
  | 'EGP'
  | 'ISK'
  | 'JMD'
  | 'KWD'
  | 'LBP'
  | 'MAD'
  | 'NPR'
  | 'PKR'
  | 'PYG'
  | 'TWD'
  | 'UYU'
  | 'UZS'
  | 'VND'
  | 'XAF'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'AOA'
  | 'AWG'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CDF'
  | 'DZD'
  | 'ERN'
  | 'ETB'
  | 'FJD'
  | 'FKP'
  | 'GEL'
  | 'GGP'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HNL'
  | 'IMP'
  | 'IQD'
  | 'IRR'
  | 'JEP'
  | 'JOD'
  | 'KGS'
  | 'KHR'
  | 'KID'
  | 'KZT'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MVR'
  | 'MWK'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PLN'
  | 'PRB'
  | 'RSD'
  | 'RWF'
  | 'SBD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STN'
  | 'SVC'
  | 'SZL'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TTD'
  | 'TZS'
  | 'UGX'
  | 'UZS'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XAG'
  | 'XAU'
  | 'XDR'
  | 'XOF'
  | 'XPD'
  | 'XPF'
  | 'XPT'
  | 'ZMW'
  | 'ZWL';

  type CurrencyConversion = {
    amount: number;
    currency?: Currency;
    symbol?: Symbol;
  }