// @Parameters: Array mit Integers, greater or less than 0
// @Return: Sum of all positive integers

function positiveSum(arr) {
    // filter out all negative numbers
    const filteredArr = arr.filter((num) => num > 0);
    // calculate the sum of all integers inside filtered array
    // return sum
    return filteredArr.reduce((prev, curr) => prev + curr, 0);
}

// Examples:
// positiveSum([1,2,3,-4]) // returns: 1 + 2 + 3 = 6
// positiveSum([-2,-3]) // return: 0
