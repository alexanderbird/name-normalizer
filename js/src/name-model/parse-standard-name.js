/* See interface Names in ./names.js */

// Returns type Names
export function parseStandardName(nameString) {
  const cleanName = nameString.trim();
  const { suffix, rest: nameParts } = getSuffix(cleanName);
  const { first, middle, last } = getNames(nameParts);
  return { first, middle, last, suffix };
}

function getSuffix(name) {
  const [rest, suffix, otherCrap] = name.split(', ');
  if(otherCrap) throw new Error('Cannot get suffix: too many commas');
  return { rest, suffix }
}

function getNames(nameString) {
  const nameParts = nameString.split(' ');
  const first = nameParts.shift();
  const last = nameParts.pop();
  const middle = nameParts;
  return { first, middle, last };
}

