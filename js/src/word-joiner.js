export class WordJoiner {
  constructor(value = '') {
    this.value = value;
  }

  join(separator, next) {
    if(!next) return new WordJoiner(this.value || '');
    if(!this.value) return new WordJoiner(next || '');
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
