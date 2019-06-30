import { standardNameParser } from './standard-name-parser';
import { serializeNamesLastNameFirst } from './alphabetical-name-serializer';

export function normalize(name) {
  const names = standardNameParser(name)
  return serializeNamesLastNameFirst(names);
}
