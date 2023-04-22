const encryptThis = function (text) {
    return text
        .split(" ")
        .map((word) => {
            const first = word.charCodeAt(0);
            const second = word[1];
            const last = word[word.length - 1];
            const rest = word.slice(2, word.length - 1);

            if (word.length === 2) {
                return first + second;
            }
            if (word.length >= 3) {
                return first + last + rest + second;
            }
            return first;
        })
        .join(" ");
};

// TIL: Need to learn advanced regex
