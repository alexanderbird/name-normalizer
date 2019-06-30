import { parseStandardName, serializeNamesLastNameFirst } from './name-model';

export function normalize(name) {
  const names = parseStandardName(name.trim())
  return serializeNamesLastNameFirst(names);
}
