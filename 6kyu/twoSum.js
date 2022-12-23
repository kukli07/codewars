function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [
                    numbers.indexOf(numbers[i]),
                    numbers.lastIndexOf(numbers[j]),
                ];
            }
        }
    }
}

// Optimization:
// Do not need indexOf and lastIndexOf, because we
// already have the index with i and j. However,
// it does not seem to improve runtime. Therefor, I will
// leave it as is.
