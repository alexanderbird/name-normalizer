import { WordJoiner } from './serialization-helpers/word-joiner';
/* See interface Names in ./names.js */

export function serializeNamesLastNameFirst(names /* type Names */) {
  return new WordJoiner(names.last)
    .comma(names.first)
    .space(shortenMiddleNames(names.middle))
    .comma(names.suffix)
    .toString();
}


function shortenMiddleName(middleName) {
  return middleName.replace(/(.).+/, '$1.');
}

function shortenMiddleNames(middleNames) {
  return middleNames.map(shortenMiddleName).join(' ');
}
