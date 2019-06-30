import { WordJoiner } from './word-joiner';
import { standardNameParser } from './standard-name-parser';

export const normalize = name => {
  const { first, middle, last, suffix } = standardNameParser(name);
  const middleText = shortenMiddleNames(middle);
  return new WordJoiner(last)
    .comma(first)
    .space(middleText)
    .comma(suffix)
    .toString();
}

function shortenMiddleName(middleName) {
  return middleName.length === 1 ? middleName : middleName[0] + '.';
}

function shortenMiddleNames(middleNames) {
  return middleNames.map(shortenMiddleName).join(' ');
}
