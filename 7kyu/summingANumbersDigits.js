function sumDigits(number) {
    if (Number.isNaN(number)) {
        return 0; // or any other default value
    }
    return String(Math.abs(number))
        .split("")
        .reduce((prev, curr) => +prev + +curr, 0);
}
