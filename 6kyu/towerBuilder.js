// Params: Number - number of Floors - >0
// Returns: Array with Strings - Christmas Tree (given the season ;) )

function towerBuilder(nFloors) {
    const result = [];
    for (let i = 1; i <= nFloors; i++) {
        // calculate the number of stars for each floor
        const stars = "*".repeat(2 * i - 1);

        // calculate the number of spaces for each floor
        const whitespace = " ".repeat(nFloors - i);

        // build the string for this floor
        const rowStr = whitespace + stars + whitespace;

        // add this floor to the result
        result.push(rowStr);
    }
    return result;
}

// Example:
// towerBuilder(3) // returns
// [
// "  *  ",
// " *** ",
// "*****",
// ]
