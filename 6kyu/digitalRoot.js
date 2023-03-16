function digitalRoot(n) {
    // Math.log10(0) === -Infinity
    const length = Math.floor(Math.log10(n === 0 ? 1 : n)) + 1;
    if (length === 1) return n;

    let sum = 0;
    while (Math.floor(n) > 0) {
        const digit = Math.floor(n % 10);
        sum += digit;
        n /= 10;
    }
    return digitalRoot(sum);
}
