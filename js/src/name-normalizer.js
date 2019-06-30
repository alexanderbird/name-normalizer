import { standardNameParser, serializeNamesLastNameFirst } from './name-model';

export function normalize(name) {
  const names = standardNameParser(name)
  return serializeNamesLastNameFirst(names);
}
