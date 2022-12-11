// Params:
// String - operation - "+", "-", "/", "*"
// Number - value1 - no restrictions
// Number - value2 - ""
// Return: Number
function basicOp(operation, value1, value2) {
    // create variable for the whole statement
    const statement = value1 + operation + value2;
    // evaluate and then return the result
    return eval(statement);
}

// Examples:
// basicOp("+", 2, 2) // returns 4
// basicOp("-", -2, -2) // returns 0

// I know eval is a security risk, but it is fun! :D
// Actual solution below:

function basicOp2(o, v1, v2) {
    switch (o) {
        case "+":
            return v1 + v2;
        case "-":
            return v1 - v2;
        case "/":
            return v1 / v2;
        case "*":
            return v1 * v2;

        default:
            return "Invalid operation";
    }
}
