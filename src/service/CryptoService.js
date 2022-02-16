import Crypto from '../entity/Crypto.js';
import CryptoRepository from '../repository/CryptoRepository.js';

class CryptoService {
  constructor({ repository } = {}) {
    this.repository = repository || new CryptoRepository();
  }
  async *list() {
    // TODO: implementar generator que chama a repository fazendo a paginação
    for(let i = 0; i < 5; i++){

      const result = [
        {
          "id": 1,
          "name": "Bitcoin",
          "symbol": "BTC",
          "slug": "bitcoin",
          "num_market_pairs": 9122,
          "date_added": "2013-04-28T00:00:00.000Z",
          "tags": [
            "mineable",
            "pow",
            "sha-256",
            "store-of-value",
            "state-channel",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "galaxy-digital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio"
          ],
          "max_supply": 21000000,
          "circulating_supply": 18947112,
          "total_supply": 18947112,
          "platform": null,
          "cmc_rank": 1,
          "self_reported_circulating_supply": null,
          "self_reported_market_cap": null,
          "last_updated": "2022-02-02T22:03:00.000Z",
          "quote": {
            "USD": {
              "price": 36993.53886444305,
              "volume_24h": 18410156534.886894,
              "volume_change_24h": -9.2382,
              "percent_change_1h": -1.57991931,
              "percent_change_24h": -4.621405,
              "percent_change_7d": 1.51028127,
              "percent_change_30d": -19.64001893,
              "percent_change_60d": -24.06064182,
              "percent_change_90d": -39.755443,
              "market_cap": 700920724140.9553,
              "market_cap_dominance": 41.2795,
              "fully_diluted_market_cap": 776864316153.3,
              "last_updated": "2022-02-02T22:03:00.000Z"
            }
          }
        },
        {
          "id": 1027,
          "name": "Ethereum",
          "symbol": "ETH",
          "slug": "ethereum",
          "num_market_pairs": 5484,
          "date_added": "2015-08-07T00:00:00.000Z",
          "tags": [
            "mineable",
            "pow",
            "smart-contracts",
            "ethereum-ecosystem",
            "binance-smart-chain",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures-portfolio",
            "hashkey-capital-portfolio",
            "kenetic-capital-portfolio",
            "huobi-capital-portfolio",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital-portfolio",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-portfolio"
          ],
          "max_supply": null,
          "circulating_supply": 119418332.624,
          "total_supply": 119418332.624,
          "platform": null,
          "cmc_rank": 2,
          "self_reported_circulating_supply": null,
          "self_reported_market_cap": null,
          "last_updated": "2022-02-02T22:03:00.000Z",
          "quote": {
            "USD": {
              "price": 2656.712421318853,
              "volume_24h": 13003742093.518219,
              "volume_change_24h": -2.0519,
              "percent_change_1h": -2.46407999,
              "percent_change_24h": -4.82264754,
              "percent_change_7d": 9.55455206,
              "percent_change_30d": -28.67739602,
              "percent_change_60d": -34.7033839,
              "percent_change_90d": -41.34613622,
              "market_cap": 317260167615.36725,
              "market_cap_dominance": 18.6581,
              "fully_diluted_market_cap": 317260167615.37,
              "last_updated": "2022-02-02T22:03:00.000Z"
            }
          }
        },
        {
          "id": 825,
          "name": "Tether",
          "symbol": "USDT",
          "slug": "tether",
          "num_market_pairs": 27274,
          "date_added": "2015-02-25T00:00:00.000Z",
          "tags": [
            "payments",
            "stablecoin",
            "asset-backed-stablecoin",
            "binance-smart-chain",
            "avalanche-ecosystem",
            "solana-ecosystem",
            "moonriver-ecosystem"
          ],
          "max_supply": null,
          "circulating_supply": 77940728002.87462,
          "total_supply": 80074893058.66304,
          "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "cmc_rank": 3,
          "self_reported_circulating_supply": null,
          "self_reported_market_cap": null,
          "last_updated": "2022-02-02T22:03:00.000Z",
          "quote": {
            "USD": {
              "price": 1.0004230485788057,
              "volume_24h": 42498232911.41934,
              "volume_change_24h": -2.0714,
              "percent_change_1h": -0.00316539,
              "percent_change_24h": -0.00435561,
              "percent_change_7d": -0.00709494,
              "percent_change_30d": 0.03447089,
              "percent_change_60d": 0.02749309,
              "percent_change_90d": -0.05046043,
              "market_cap": 77973700717.08731,
              "market_cap_dominance": 4.574,
              "fully_diluted_market_cap": 80108768628.37,
              "last_updated": "2022-02-02T22:03:00.000Z"
            }
          }
        },
        {
          "id": 1839,
          "name": "BNB",
          "symbol": "BNB",
          "slug": "bnb",
          "num_market_pairs": 663,
          "date_added": "2017-07-25T00:00:00.000Z",
          "tags": [
            "marketplace",
            "centralized-exchange",
            "payments",
            "smart-contracts",
            "binance-smart-chain",
            "alameda-research-portfolio",
            "multicoin-capital-portfolio",
            "moonriver-ecosystem"
          ],
          "max_supply": 165116760,
          "circulating_supply": 165116760.89,
          "total_supply": 165116760.89,
          "platform": null,
          "cmc_rank": 4,
          "self_reported_circulating_supply": null,
          "self_reported_market_cap": null,
          "last_updated": "2022-02-02T22:03:00.000Z",
          "quote": {
            "USD": {
              "price": 369.45933876342133,
              "volume_24h": 1273490437.760733,
              "volume_change_24h": -12.4354,
              "percent_change_1h": -1.7830858,
              "percent_change_24h": -4.4520229,
              "percent_change_7d": 0.36165516,
              "percent_change_30d": -27.80993843,
              "percent_change_60d": -34.33269314,
              "percent_change_90d": -33.803867,
              "market_cap": 61003929297.177345,
              "market_cap_dominance": 3.5786,
              "fully_diluted_market_cap": 61003928968.36,
              "last_updated": "2022-02-02T22:03:00.000Z"
            }
          }
        }
      ]

      yield result
    }
  }
}

export default CryptoService;
