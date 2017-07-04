// someone may accidentially change the import to be a new file
const calc = require('./calc');

// describe blocks help keep our tests in logical 
// and easy to read blocks
// you normally want to describe something like a function or behaviour
describe('sum', () => {
  const sum = calc.sum;
  // this is the test block, we explain what the test will do
  // then in the callback write our assertions
  test('should return 2 when in 1 & 1', () => {
    // here we make an assertion about what we expect to happen
    expect(sum(1, 1)).toBe(2);
    // there are lots of different assertions we can use 
    // you can check them all out here https://facebook.github.io/jest/docs/en/expect.html#content
    expect(sum(1, 1)).toEqual(2);
    expect(sum(1, 1)).toBeLessThan(3);
    expect(sum(1, 1)).toBeGreaterThan(1);
    expect(sum(1, 1)).toBeTruthy();
  });

  test('should not return 2 when passing in 1 & 2', () => {
    // we can also use the 'not' keyword to assert 
    expect(sum(1, 2)).not.toBe(2);
  });
});

describe('minus', () => {
  let minusResult;
  beforeEach(() => {
    minusResult = calc.minus(2,1);
  });

  test('should return 1 when passing in 2 & 1', () => {
    expect(minusResult).toEqual(1);
  });

  test('should return 0 when passing in 2 & 2', () => {
    expect(minusResult).toEqual(0);
  });
});