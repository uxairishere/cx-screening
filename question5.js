/* Write a function that will take an array of numbers and return the number most repeated
in the array with how many times it was repeated. For example, if the array is
[4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times. */

const arr = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];

const findMostRepeatedNumber = (arr) => {
    const numCount = {};
  
    for (let num of arr) {
      numCount[num] = (numCount[num] || 0) + 1;
    }
  
    let mostRepeatedNum = null;
    let maxCount = 0;
  
    for (let num in numCount) {
      if (numCount[num] > maxCount) {
        maxCount = numCount[num];
        mostRepeatedNum = num;
      }
    }
  
    return `${mostRepeatedNum} is repeated ${maxCount} times.`;
  }
  
  console.log(findMostRepeatedNumber(arr));