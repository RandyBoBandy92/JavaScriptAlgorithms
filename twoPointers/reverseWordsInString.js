// Given a string s, reverse the order of characters in each word within a sentence
// while still preserving whitespace and initial word order.

// Constraints:

//     1 <= s.length <= 5 * 104
//     s contains printable ASCII characters.
//     s does not contain any leading or trailing spaces.
//     There is at least one word in s.
//     All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s.split(" ");
  for (let index = 0; index < words.length; index++) {
    words[index] = words[index].split("").reverse().join("");
  }
  return words.join(" ");
};

const test1 = "Let's take LeetCode contest";
const test2 = "the sky is blue";

console.log(reverseWords(test1));
