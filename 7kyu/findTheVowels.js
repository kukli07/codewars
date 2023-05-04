function vowelIndices(word) {
    // all possible vowels
    const vowels = ["a", "e", "u", "i", "o", "y"];

    // Place to store all occuring vowel indices.
    const indices = [];

    // Loop over the word and store the index+1 inside indices, if
    // the char is a vowel.
    word.split("").forEach((char, idx) => {
        if (vowels.includes(char.toLowerCase())) {
            indices.push(idx + 1);
        }
    });

    // Return vowel indices
    return indices;
}
