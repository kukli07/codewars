// Paramas: Number - n - n >= 0
// Return: Number - sum - sum of series

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// => 1 / 1 + (3 * i); 0 <= i <= n

function SeriesSum(n) {
    // create sum variable
    let sum = 0;
    // loop from 0 to n
    for (let i = 0; i < n; i++) {
        // add result to sum
        sum += 1 / (1 + 3 * i);
    }
    // Transform sum to decimal and string
    sum = sum.toFixed(2);
    // return sum
    return sum;
}

// Example:
// console.log(SeriesSum(2)); // returns 1.25

// TIL: toFixed() returns a string and not a number!
