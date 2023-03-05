function DNAStrand(dna) {
    const result = dna
        .split("")
        .map((char) => {
            if (char === "A") return "T";
            if (char === "T") return "A";
            if (char === "G") return "C";
            if (char === "C") return "G";
            return char;
        })
        .join("");

    return result;
}

// Other ideas:
// - switch statement
// - object mapping
// - regex
