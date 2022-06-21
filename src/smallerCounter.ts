// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

const smallerCounter = (targetArray: number[]): number[] => targetArray.map((num) => (
  targetArray.reduce((prev, curr) => (
    curr < num ? prev + 1 : prev
  ), 0)
));

export default smallerCounter;
