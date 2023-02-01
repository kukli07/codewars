// Params: Number, Number
// Return: Number, greatest divisor of input params

function mygcd(x, y) {
    // determine greater number
    const small = Math.min(x, y);
    // Euclidean algorithm
    const big = Math.max(x, y) % small;

    // greater num % smaller num === 0
    if (big % small === 0) {
        // if yes, return any num
        return small;
    }
    // if not, put nums back into function
    return mygcd(big, small);
}

// Example:
// mygcd(10,10) // returns 10
// mygcd(20,5) // returns 5
// mygcd(18, 54) // returns 9
