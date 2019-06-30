import { WordJoiner } from './word-joiner';

function shortenMiddleName(middleName) {
  return middleName.length === 1 ? middleName : middleName[0] + '.';
}

export class AlphabeticalNameSerializer {
  constructor(names) {
    this._names = names;
  }

  _getMiddleNames() {
    return this._names.middle.map(shortenMiddleName).join(' ');
  }

  serialize() {
    return new WordJoiner(this._names.last)
      .comma(this._names.first)
      .space(this._getMiddleNames())
      .comma(this._names.suffix)
      .toString();
  }
}
