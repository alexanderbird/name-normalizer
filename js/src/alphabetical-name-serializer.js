import { WordJoiner } from './word-joiner';

function shortenMiddleName(middleName) {
  return middleName.length === 1 ? middleName : middleName[0] + '.';
}

function shortenMiddleNames(middleNames) {
  return middleNames.map(shortenMiddleName).join(' ');
}

export class AlphabeticalNameSerializer {
  constructor(names) {
    this.names = names;
  }

  serialize() {
    const { first, middle, last, suffix } = this.names;
    const middleText = shortenMiddleNames(middle);
    return new WordJoiner(this.names.last)
      .comma(this.names.first)
      .space(middleText)
      .comma(this.names.suffix)
      .toString();
  }
}
