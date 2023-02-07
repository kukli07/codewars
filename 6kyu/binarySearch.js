function binarySearch(arr, searchVal) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const middle = Math.floor((right + left) / 2);

        if (arr[middle] === searchVal) {
            return middle;
        }
        if (arr[middle] < searchVal) {
            // goto right side
            left = middle + 1;
        } else if (arr[middle] > searchVal) {
            // goto left side
            right = middle - 1;
        }
    }
    return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5);
