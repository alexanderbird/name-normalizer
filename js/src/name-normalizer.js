export const normalize = name => {
  const [first, last] = name.trim().split(' ');
  return last ? [last, first].join(', ') : first;
}
