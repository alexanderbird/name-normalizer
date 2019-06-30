/* See interface Names in ./names.js */

export function parseStandardName(nameString) {
  const cleanName = nameString.trim();
  const { rest, suffix } = getSuffix(cleanName);
  const nameParts = rest.split(' ');
  const first = nameParts.shift();
  const last = nameParts.pop();
  const middle = nameParts;
  return { first, middle, last, suffix }; /* type Names */
}

function getSuffix(name) {
  const [rest, suffix, otherCrap] = name.split(', ');
  if(otherCrap) throw new Error('Too many commas');
  return { rest, suffix }
}

