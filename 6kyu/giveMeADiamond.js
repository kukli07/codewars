function diamond(n) {
    // input validation
    if (n % 2 === 0 || n <= 0) return null;

    // declare result variable
    let result = "";

    // declare numOfSpaces variable for spaces up to Math.ceil(n/2)
    let numOfSpaces = n;
    // loop to n (the middle line)
    for (let i = 1; i <= n; i++) {
        numOfSpaces -= 1;
        if (i % 2 !== 0) {
            result += `${
                " ".repeat(Math.floor(numOfSpaces / 2)) + "*".repeat(i)
            }\n`;
        }
    }

    // declare numOfSpacesRe variable for spaces the rest of the way down
    let numOfSpacesRe = 1;
    // loop from n -1 (the line after the middle line) to 0
    for (let i = n - 1; i >= 0; i--) {
        numOfSpacesRe += 1;
        if (i % 2 !== 0) {
            result += `${
                " ".repeat(Math.floor(numOfSpacesRe / 2)) + "*".repeat(i)
            }\n`;
        }
    }
    return result;
}

// I did not know how to solve this problem in a clean way.
// I broke it down to 2 loops, one for the top half and one for the bottom half.
// I could not figure out how to calculate the amount of spaces, if you
// do it in one single loop.
