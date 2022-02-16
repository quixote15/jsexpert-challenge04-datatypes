import User from './User.js';

// TODO: Criar um Symbol para a propriedade privada 'kUsers'
const kData = Symbol('kData');
class Users {
  constructor() {
    // TODO: inicializar a propriedade privada 'kData' como uma estrutura importante vista no curso
    this[kData] = []
  }

  add(userRaw) {
    const user = new User(userRaw);
    // TODO: inserir valor na estrutura escolhida.
    this[kData].push(user);
  }

  hasUsers() {
    // TODO: Como saber se tem informação dentro da estrutura escolhida?
    return this[kData].length > 0;
  }

  // TODO: Me parece que o objeto gerado precisa ser iterável 🤔
  *[Symbol.iterator]() {
    for(let user of this[kData]) {
      yield user
    }
  }
}

export default Users;
