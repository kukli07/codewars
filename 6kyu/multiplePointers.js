// Write a function that accepts a sorted array of numbers and counts
// the amount of unique numbers. Use the Multiple Pointers pattern

function uniqueNumbers(numArr) {
    // pointers
    let p1 = 0;
    let p2 = 1;

    while (p2 < numArr.length) {
        if (numArr[p1] === numArr[p2]) {
            p2++;
        } else {
            p1++;
            numArr[p1] = numArr[p2];
        }
    }
    return p1 + 1;
}

const result = uniqueNumbers([1, 1, 3, 3, 5, 5, 7, 8, 9, 11, 11, 11]);

console.log(result);
