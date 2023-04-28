/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
function primeFactors(n) {
    // Method used: Prime Factorization by Trial Division
    // see https://www.calculatorsoup.com/calculators/math/prime-factors.php

    // Create array to save primes that evenly divide the remaining n
    const primes = [];
    // Initalize the first prime
    let prime = 2;

    //
    while (n !== 1) {
        // If the prime divides n evenly, then we save the prime, as it is part
        // of the factorization. Then adjust n accordingly.
        if (n / prime === Math.floor(n / prime)) {
            n /= prime;
            primes.push(prime);
        } else {
            // If the prime does not divide n evenly, we want to continue with the
            // next prime
            prime = getNextPrime(prime);
        }
    }
    // Create an object to easily transform the multiple prime numbers in the
    // primes array to a map that counts the occurrence of each prime
    // primes looks something like this [2,2,2,2,2,5,...]
    const map = {};

    // Transform primes array to map
    primes.forEach((prime) => {
        if (map[prime]) {
            map[prime]++;
        } else {
            map[prime] = 1;
        }
    });

    // Initalize the result string
    let result = "";

    // Loop over the map and add the desired format to the result string
    // for occurrence > 1 -> (prime ** x)
    // for occurrence = 1 -> (prime)
    Object.entries(map).forEach(([prime, amount]) => {
        if (amount > 1) {
            result += `(${prime}**${amount})`;
        } else {
            result += `(${prime})`;
        }
    });

    // Return the result string
    return result;
}

// Helper Function to get the next prime after n
function getNextPrime(n) {
    const isPrime = (num) => {
        const sqrtnum = Math.floor(Math.sqrt(num));
        let prime = num !== 1;
        for (let i = 2; i < sqrtnum + 1; i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
        return prime;
    };
    while (!isPrime(++n)) {}
    return n;
}

/* 
Optimization:
- You do not actually have to check if number we want to divide with
is a prime, because the given n we want to factorize is a prime itself and
can only have primes as factors. Therefor we can just loop from 2 up to n and 
check if n % i === 0.

See Example below
*/

function primeFactors2(n) {
    let count;
    let result = "";

    for (let i = 2; i <= n; i++) {
        count = 0;
        while (n % i === 0) {
            count++;
            n /= i;
        }
        result += count ? `(${count > 1 ? `${i}**${count}` : i})` : "";
    }

    return result || `(${n})`;
}
