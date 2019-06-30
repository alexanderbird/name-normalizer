export const normalize = name => {
  const { first, last } = parseNames(name);
  return join(last, ', ', first);
}

function parseNames(nameString) {
  const [first, last] = nameString.trim().split(' ');
  return { first, last }
}

function join(left, separator, right) {
  return left ? [left, separator, right].join('') : right;
}
