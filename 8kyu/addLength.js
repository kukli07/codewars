function addLength(str) {
    const words = str.split(" ");

    return words.map((word) => `${word} ${word.length}`);
}
