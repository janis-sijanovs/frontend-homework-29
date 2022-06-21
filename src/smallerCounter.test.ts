import smallerCounter from './smallerCounter';

test('if returns a same length array', () => {
  const response = smallerCounter([0, 5, 5, 3, 7]);

  expect(response).toHaveLength(5);
});

test('if returns 0 with the same number given', () => {
  const response = smallerCounter([5, 5]);

  expect(response).toStrictEqual([0, 0]);
});

test('if returns 0 when only one number is given', () => {
  const response = smallerCounter([100]);

  expect(response).toStrictEqual([0]);
});

test('if works with positive integers', () => {
  const response = smallerCounter([2, 5, 9, 1, 4]);

  expect(response).toStrictEqual([1, 3, 4, 0, 2]);
});

test('if works with negative integers', () => {
  const response = smallerCounter([-2, -5, -9, -1, -4]);

  expect(response).toStrictEqual([3, 1, 0, 4, 2]);
});

test('if works with positive and negative integers', () => {
  const response = smallerCounter([-2, 5, -9, 1, -4]);

  expect(response).toStrictEqual([2, 4, 0, 3, 1]);
});

test('if works with floats', () => {
  const response = smallerCounter([-2.1, 5.4, -9.8, 1.5, -4.53]);

  expect(response).toStrictEqual([2, 4, 0, 3, 1]);
});
