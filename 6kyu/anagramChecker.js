/* eslint-disable no-return-assign */
function checkAnagram(word, word2) {
    // Validation
    if (word === word2 || word.length !== word2.length) return false;

    const wordCounter = {};
    const word2Counter = {};

    word.split("").forEach((char) => {
        if (wordCounter[char]) {
            return wordCounter[char]++;
        }
        return (wordCounter[char] = 1);
    });
    word2.split("").forEach((char) => {
        if (word2Counter[char]) {
            return word2Counter[char]++;
        }
        return (word2Counter[char] = 1);
    });

    let result = true;

    Object.keys(wordCounter).forEach((key) => {
        if (wordCounter[key] !== word2Counter[key]) {
            result = false;
        }
    });

    return result;
}
