# Crypto Price Converter Library

The Crypto Price Converter library allows developers to easily convert between cryptocurrency and traditional currency values. It leverages the CryptoConverter API for accurate and up-to-date conversion rates.

## Installation

```bash
npm install crypto-price-converter
```

## Usage

Initialize the library with your CryptoConverter API:

```javascript
const { CryptoConverterAPI } = require("crypto-price-converter");

const converter = new CryptoConverterAPI();
```

### Convert token quantity to currency

```javascript
const { CryptoConverterAPI } = require("crypto-price-converter");

const converter = new CryptoConverterAPI()

converter.ConvertToCrypto({ symbol: "Bitcoin", amount: 1, currency: "USD" })

```

Output:

```javascript
{ amount: 43149, currency: 'USD', symbol: 'Bitcoin' }
```

### Convert your currency amount to crypto value

```javascript
const { CryptoConverterAPI } = require("crypto-price-converter");

const converter = new CryptoConverterAPI()

converter.ConvertToCurrency({ symbol: "Bitcoin", amount: 1, currency: "USD" })

```

Output:

```javascript
{ amount: 0.0000231755081230156, currency: 'USD', symbol: 'Bitcoin' }
```


### CommonJs and ESModules Support

```javascript
const { CryptoConverterAPI } = require("crypto-price-converter");
```

```javascript
import { CryptoConverterAPI } from "crypto-price-converter"
```

### Error handling

API requests can potentially return errors due to invalid inputs or other issues. These errors can be handled with a `try...catch` statement, and the error details can be found in either `error.response` or `error.message`:
