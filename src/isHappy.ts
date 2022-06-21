// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay),
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

const isHappy = (num: number): boolean => {
  const squareDigits = (targetNumber: number): number => targetNumber.toString().split('').reduce((prev, curr) => (
    prev + (+curr) ** 2.0
  ), 0);

  let testNumber = num;

  for (let i = 0; i < 100; i += 1) {
    testNumber = squareDigits(testNumber);
    if (testNumber === 1) {
      return true;
    }
  }
  return false;
};

export default isHappy;
