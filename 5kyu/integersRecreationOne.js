function listSquared(m, n) {
    const result = [];
    // go through numbers m to n
    for (let i = m; i <= n; i++) {
        // for each number, get their squared divisors
        const divisors = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisors.push(j ** 2);
            }
        }
        // sum their divisors
        const sum = divisors.reduce((prev, curr) => prev + curr, 0);

        // check if the sum is a perfect square
        if (Math.floor(Math.sqrt(sum)) === Math.sqrt(sum)) {
            // if yes, add number and sum as a pair to results
            result.push([i, sum]);
        }
    }
    return result;
}
