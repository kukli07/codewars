function sumOfDifferences(arr) {
    // Sort array in descending order
    const arrDesc = arr.sort((a, b) => b - a);
    // Create Result sum variable
    let sum = 0;

    // Loop over array, up to n-1 and sum the pairs
    for (let i = 0; i < arrDesc.length - 1; i++) {
        const item = arrDesc[i];
        const nextItem = arrDesc[i + 1];

        sum += item - nextItem;
    }

    // Return result
    return sum;
}

// Wow the top solution is so much cleaner. I love it.
function sumOfDifferences2(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
