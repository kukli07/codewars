function digPow(n, p) {
    let i = -1;
    const sum = n
        .toString()
        .split("")
        .reduce((prev, curr) => {
            i++;
            return prev + curr ** (p + i);
        }, 0);
    // solve for k
    // -> sum / n = k
    return sum % n === 0 ? sum / n : -1;
}

// TIL: reduce() method has an index parameter, so i was not needed :)
