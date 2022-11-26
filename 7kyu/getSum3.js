// @Params: two integers a & b; positive and negative incl. zero
// @Return: Sum of ALL numbers between a & b incl a & b; a === b ? return a || b

function getSum(a, b) {
    // if they are the same return a
    if (a === b) return a;
    // sort a,b
    const input = [a, b].sort((c, d) => c - d);
    console.log(input);
    // loop from a to b and push each num into an array
    const result = [];
    for (let i = input[0]; i <= input[1]; i++) {
        result.push(i);
    }
    console.log(result);
    // calculate sum of the new array
    return result.reduce((prev, curr) => prev + curr, 0);
    // return sum
}

// Example:
// getSum(10,2) // returns 10+9+8+7+6+5+4+3+2 = 54
// getSum(2,-3) // returns 2+1+0+-1+-2+-3 = -3
// getSum(1, 3) // returns 1+2+3 = 6

// Note: Lol Math.max() and Math.min() would have been easier. I'm a dumb dumb.
