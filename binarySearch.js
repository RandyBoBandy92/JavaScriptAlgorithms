/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  // binary search works by cutting up the array into 3 chunks:
  // the first half
  // the middle
  // the second half
  let start = 0;
  let end = nums.length - 1;
  // the while loop will iterate until either a result is found, or the start value
  // becomes larger than the end value, which breaks the loop and returns -1 (indicating not found)
  while (start <= end) {
    // find the middle index
    const mid = Math.floor((start + end) / 2);
    //   if the middle is the target, return the middle index
    if (nums[mid] === target) {
      return mid;
      //   if the target is greater than the mid point
      // the target cannot be found in the first 50% of values
    } else if (target > nums[mid]) {
      // so we shift the start to be 1 index value higher than the previous mid
      start = mid + 1;
    } else {
      // otherwise, the target is less than the middle
      // so we shift the end to be one index value lower than the previous mid
      end = mid - 1;
    }
  }
  // if it finds nothing
  return -1;
};

// Given an array of integers nums which is sorted in ascending order,
// (ascending means from smallest to largest)
// and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.
console.log(search([-1, 0, 3, 5, 9, 12], 9));

console.log(search([-1, 0, 3, 5, 9, 12], 2));
