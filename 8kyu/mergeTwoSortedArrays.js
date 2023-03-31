function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

function mergeArrays(arr1, arr2) {
    const mergedArr = [arr1, arr2].flat();

    const sortedArray = removeDuplicates(mergedArr).sort((a, b) => a - b);

    return sortedArray;
}
