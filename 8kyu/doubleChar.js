// Params: String
// Return: String - case-sensitive

function doubleChar(str) {
    // split str
    const strArr = str.split("");
    // map split str and double each char, then join it back together
    const result = strArr.map((char) => char + char).join("");
    // return result
    return result;
}

// Examples:
// doubleChar("Tim") // returns "TTiimm"
