/* See interface Names in ./names.js */

// Returns type Names
export function parseStandardName(nameString) {
  validateName(nameString);
  const { suffix, rest: nameParts } = getSuffix(nameString);
  return {
    suffix,
    ...getNames(nameParts)
  };
}

function validateName(nameString) {
  if(nameString.match(/,.*,/)) {
    throw new Error('Too many commas');
  }
}

function getSuffix(name) {
  const [rest, suffix, otherCrap] = name.split(', ');
  return { rest, suffix }
}

function getNames(nameString) {
  const nameParts = nameString.split(' ');
  const first = nameParts.shift();
  const last = nameParts.pop();
  const middle = nameParts;
  return { first, middle, last };
}

