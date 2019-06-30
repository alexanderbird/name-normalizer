import { standardNameParser } from './name-model/standard-name-parser';
import { serializeNamesLastNameFirst } from './name-model/serialize-names-last-name-first';

export function normalize(name) {
  const names = standardNameParser(name)
  return serializeNamesLastNameFirst(names);
}
