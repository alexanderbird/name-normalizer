export function standardNameParser(nameString) {
  const cleanName = nameString.trim();
  const [mainNames, suffix, otherCrap] = cleanName.split(', ');
  if(otherCrap) throw new Error('Too many commas');
  const nameParts = mainNames.split(' ');
  const first = nameParts.shift();
  const last = nameParts.pop();
  const middle = nameParts;
  return { first, middle, last, suffix }
}

