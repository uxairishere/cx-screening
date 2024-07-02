/* Write a function that will take an array as input, sort, and return the array in descending
order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2]. */

const nums = [3, 2, 7, 4, 6, 9];

const sortDescending = (arr) => {
    if (arr.length <= 1) return arr; 

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...sortDescending(left), pivot, ...sortDescending(right)];
}

console.log(sortDescending(nums));
