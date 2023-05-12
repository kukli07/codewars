function findNb(m) {
    let count = 1;
    let sum = 0;

    while (sum < m) {
        sum += count ** 3;
        count++;
    }

    return sum === m ? count - 1 : -1;
}
