/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// your code here
const addToTwelve = arr => {

  if (arr.length === 0) {
    return false;
  }
  console.log(arr)
  console.log(`${arr[0]} + ${arr[1]} = 12?`)

  // adds first 2 nums then removes 1st num from array
  if (arr[0] + arr[1] === 12) {
    return true;
  } else {
    arr.shift()
    return addToTwelve(arr);
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
