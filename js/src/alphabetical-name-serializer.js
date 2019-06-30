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
    return new WordJoiner(last)
      .comma(first)
      .space(middleText)
      .comma(suffix)
      .toString();
  }
}
