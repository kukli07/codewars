function roundToNext5(n) {
    if (n % 5 === 0) return n;
    return roundToNext5(n + 1);
}

// Not optimal as there is a smart math way to do it,
// but I wanted to practice recursion.
