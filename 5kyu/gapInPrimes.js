function gap(g, m, n) {
    const primes = [];

    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }

        // If we have two primes, calculate the gap. If it is equal to g,
        // we found our solution. If not, get rid of the first prime and continue
        if (primes.length === 2) {
            const delta = primes[1] - primes[0];
            if (delta !== g) {
                primes.shift();
            } else {
                break;
            }
        }
    }
    return primes.length === 2 ? primes : null;
}

function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Pretty interesting problem. I basically applied a queue DS.
