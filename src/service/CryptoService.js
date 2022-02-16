import Crypto from '../entity/Crypto.js';
import CryptoRepository from '../repository/CryptoRepository.js';
class CryptoService {
  constructor({ repository } = {}) {
    this.repository = repository || new CryptoRepository();
  }
  async *list() {
    // TODO: implementar generator que chama a repository fazendo a paginação
    let currentPage = 1
    const itemsPerPage = 5
    let totalCount = -1
    do{
        try {
        const response = await this.repository.list(currentPage++, itemsPerPage);
        totalCount = Number(response.headers['x-total-count'])
        const currentPageContent = response.data.map(({id, symbol, name, cmc_rank, total_supply, quote} ) => {
          return new Crypto({id, symbol, name, cmc_rank, total_supply, quote})
        })
        yield currentPageContent
        }catch (e) {
          console.warn(`*** [${e.code}]: Server may be offline so you wont be able to fetch cryptos ***`.toUpperCase())
          yield []
        }
      }while(totalCount > currentPage * itemsPerPage)
    
  }
}

export default CryptoService;
