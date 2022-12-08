function wave(str) {
    const result = [];

    str.split("").forEach((char, i) => {
        // check if the character is not a space
        if (char !== " ") {
            // get the substring from the beginning to the character
            const start = str.slice(0, i);
            // change the character to uppercase
            const upper = char.toUpperCase();
            // get the substring from the character to the end of the string
            const end = str.slice(i + 1, str.length);

            // add the new string to the result array
            result.push(start + upper + end);
        }
    });

    return result;
}
