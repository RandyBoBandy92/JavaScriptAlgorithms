/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // I also had to look this one up.. i spent hours trying my own method that worked fine with odd numbers, but broke on even numbers.. Oh well.
  // so if the length of the array is greater than the step
  if (nums.length > k) {
    // we essentially split the array in 2, at the inflection point of the desired step
    // and slam them back together, but in reverse order
    nums.unshift(...nums.splice(-k));
  } else {
    //   but when the step is larger than the length of the array we must account for an edge case
    let i = 0;
    while (i < k) {
      // splice no longer works when the step is larger, so we are forced to perform several unshifts
      // until the desired step count is reached
      nums.unshift(nums.pop());
      i++;
    }
  }
};

const num1 = [-1, -100, 3, 99];

console.time("rotate");
console.log(rotate(num1, 5));
console.timeEnd("rotate"); // 0.122ms
num1;
