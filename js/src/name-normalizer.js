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

function shortenMiddleNames(middleNames) {
  return middleNames.length ? middleNames[0][0] + '.' : '';
}

function join(left, separator, right) {
  if(!left) return right;
  if(!right) return left;
  return [left, separator, right].join('');
}
