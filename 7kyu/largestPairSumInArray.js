function largestPairSum(numbers) {
    const [max, max2] = numbers.sort((a, b) => b - a);

    return max + max2;
}
