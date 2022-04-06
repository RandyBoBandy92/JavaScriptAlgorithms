// make an array called nums that has 500000 numbers in it
const nums = [];

for (let index = 1; index < 500000; index++) {
  nums.push(index);
}
nums;

const sumHarder = (arr) => {
  // This is linear, O(n)
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.time("sumHarder");
console.log(sumHarder(nums));
console.timeEnd("sumHarder"); // 15.3ms

function sumSmarter(arr) {
  // this is O(1)
  // because no matter how big the array is, the operations take the same amount of time
  return (arr.length * (arr.length + 1)) / 2;
}

// as far as I understand it, this can only work if the array is composed of sequential numbers
// and does not have any duplicates, or 0s

console.time("sumSmarter");
console.log(sumSmarter(nums));
console.timeEnd("sumSmarter"); // 0.108ms
