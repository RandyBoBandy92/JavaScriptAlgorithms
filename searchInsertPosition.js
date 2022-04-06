/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  //  so i am sorting through the array, and if i find the target i return the index
  // if not i have to return what the index should be
  let start = 0;
  let end = nums.length - 1;
  //  starts off similar to a binary search
  while (start <= end) {
    // while the start is less than or equal to the end, we calculate the mid and see if it is on target
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      // we return the index of mid if it matches the target number
      return mid;
    } else if (target > nums[mid]) {
      // otherwise, we incremement/decrement the start/end depending
      // on whether or not the target is higher or lower than the mid
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  // here the while loop has ended, meaning if the function is still running we
  // did not find a match for target.

  // if we reach this level, the start variable ends up
  // containing the index the target /should/ have been at.

  // because the mid always ends up lower than the target
  // causing the start variable to be incremented to the
  // correct starting index for the missing number.
  return start;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
