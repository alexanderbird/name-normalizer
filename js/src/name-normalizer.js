export const normalize = name => {
  const { first, last } = parseNames(name);
  return last ? [last, first].join(', ') : first;
}

function parseNames(nameString) {
  const [first, last] = nameString.trim().split(' ');
  return { first, last }
}
