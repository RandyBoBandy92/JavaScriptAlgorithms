// so i can use console.time('functionName') and console.timeEnd('functionName) to measure performance of things

// lets make an array with 50000 things in it, and then loop over them using different things

const bigArray = new Array(50000).fill(0).map((x, i) => i);

// lets use a for loop which adds 1 to each item in the array

console.time("forLoop");

for (let index = 0; index < bigArray.length; index++) {
  const number = bigArray[index];
  bigArray[index] = number + 1;
}

console.timeEnd("forLoop"); // 5.5ms

// now lets use a forEach loop which adds 1 to each item in the array

console.time("forEachLoop");

bigArray.forEach((number, index) => {
  bigArray[index] = number + 1;
});

console.timeEnd("forEachLoop"); // 3ms

// now lets do a for in loop which adds 1 to each item in the array

console.time("forInLoop");

for (let number in bigArray) {
  bigArray[number] = bigArray[number] + 1;
}
console.timeEnd("forInLoop"); // 9ms

// so the forEach loop is the fastest... i wonder why?
