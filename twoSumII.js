// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number.
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2,
//  added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  // left pointer will be the first number
  // right pointer will be the last number

  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  try {
    while (leftPointer < rightPointer) {
      const sum = numbers[leftPointer] + numbers[rightPointer];
      if (sum === target) {
        // if the sum of the two numbers is equal to the target, return the two indexes
        return [leftPointer + 1, rightPointer + 1];
      } else if (sum > target) {
        // if the sum of the two numbers is greater than the target, move the right pointer to the left
        rightPointer--;
      } else {
        // if the sum of the two numbers is less than the target, move the left pointer to the right
        leftPointer++;
      }
    }
    throw new Error("No two numbers add up to target");
  } catch (error) {
    return error;
  }
};

console.log(twoSum([2, 7, 11, 15], 29));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
