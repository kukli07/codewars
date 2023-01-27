// Params: Array[Number]
// Returns: String -> Format of Phone Number

function createPhoneNumber(numbers) {
    let numbersStr = numbers.unshift("(");
    numbersStr = numbers.join("");
    numbersStr = `${numbersStr.slice(0, 4)}) ${numbersStr.slice(4)}`;
    numbersStr = `${numbersStr.slice(0, 9)}-${numbersStr.slice(9)}`;

    return numbersStr;
}

// Example:
// createPhoneNumber([[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // returns "(433) 681-2721"

// Wow found this solution on codewars and it's so much better than mine
function createPhoneNumber2(numbers) {
    let format = "(xxx) xxx-xxxx";

    for (let i = 0; i < numbers.length; i++) {
        format = format.replace("x", numbers[i]);
    }

    return format;
}
