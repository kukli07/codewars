function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return "";
    }

    let result = "";
    for (let i = 0; i < strarr.length; i++) {
        let longStr = "";

        // Concatenate the next k strings
        for (let j = 0; j < k; j++) {
            if (strarr[i + j]) {
                longStr += strarr[i + j];
            }
        }
        // Compare length of the concatenated string with the current result
        if (longStr.length > result.length) {
            result = longStr;
        }
    }
    return result;
}

// Optimization:
// Use String.slice(i, i + k) instead of a for loop to concatenate the next k strings
// performance wise it might be the same, but easier to read
