const twoSum = function (nums, target) {
  let hashTable = {};
  let resultIndexes = [];
  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = i;
  }

  for (let index = 0; index < nums.length; index++) {
    const number = nums[index];
    let goalNumber = target - number;
    if (hashTable[goalNumber] && hashTable[goalNumber] !== index) {
      resultIndexes.push(index);
      resultIndexes.push(hashTable[goalNumber]);
      return resultIndexes;
    }
  }
  throw new Error("Numbers do not add up to target");
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 3], 10));
