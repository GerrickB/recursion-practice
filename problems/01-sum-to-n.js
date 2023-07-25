/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

// your code here
// const sumToN = num => {
//   if (num === 0) {
//     return null;
//   }

//   return num + sumToN(num - 1);
// }

const sumToN = (num, total = 0) => {
  if (num < 0) {
    return null;
  }

  if (num === 0) {
    return total;
  }

  return sumToN(num - 1, total + num);
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
