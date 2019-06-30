import { standardNameParser } from './standard-name-parser';
import { AlphabeticalNameSerializer } from './alphabetical-name-serializer';

export function normalize(name) {
  const names = standardNameParser(name)
  return new AlphabeticalNameSerializer(names).serialize();
}
