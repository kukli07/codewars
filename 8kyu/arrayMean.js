function findAverage(nums) {
    const sum = nums.reduce((prev, curr) => prev + curr, 0);

    return sum / nums.length;
}
