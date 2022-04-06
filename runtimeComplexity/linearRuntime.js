const dogs = [
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 8 },
  { name: "Sunny", age: 1 },
  { name: "Tommy", age: 3 },
  { name: "Scooby", age: 4 },
  { name: "Lucky", age: 1 },
  { name: "Rambo", age: 2 },
  { name: "Rover", age: 3 },
  { name: "Sparky", age: 4 },
  { name: "Rover", age: 3 },
  { name: "Sparky", age: 4 },
  { name: "Rover", age: 3 },
  { name: "Sparky", age: 4 },
  { name: "Rover", age: 3 },
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 8 },
  { name: "Sunny", age: 1 },
  { name: "Tommy", age: 3 },
  { name: "Scooby", age: 4 },
  { name: "Lucky", age: 1 },
  { name: "Rambo", age: 2 },
  { name: "Rover", age: 3 },
  { name: "Sparky", age: 4 },
  { name: "Rover", age: 3 },
  { name: "Sparky", age: 4 },
  { name: "Rover", age: 3 },
  { name: "Sparky", age: 4 },
  { name: "Rover", age: 3 },
];

console.time("dogFilter");
const getDogGreaterThanTwo = () => dogs.filter((dog) => dog.age > 2);
console.timeEnd("dogFilter"); // 0.004ms

// this is linear, because for each element, 1 operation is performed
