import sortSentence from './sortSentence';

test('if removes the number', () => {
  const response = sortSentence('Hello1');

  expect(response).toBe('Hello');
});

test('if sorts by the number', () => {
  const response = sortSentence('there2 hello1');

  expect(response).toBe('hello there');
});

test('if works with capitalized letters', () => {
  const response = sortSentence('MonEy2 My1');

  expect(response).toBe('My MonEy');
});

test('if works with long sentences', () => {
  const response = sortSentence('eat4 yummy6 some5 I1 to3 pizza7 want2');

  expect(response).toBe('I want to eat some yummy pizza');
});

test('if works with empty string', () => {
  const response = sortSentence('');

  expect(response).toBe('');
});
