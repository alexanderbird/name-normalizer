export const normalize = name => {
  const { first, middle, last, suffix } = parseNames(name);
  const middleText = shortenMiddleNames(middle);
  return new Joiner(last)
    .comma(first)
    .space(middleText)
    .comma(suffix)
    .toString();
}

function parseNames(nameString) {
  const cleanName = nameString.trim();
  const [mainNames, suffix, otherCrap] = cleanName.split(', ');
  if(otherCrap) throw new Error('Too many commas');
  const nameParts = mainNames.split(' ');
  const first = nameParts.shift();
  const last = nameParts.pop();
  const middle = nameParts;
  return { first, middle, last, suffix }
}

function shortenMiddleName(middleName) {
  return middleName.length === 1 ? middleName : middleName[0] + '.';
}

function shortenMiddleNames(middleNames) {
  return middleNames.map(shortenMiddleName).join(' ');
}

class Joiner {
  constructor(value = '') {
    this.value = value;
  }

  join(separator, next) {
    const defaultValue = this.value || next || '';
    if(!next || !this.value) return new Joiner(defaultValue)
    return new Joiner([this.value, separator, next].join(''));
  }

  comma(next) {
    return this.join(', ', next);
  }

  space(next) {
    return new Joiner(join(this.value, ' ', next));
  }

  toString() {
    return this.value;
  }
}

function join(left, separator, right) {
  if(!left && !right) return '';
  if(!left) return right;
  if(!right) return left;
  return [left, separator, right].join('');
}
