export const normalize = name => {
  const { first, middle, last, suffix } = parseNames(name);
  const middleText = shortenMiddleNames(middle);
  return multiJoin(last, ', ', first, ' ', middleText, ', ', suffix);
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

  comma(next) {
    return new Joiner(join(this.value, ', ', next));
  }

  space(next) {
    return new Joiner(join(this.value, ' ', next));
  }

  toString() {
    return this.value;
  }
}

function multiJoin(left, separator, ...rest) {
  if(separator && rest.length) {
    return join(left, separator, multiJoin(...rest));
  } else {
    return left;
  }
}

function join(left, separator, right) {
  if(!left && !right) return '';
  if(!left) return right;
  if(!right) return left;
  return [left, separator, right].join('');
}
