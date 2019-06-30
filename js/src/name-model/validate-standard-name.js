export function validateStandardName(nameString) {
  if(nameString.match(/,.*,/)) {
    throw new Error('Too many commas');
  }
}

