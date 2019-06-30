import { parseStandardName, serializeNamesLastNameFirst } from './name-model';

export function normalize(name) {
  const names = parseStandardName(name)
  return serializeNamesLastNameFirst(names);
}
