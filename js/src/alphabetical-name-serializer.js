import { WordJoiner } from './word-joiner';
/* See interface Names in ./names.js */

export function serializeNamesLastNameFirst(names /* type Names */) {
    return new WordJoiner(names.last)
      .comma(names.first)
      .space(shortenMiddleNames(names.middle))
      .comma(names.suffix)
      .toString();
  return new AlphabeticalNameSerializer(names).serialize();
}


function shortenMiddleName(middleName) {
    return middleName.length === 1 ? middleName : middleName[0] + '.';
  }

function shortenMiddleNames(middleNames) {
  return middleNames.map(shortenMiddleName).join(' ');
}


export class AlphabeticalNameSerializer {
  constructor(names /* type Names */) {
    this._names = names;
  }

  serialize() {
    const names = this._names;
  }
}
