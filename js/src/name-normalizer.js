export const normalize = name => {
  const { first, last } = parseNames(name);
  return join(last, ', ', first);
}

function parseNames(nameString) {
  const [first, last] = nameString.trim().split(' ');
  return { first, last }
}

function join(left, separator, right) {
  if(!left) return right;
  return [left, separator, right].join('');
}
