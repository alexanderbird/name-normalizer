/* See interface Names in ./names.js */
import { validateStandardName } from '.';

// Returns type Names
export function parseStandardName(nameString) {
  validateStandardName(nameString);
  const { suffix, rest: nameParts } = getSuffix(nameString);
  return {
    suffix,
    ...getNames(nameParts)
  };
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

