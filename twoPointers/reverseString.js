// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// What does O(1) extra memory mean?
// if O(1) complexity means it uses the same amount of memory no matter how big the input is
// O(1) extra memory means the memory usage is constant. So in the case of this function,
// we only use 2 pointers and a temporary variable, no matter how big the input is.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 < p2) {
    // this while loop works from the outside in, swapping the first and last characters
    // then shifting left/right respectively until converging on the middle
    // which does not need to be modified
    const temp = s[p1];
    s[p1] = s[p2];
    s[p2] = temp;
    p1++;
    p2--;
  }
};

const str1 = new Array(50000).fill("a");
const str2 = ["H", "E", "L", "L", "O"];
console.time("reverseString");
reverseString(str1);
console.timeEnd("reverseString");
str1;
reverseString(str2);
str2;
console.time("stdRevString");
str1.reverse();
console.timeEnd("stdRevString");

// so the standard .reverse() method is almost twice as fast as this function
// I wonder how it works?
