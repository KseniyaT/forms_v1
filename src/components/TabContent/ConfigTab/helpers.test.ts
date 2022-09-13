import { isJsonValid } from './helpers';

describe('helpers', () => {
  it('should return true if there is no value, correct json and false otherwise', () => {
    expect(isJsonValid('')).toBeTruthy();
    expect(isJsonValid('{"test": "test"}')).toBeTruthy();
    expect(isJsonValid('{"test": "}')).toBeFalsy();
  });
});