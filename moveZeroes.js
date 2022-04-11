/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // So each pointer has a specific purpose
  // p1 iterates through the array, and moves once per loop no matter what
  // p2 iterates through the array, and moves once per loop ONLY if the current element is not zero

  let p1 = 0;
  let p2 = 0;
  while (p1 < nums.length) {
    if (nums[p1] !== 0) {
      // if the number is not zero, shift the number backwards to p2 and increment the p2 pointer by one
      // the amount of steps to shift will vary depending on how many zeroes have been encountered in a row
      nums[p2] = nums[p1];
      p2++;
    }
    // we increment the p1 pointer always
    p1++;
  }
  // by this point, p1 will have reached the end of the array
  // but p2 will be behind p1 by the exact number of zeroes encountered in the prior loop
  // meaning we can assign all the remaining indexes in the array to zero
  while (p2 < nums.length) {
    nums[p2] = 0;
    p2++;
  }
};
const nums1 = [0, 1, 0, 3, 12];
// const nums2 = [0]
moveZeroes(nums1);
// moveZeroes(nums2);

nums1;
// nums2

// Given an integer array nums, move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
