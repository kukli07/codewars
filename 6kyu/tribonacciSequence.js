function tribonacci(signature, n) {
    if (n === 0) {
        return [];
    }
    if (n <= 3) {
        return signature.slice(0, n);
    }
    const result = [...signature];
    for (let i = 0; i < n - 3; i++) {
        let sum = 0;
        for (let j = i; j < i + 3; j++) {
            sum += result[j];
        }
        result.push(sum);
    }
    return result;
}
