function naiveSearch(str1, str2) {
    // Initialize the result variable to 0
    let result = 0;

    // Outer loop to check for each character in str1
    for (let i = 0; i < str1.length - str2.length + 1; i++) {
        // Inner loop to check for the occurence of str2 in str1
        let check = 0;
        for (let j = 0; j < str2.length; j++) {
            // Get the current character from str1
            const char1 = str1[i + j];
            // Get the current character from str2
            const char2 = str2[j];
            // Check if both characters are equal
            if (char1 === char2) {
                check++;
            } else {
                break;
            }
            // If all the characters of str2 have been matched, increase the result by 1
            if (check === str2.length) {
                result++;
            }
        }
    }

    // Return the final result
    return result;
}
