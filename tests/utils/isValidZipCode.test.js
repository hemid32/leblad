const isValidZipCode = require('../../src/utils/isValidZipCode');

describe('check if a Zip code is valid', () => {
  it('should return false if the given code is not a valid number', () => {
    expect(isValidZipCode(null)).toBe(false);
  });

  it('should return false if the code is greater than 48073', () => {
    expect(isValidZipCode(48074)).toBe(false);
  });

  it('should return true if the code is less than 1000', () => {
    expect(isValidZipCode(999)).toBe(false);
  });

  it('should return true if the code is an integer between 1 and 48', () => {
    expect(isValidZipCode(48073)).toBe(true);
    expect(isValidZipCode(1000)).toBe(true);
  });
});
