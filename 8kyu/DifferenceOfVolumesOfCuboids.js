function findDifference(a, b) {
    const cubeA = a.reduce((prev, curr) => prev * curr);
    const cubeB = b.reduce((prev, curr) => prev * curr);

    return cubeA > cubeB ? cubeA - cubeB : cubeB - cubeA;
}

// TIL: I could have just used Math.abs() instead of the ternary operator.
