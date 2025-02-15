import {
  validateStandardName,
  parseStandardName,
  serializeNamesLastNameFirst
} from './name-model';

export function normalize(name) {
  validateStandardName(name);
  const names = parseStandardName(name.trim())
  return serializeNamesLastNameFirst(names);
}
