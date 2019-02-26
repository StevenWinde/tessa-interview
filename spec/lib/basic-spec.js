describe('The basic function', () => {
  const basic = require('../../lib/basic');

  it('should return true', () => {
    expect(basic()).toEqual(true);
  });
});
