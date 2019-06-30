export const normalize = name => {
  const { first, middle, last } = parseNames(name);
  const middleText = shortenMiddleNames(middle);
  return join(last, ', ', 
    join(first, ' ', middleText));
}

function parseNames(nameString) {
  const nameParts = nameString.trim().split(' ');
  const first = nameParts.shift();
  const last = nameParts.pop();
  const middle = nameParts;
  return { first, middle, last }
}

function shortenMiddleName(middleName) {
  return middleName.length === 1 ? middleName : middleName[0] + '.';
}

function shortenMiddleNames(middleNames) {
  return middleNames.map(shortenMiddleName)[0];
}

function join(left, separator, right) {
  if(!left && !right) return '';
  if(!left) return right;
  if(!right) return left;
  return [left, separator, right].join('');
}
