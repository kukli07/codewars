function wordsToMarks(string) {
    return string
        .split("")
        .reduce((prev, curr) => prev + curr.charCodeAt(0) - 96, 0);
}
