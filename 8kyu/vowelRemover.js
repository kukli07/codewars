// Params: String
// Returns: String - removed all lowercase vowels from input string

function shortcut(str) {
    // create variable with lowercase vowels
    const vowels = ["a", "e", "i", "o", "u"];

    // loop over input string
    const result = str
        .split("")
        .map((char) => {
            // check if it is a lowercase vowel
            if (vowels.includes(char)) {
                // yes? remove
                return "";
            }
            // no? keep
            return char;
        })
        .join("");

    // return result
    return result;
}

// Example:
// shortcut("My name is Tim") // returns "My nm s Tm";
