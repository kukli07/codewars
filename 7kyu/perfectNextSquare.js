function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    const root = Math.sqrt(sq);

    if (Number.isInteger(root)) {
        return (root + 1) ** 2;
    }
    return -1;
}
