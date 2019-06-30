/*
 * WordJoiner provides a declarative interface for combining two strings with a
 * separator. If one of the two strings is absent, the separator is omitted.
 *
 * Uses a builder pattern so you can chain calls together, e.g.
 *   new WordJoiner('foo').comma('bar').space('yes').toString();
 */
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
