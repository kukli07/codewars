function thirt(n) {
    // Sequence of 10^i % 13 results
    const sequence = [1, 10, 9, 12, 3, 4];
    // Transformation of n to an reversed array with each digits as entry
    const arrayOfN = n.toString().split("").map(Number).reverse();

    // Calculate the sum of products of each digit of n multiplied with
    // the continuing sequence
    let sum = 0;
    for (let i = 0; i < arrayOfN.length; i++) {
        const product = arrayOfN[i] * sequence[i % sequence.length]; // i % sequence.length, because if i is out of bounds for the sequence, we start at 0 again and repeat the multiplication at the start of the sequence
        sum += product;
    }

    // Base Case
    if (n === sum) {
        return sum;
    }

    // Recursion
    return thirt(sum);
}
