function count(string) {
    const chars = string.split("");
    const charCount = {};

    chars.forEach((char) => {
        if (!charCount[char]) {
            charCount[char] = 0;
        }
        charCount[char] += 1;
    });
    return charCount;
}
