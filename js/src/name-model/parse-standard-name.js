/* See interface Names in ./names.js */

// Returns type Names
export function parseStandardName(nameString) {
  const cleanName = nameString.trim();
  const { rest, suffix } = getSuffix(cleanName);
  const { first, middle, last } = getNames(rest);
  return { first, middle, last, suffix };
}

function getSuffix(name) {
  const [rest, suffix, otherCrap] = name.split(', ');
  if(otherCrap) throw new Error('Too many commas');
  return { rest, suffix }
}

function getNames(nameString) {
  const nameParts = nameString.split(' ');
  const first = nameParts.shift();
  const last = nameParts.pop();
  const middle = nameParts;
  return { first, middle, last };
}

