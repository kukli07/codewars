function isPrime(num) {
    if (num <= 0 || num === 1) {
        return false;
    }

    // Primality test: trial division (did not google solution, just needed to learn maths again)
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (Number.isInteger(num / i)) {
            return false;
        }
    }
    return true;
}
