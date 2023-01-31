// Params: String
// Return: String (all five+ letter words reversed)

function spinWords(string) {
    // turn string into array
    const words = string.split(" ");
    // loop over array with map
    const result = words
        .map((word) => {
            // check length of word
            if (word.length >= 5) {
                // if length >= 5, return reversed word
                return word.split("").reverse().join("");
            }
            // if lemgth <5, return word
            return word;
        })
        .join(" "); // join array back to string

    // return result
    return result;
}

// Example:
// spinWords("Hello my Name is Osututa") // returns "olleH my Name is atutusO";

// Big O:
// O(n)
