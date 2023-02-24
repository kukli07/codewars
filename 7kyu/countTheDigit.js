function nbDig(n, d) {
    const nSquared = [];

    for (let i = 0; i <= n; i++) {
        nSquared.push(i ** 2);
    }

    let counter = 0;

    nSquared.forEach((num) => {
        String(num)
            .split("")
            .forEach((digit) => {
                if (digit === String(d)) {
                    counter++;
                }
            });
    });

    return counter;
}
// O(n), but not really optimized

// Optimized solution:

function nbDig2(n, d) {
    let count = 0;

    for (let i = 0; i <= n; i++) {
        const square = i ** 2;
        // Split the square at the digit, then we can count the number of times
        // the digit appears, by counting the number of subarrays - 1!
        const digitCount = square.toString().split(d.toString()).length - 1;
        count += digitCount;
    }

    return count;
}
// O(n)

// Example for the counting trick:
// console.log("9398473578382394".split("2"))
// returns ["939847357838", "394"]
// it splits the array into 2 subarrays, so the digit appears 1 time
