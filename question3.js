/* Write a function that will take an array as input and return the sum of the two largest
numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
because 11 and 19 are the largest numbers. */

const arr = [3,7,1,5,11,19]

const sumOfTwoLargestNumbers = (arr) => {
    if (arr.length < 2)  throw new Error("Array must contain at least two elements"); 

    let max1 = -Infinity;
    let max2 = -Infinity;

    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    return max1 + max2;
}

console.log(sumOfTwoLargestNumbers(array));