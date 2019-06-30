import { WordJoiner } from './word-joiner';
/* See interface Names in ./names.js */

export function lastNameFirstNameSerializer(names /* type Names */) {
  return new AlphabeticalNameSerializer(names).serialize();
}

export class AlphabeticalNameSerializer {
  constructor(names /* type Names */) {
    this._names = names;
  }

  serialize() {
    return new WordJoiner(this._names.last)
      .comma(this._names.first)
      .space(this._getMiddleNames())
      .comma(this._names.suffix)
      .toString();
  }

  static _shortenMiddleName(middleName) {
    return middleName.length === 1 ? middleName : middleName[0] + '.';
  }

  _getMiddleNames() {
    return this._names.middle.map(AlphabeticalNameSerializer._shortenMiddleName).join(' ');
  }
}
