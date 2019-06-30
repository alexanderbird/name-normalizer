export class WordJoiner {
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
