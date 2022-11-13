function highAndLow(numbers) {
    const numArr = numbers.split(" ");

    return [Math.max(...numArr), Math.min(...numArr)].join(" ");
}

// Oh just found out something interesting about this solution:
// However, both spread (...) and apply will either fail or return the wrong result
// if the array has too many elements, because they try to pass the array elements as function
//  parameters. See Using apply and built-in functions for more details. The reduce solution
//  does not have this problem.

// const arr = [1, 2, 3];
// const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
// const min = arr.reduce((a, b) => Math.min(a, b), Infinity);
