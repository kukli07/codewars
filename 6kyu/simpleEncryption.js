function encrypt(text, n) {
    // Input Validation
    if (text === null) return null;
    // --

    let encryptedText = text;

    // Repeat encryption process n-times
    for (let i = 1; i <= n; i++) {
        // Get text from all odd indices
        const odds = encryptedText
            .split("")
            .filter((_, idxOdd) => idxOdd % 2 !== 0)
            .join("");

        // Get text from all even indices
        const evens = encryptedText
            .split("")
            .filter((_, idxEven) => idxEven % 2 === 0)
            .join("");

        // Combine both
        encryptedText = odds + evens;
    }

    // Return result
    return encryptedText;
}

function decrypt(encryptedText, n) {
    // Input Validation
    if (n <= 0) return encryptedText;
    if (encryptedText === null) return null;
    // --

    let decryptedText = encryptedText;
    // Calculate the middle of the text, to split evens and odds
    const middle = Math.floor(decryptedText.length / 2);

    // Variable to store the reversed text
    let result;

    // Repeat decryption process n-times
    for (let i = 1; i <= n; i++) {
        // Reset the result
        result = "";

        // Get the text that was previously at the odd indices
        const odds = decryptedText.slice(0, middle).split("");

        // Get the text that was previously at the even indices
        const evens = decryptedText.slice(middle).split("");

        // Re-arrangement of the text, based on evens & odds
        for (let j = 0; j < decryptedText.length; j++) {
            if (j % 2 === 0) {
                result += evens.shift();
            } else {
                result += odds.shift();
            }
        }

        // Replace the decrypted text with the result
        decryptedText = result;
    }

    // Return the result
    return result;
}
