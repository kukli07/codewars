function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split("")
        .map((char, i, w) =>
            w.filter((c) => c === char).length > 1 ? ")" : "("
        )

        .join("");
}
