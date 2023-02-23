// Params: n - Number - 0 <= n <= 12
// Returns: result - Number - Factorial of n

function factorial(n) {
    // input validation
    if (n < 0 || n > 12) throw new RangeError();

    // create result variable
    let result = 1;
    // loop over n, i=1, up to n
    for (let i = 1; i <= n; i++) {
        // multiply result with i
        result *= i;
    }

    // return result
    return result;
}

// Examples
// factorial(3) // returns 3 * 2 * 1 = 6
