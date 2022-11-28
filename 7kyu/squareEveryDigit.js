// @Parameters: num:Integer ;
// @Returns: Integer

function squareDigits(num) {
    // transform num into String and Split it
    let numStringArray = num.toString().split("");
    // map num array and calculate num^2
    numStringArray = numStringArray.map((numStr) => Number(numStr) ** 2);
    // return concatenated num array
    return Number(numStringArray.join(""));
}

// Example:
// squareDigits(15) // returns 1^2 + 5^2 = 125
// squareDigits(-500) // returns -5^2 + 0^2 + 0^2 = 2500
