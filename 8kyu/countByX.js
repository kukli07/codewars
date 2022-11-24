// @Parameters: x:Integer, n:Integer; both >0
// @Return: z:Array
function countBy(x, n) {
    const z = [];
    // for loop
    for (let i = 1; i <= n; i++) {
        // calculate multiples of x * i
        const multiple = x * i;
        // push multiple into z
        z.push(multiple);
    }
    return z;
}

// Examples:
// countBy(10,5) // returns: [10, 20, 30, 40, 50]
// countBy(3,4) // reuturns: [3,6,9,12]
