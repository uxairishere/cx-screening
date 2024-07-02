// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// First Approach 
const isPalindrome = (str) => {
    if(!str) return false

    const strArr = str.split('');
    let inverse = '';
    
    for(let i = strArr.length - 1 ; i >= 0; i--){
        inverse = inverse + strArr[i]
    }
    
    if(inverse !== str) return false
    return true
}

console.log(isPalindrome("madam"))

// Second Approach
const isPalindromeTwoPointers = (str) => {
    if (!str) return false;

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("madam")); // true