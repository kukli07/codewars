// Params: String - delimited by - or _
// Returns: String - in camelCase (if first char is uppercase, keep it)

function toCamelCase(str) {
    if (!str.length) return "";
    // Check which delimiter is being used
    const delimiter = /[_-]/g;
    // Split text by delimiter
    const splitStr = str.split(delimiter);
    // loop over array and transform first char to uppercase
    const result = splitStr
        .map((word, i) => {
            // Skip first word
            if (i === 0) return word;

            const camelWord = word[0].toUpperCase() + word.slice(1);
            return camelWord;
        })
        .join("");

    // join Array and return
    return result;
}

// Example:
// toCamelCase("hello-world") // returns "helloWorld"
// toCamelCase("My-name-is-Tim") // returns "MyNameIsTim"
