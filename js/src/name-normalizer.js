import { standardNameParser } from './standard-name-parser';
import { serializeNamesLastNameFirst } from './serialize-names-last-name-first';

export function normalize(name) {
  const names = standardNameParser(name)
  return serializeNamesLastNameFirst(names);
}
