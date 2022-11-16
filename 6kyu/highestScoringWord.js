function high(x) {
    const words = x.split(" ");

    // Create an array of arrays, where each sub-array contains the word and its score
    const scores = words.map((word) => [
        word,
        word
            .split("")
            .reduce((prev, curr) => prev + curr.charCodeAt(0) - 96, 0),
    ]);

    // Find highest number inside scores
    let result = "";
    let max = 0;
    scores.forEach(([word, score]) => {
        if (score > max) {
            [result, max] = [word, score];
        }
    });
    return result;
}

// Came up with  the charCodeAt() solution myself! :)

// TIL: could have let the scores array without the word itself and the used:
// scores[scores.indexOf(Math.max(...scores))]
// it returns the index inside of the scores array of the highest number and this index
// can then be used with the words array to get the word with the highest score
// really clever! no forEach() loop needed with unnecessary variables
