// params: string
// returns: string[] , letter capitalized even and odd seperatly

function capitalize(str) {
    // create str array for even
    const strEven = str
        .split("")
        .map((char, idx) => (idx % 2 === 0 ? char.toUpperCase() : char))
        .join("");

    // create str array for odd
    const strOdd = str
        .split("")
        .map((char, idx) => (idx % 2 !== 0 ? char.toUpperCase() : char))
        .join("");

    // return result
    return [strEven, strOdd];
}

// Example:
// capitalize("abcdef") returns ['AbCdEf', 'aBcDeF']
