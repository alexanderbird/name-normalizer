import { WordJoiner } from './word-joiner';

function shortenMiddleName(middleName) {
  return middleName.length === 1 ? middleName : middleName[0] + '.';
}

export class AlphabeticalNameSerializer {
  constructor(names) {
    this.names = names;
  }

  getMiddleNames() {
    return this.names.middle.map(shortenMiddleName).join(' ');
  }

  serialize() {
    return new WordJoiner(this.names.last)
      .comma(this.names.first)
      .space(this.getMiddleNames())
      .comma(this.names.suffix)
      .toString();
  }
}
