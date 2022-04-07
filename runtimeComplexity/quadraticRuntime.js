const fruit = [
  "🍓",
  "🍐",
  "🍊",
  "🍋",
  "🍌",
  "🍉",
  "🍇",
  "🍓",
  "🍐",
  "🍊",
  "🍋",
  "🍌",
  "🍉",
  "🍇",
];

const matcher = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // each iteration of i, causes n^2 operations to be performed by j
      if (i !== j && array[i] === array[j]) {
        return `Match found at ${i} and ${j}`;
      }
    }
  }
  return "No matches found 😞";
};

console.time("matcher");
console.log(matcher(fruit));
console.timeEnd("matcher"); // 0.154ms
