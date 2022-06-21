import isHappy from './isHappy';

test('if determines a happy number', () => {
  const response = isHappy(10);

  expect(response).toBe(true);
});

test('if determines an unhappy number', () => {
  const response = isHappy(2);

  expect(response).toBe(false);
});

test('if returns a falsy value when given a non integer', () => {
  const response = isHappy(10.10);

  expect(response).toBeFalsy();
});

test('if works with bigger integers', () => {
  const response = isHappy(5525);

  expect(response).toBe(true);
});

test('if determines an unhappy number with long integers', () => {
  const response = isHappy(22222222222222222222222222222);

  expect(response).toBe(false);
});
