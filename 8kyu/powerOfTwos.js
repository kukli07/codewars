function powersOfTwo(n) {
    // create result array
    const result = [];
    // loop from 0 to n
    for (let i = 0; i <= n; i++) {
        // calculate 2^i
        const power = 2 ** i;
        // push result to result array
        result.push(power);
    }
    // return result array
    return result;
}
