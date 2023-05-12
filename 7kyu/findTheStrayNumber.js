function stray(numbers) {
    // check if the first number is the unique one
    if (numbers.indexOf(numbers[0]) === numbers.lastIndexOf(numbers[0])) {
        return numbers[0];
    }
    // if not, go through the array and check which number is different from the first one
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[0] !== numbers[i]) return numbers[i];
    }
}

// Step 1 Could be done in the for loop as well, but index methods go
// over the whole array each time, so we would get O(n^2). This solution is
// O(n)
