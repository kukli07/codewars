function sumArray(array) {
    if (array === null || !array || array.length <= 2) return 0;

    const sortedArray = [...array.sort((a, b) => a - b)]; // don't mutate the original array

    sortedArray.pop();
    sortedArray.shift();

    return sortedArray.reduce((prev, curr) => prev + curr, 0);
}

// Version with reduced time complexity of O(n) instead of O(n log n)
function sumArray2(array) {
    if (array === null || !array || array.length <= 2) return 0;

    const max = Math.max(...array);
    const min = Math.min(...array);

    return array.reduce((prev, curr) => prev + curr, 0) - max - min;
}
