// Paramters: message: string; a-z(97-122) & A-Z(65-90)
// Returns: string, letters offset by +13 postions inside the alphabet

function rot13(message) {
    // split message into letters & Transform letters into UTF-16
    const letters = message.split("").map((letter) => letter.charCodeAt(0));
    // Add 13 to the Unicode, if it is a latin char
    // If sum is out of range, add the rest to the beginning of the range
    const newLetters = letters.map((charCode) => {
        // Check if inside both ranges (latin char)
        if (
            (charCode > 96 && charCode < 123) ||
            (charCode > 64 && charCode < 91)
        ) {
            // LOWER CASE + OUT OF BOUNDS
            if (charCode > 96 && charCode + 13 > 122) {
                const rest = charCode + 13 - 123;
                return 97 + rest;
            }
            // UPPER CASE + OUT OF BOUNDS
            if (charCode <= 90 && charCode + 13 > 90) {
                const rest = charCode + 13 - 91;
                return 65 + rest;
            }
            return charCode + 13;
        }
        // Outside of both ranges (No Latin Char)
        return charCode;
    });
    // Transform new Unicodes into letters, combine and return them
    return newLetters
        .map((newCharCodes) => String.fromCharCode(newCharCodes))
        .join("");
}

// Examples:
// console.log(rot13("Ruby is cool!")); // returns "Gvz"
