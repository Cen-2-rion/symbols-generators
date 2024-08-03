// реализуем итератор в классе Team, который по одному выдаёт персонажей (объекты типа Character)
export default class Team {
  constructor(...args) {
    this.characters = args;
  }

  * [Symbol.iterator]() {
    let index = 0;
    while (index < this.characters.length) {
      yield this.characters[index];
      index += 1;
    }
  }
}
