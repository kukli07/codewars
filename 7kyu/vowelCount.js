function getCount(str) {
    const mainString = str.split("");
    const searchArray = ["a", "e", "i", "o", "u"];
    let matchCount = 0;

    for (let i = 0; i < searchArray.length; i++) {
        mainString.forEach((char) => {
            if (char === searchArray[i]) {
                matchCount++;
            }
        });
    }
    return matchCount;
}

// Optimization with str.match and regex possible
