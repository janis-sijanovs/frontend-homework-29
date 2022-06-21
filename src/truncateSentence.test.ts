import truncateSentence from './truncateSentence';

test('if turncates one word', () => {
  const response = truncateSentence('No words', 1);

  expect(response).toBe('No');
});

test('if turncates multiple words', () => {
  const response = truncateSentence('Hey this is a long sentence', 1);

  expect(response).toBe('Hey');
});

test('if leaves multiple words', () => {
  const response = truncateSentence('I am hungry and sad', 3);

  expect(response).toBe('I am hungry');
});

test('if works when number is too big', () => {
  const response = truncateSentence('No biting', 10);

  expect(response).toBe('No biting');
});

test('if returns a blank string when Secieved a blank string', () => {
  const response = truncateSentence('', 2);

  expect(response).toBe('');
});

test('if returns a blank string when word count is 0', () => {
  const response = truncateSentence('No changes', 0);

  expect(response).toBe('');
});
