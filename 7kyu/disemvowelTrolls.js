// @Parameters: str: String
// @Returns: Same String without vowel [a,e,u,i,o]
function disemvowel(str) {
    // create array with vowels
    const vowels = ["a", "e", "u", "i", "o", "A", "E", "U", "I", "O"];
    // split str into chars
    const splitStr = str.split("");
    // filter str and return it
    return splitStr.filter((char) => !vowels.includes(char)).join("");
}

// Example:
// disemvowel("I love cheese") // return " lve chs"

// Once again: Regex is cheating!
