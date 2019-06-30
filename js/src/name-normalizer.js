import { WordJoiner } from './word-joiner';

export const normalize = name => {
  const { first, middle, last, suffix } = parseNames(name);
  const middleText = shortenMiddleNames(middle);
  return new WordJoiner(last)
    .comma(first)
    .space(middleText)
    .comma(suffix)
    .toString();
}

function parseNames(nameString) {
  const cleanName = nameString.trim();
  const [mainNames, suffix, otherCrap] = cleanName.split(', ');
  if(otherCrap) throw new Error('Too many commas');
  const nameParts = mainNames.split(' ');
  const first = nameParts.shift();
  const last = nameParts.pop();
  const middle = nameParts;
  return { first, middle, last, suffix }
}

function shortenMiddleName(middleName) {
  return middleName.length === 1 ? middleName : middleName[0] + '.';
}

function shortenMiddleNames(middleNames) {
  return middleNames.map(shortenMiddleName).join(' ');
}
