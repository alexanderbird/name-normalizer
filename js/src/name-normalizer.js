import { standardNameParser } from './standard-name-parser';
import { AlphabeticalNameSerializer } from './alphabetical-name-serializer';

export const normalize = name => {
  const names = standardNameParser(name)
  return new AlphabeticalNameSerializer(names).serialize();
}

/*
 * interface Names {
 *   first?: string;
 *   middle?: string[];
 *   last?: string;
 *   suffix?: string;
 * }
 */

