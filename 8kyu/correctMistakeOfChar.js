function correct(string) {
    const mistakes = {
        5: "S",
        0: "O",
        1: "I",
    };

    return string
        .split("")
        .map((char) => mistakes[char] || char)
        .join("");
}
