// Params: Array with Numbers;
// Return: Number - Sum of numbers
function squareSum(numbers) {
    // create empty result variable
    let result = 0;
    // create new array with squared numbers
    const numSq = numbers.map((num) => num ** 2);
    // calculate sum of squared numbers and store it in result
    result = numSq.reduce((prev, curr) => prev + curr, 0);
    // return result
    return result;
}

// Example:
// squareSum([1,2,3]) // returns 14

// Optimizations:
// 1. Use just reduce instead of map and reduce. (I wanted it to be more readable)
