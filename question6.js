/* Write a function that will take an array as input, it will rotate the array to the right 1 time
and return the rotated array. Rotation of the array means that each element is shifted right
by one index. For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7] */

// Approach 1:
const A0 = [3, 8, 9, 7, 6];

const rotateArray0 = (arr) => {
    if (arr.length <= 1) return arr;
    const lastElement = arr.pop();
    arr.unshift(lastElement);

    return arr;
}

const rotatedArray = rotateArray0(A0);
console.log(rotatedArray);

// Approach 2:
const A1 = [3, 8, 9, 7, 6];

const rotateArray1 = (arr) => {
    if (arr.length <= 1) return arr;

    const lastElement = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = lastElement;

    return arr;
}

const rotatedArray1 = rotateArray1(A1);
console.log(rotatedArray1);