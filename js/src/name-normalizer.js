export const normalize = name => {
  const { first, middle, last, suffix } = parseNames(name);
  const middleText = shortenMiddleNames(middle);
  return new WordJoiner(last)
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

class WordJoiner {
  constructor(value = '') {
    this.value = value;
  }

  join(separator, next) {
    const defaultValue = this.value || next || '';
    if(!next || !this.value) return new WordJoiner(defaultValue)
    return new WordJoiner([this.value, separator, next].join(''));
  }

  comma(next) {
    return this.join(', ', next);
  }

  space(next) {
    return this.join(' ', next);
  }

  toString() {
    return this.value;
  }
}
