export const normalize = name => {
  const [first, last] = name.split(' ');
  return last ? [last, first].join(', ') : first;
}
