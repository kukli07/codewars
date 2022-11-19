// @Parameters: Array of arrays/pairs containing integers, always positiv, second int between -2 - +26
// @Return: Array containing strings, "Open" || "Senior"

function openOrSenior(data) {
    const result = [];
    // Loop trough Array of pairs
    data.forEach((pair) => {
        // If older than 55 and higher handicap than 7 add "Senior", else "Open"
        if (pair[0] >= 55 && pair[1] > 7) {
            result.push("Senior");
        } else {
            result.push("Open");
        }
    });
    // Return new Array with "Open" and "Senior"
    return result;
}

// @Examples:
// openOrSenior([[18,20], [45,2], [84,24], [33,2]]) // returns ["Open", "Open", "Senior", "Open"]
