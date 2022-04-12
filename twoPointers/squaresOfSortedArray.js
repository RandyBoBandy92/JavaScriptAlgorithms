/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  //  so squaring, and then sorting the newly squared values
  // it seems the difference between ascending and non-decreasing is essentially this:
  // ascending: 1,2,3,4,5,6
  // non-decreasing: 1,2,2,2,3,4,5,6
  // and the goal is to write an algorithm that has linear complexity O(n)
  const newArray = [];
  for (let index = 0; index < nums.length; index++) {
    const number = nums[index];
    newArray.push(number ** 2);
  }
  return newArray.sort((a, b) => a - b);
};

var sortedSquaresBetter = function (nums) {
  // okay now let's try to write one that is better
  // and by write, i mean find a better solution online and then reverse engineer why it works ;)
  const sortedArray = [];
  let start = 0;
  let end = nums.length - 1;
  let index = end;

  // So we use "two pointers" to track the start and end
  // My understanding here is because we can trust the array input to already be ordered
  // in a non-descending way, we need only compare these two pointers instead of sorting
  // the completed array after the fact

  // then we also track the index value separately from the end, because there
  // are cases where we need to decrement the index but not decrement the end

  // so I guess this is 3 pointers? I wonder if there is a better way this can be written

  while (start <= end) {
    const startSquare = nums[start] ** 2;
    const endSquare = nums[end] ** 2;
    // we square the two numbers and compare them to eachother
    if (startSquare < endSquare) {
      // the endSquare is larger
      // so we add it to the array and decrement
      // by 1 on index and end
      sortedArray[index] = endSquare;
      index--;
      end--;
    } else {
      // the startSquare is larger
      // we add the startSquare to the array
      // and decrement the index
      // but increment the start value
      sortedArray[index] = startSquare;
      index--;
      start++;
    }
    // once the start value is greater than the end, the while loop breaks
    // and we return the completed array
  }

  return sortedArray;
};

// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

console.time("sortedSquares");
console.log(sortedSquares([-4, -1, 0, 3, 3, 3, 3, 3, 3, 3, 10]));
console.timeEnd("sortedSquares"); // 0.247ms

console.time("sortedSquaresBetter");
console.log(sortedSquaresBetter([-4, -1, 0, 3, 3, 3, 3, 3, 3, 3, 10]));
console.timeEnd("sortedSquaresBetter"); // 0.149ms
