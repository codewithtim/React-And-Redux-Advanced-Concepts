const sum = require('./calc');

// this is the test block, we explain what the test will do
// then in the callback write our assertions
test('should return 2 when in 1 & 1', () => {
  // here we make an assertion about what we expect to happen
  expect(sum(1,1)).toBe(2);
});