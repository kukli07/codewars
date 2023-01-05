// Params: Number - number - Provided Number.
// Returns: String - result - Provided Number spelled out.

function switchItUp(number) {
    // switch block
    switch (number) {
        // case 0
        case 0:
            return "Zero";
        // case 1
        case 1:
            return "One";
        // case 2
        case 2:
            return "Two";
        // case 3
        case 3:
            return "Three";
        // case 4
        case 4:
            return "Four";
        // case 5
        case 5:
            return "Five";
        // case 6
        case 6:
            return "Six";
        // case 7
        case 7:
            return "Seven";
        // case 8
        case 8:
            return "Eight";
        // case 9
        case 9:
            return "Nine";
        default:
            return "Invalid Number";
    }
}

// Example:
// switchItUp(9) // returns "Nine"
