function findNeedle(haystack) {
    const index = haystack.findIndex((item) => item === "needle");
    return `found the needle at position ${index}`;
}
