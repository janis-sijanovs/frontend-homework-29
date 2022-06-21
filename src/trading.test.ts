import trading from './trading';

test('if returns the profit', () => {
  const response = trading([0, 5]);

  expect(response).toBe(5);
});

test('if works with multiple numbers', () => {
  const response = trading([1, 5, 6, 9]);

  expect(response).toBe(8);
});

test('if returns 0 when no profit can be made', () => {
  const response = trading([9, 6, 3, 1]);

  expect(response).toBe(0);
});

test('if returns the biggest profit when multiple options are avalible', () => {
  const response = trading([2, 6, 3, 9, 1, 10]);

  expect(response).toBe(9);
});

test('if returns 0 when only one value is given', () => {
  const response = trading([7]);

  expect(response).toBe(0);
});
