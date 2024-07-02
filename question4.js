/* Write a function that will take an array as input and return an array with every missing
element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
entry is 9, and missing numbers are [0,5,8] */

const array = [3, 4, 9, 1, 7, 3, 2, 6];

const findMissingElements = (arr) => {
    if (arr.length === 0) {
        return [];
    }
    
    const maxVal = Math.max(...arr);
    const elementsSet = new Set(arr);
    const missingElements = [];
    
    for (let num = 0; num <= maxVal; num++) {
        if (!elementsSet.has(num)) {
            missingElements.push(num);
        }
    }
    
    return missingElements;
}

const missingNumbers = findMissingElements(array);
console.log(missingNumbers);