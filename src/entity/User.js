class User {
  constructor({ id }) {
    this.id = id;
  }
  // TODO: Alguma manipulação a fazer considerando que o objeto gerado será constantemente escrito em tela?
  get [Symbol.toStringTag](){
    return`userId: ${this.id}`
  }

  toString() {
    return `[id=${this.id}]`
  }

}

export default User;
