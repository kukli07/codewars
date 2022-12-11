function removeExclamationMarks(s) {
    return s
        .split("")
        .filter((char) => char !== "!")
        .join("");
}

// TIL: You can use just use .split("!"). Very smart! :)
