const getAvailableNames = require('./index');

describe('getAvailableNames(2)', () => {
  it('should returns array with 2 letter elements', () => {
    expect(getAvailableNames(2)[0].length)
      .toBe(2);
  });
});
