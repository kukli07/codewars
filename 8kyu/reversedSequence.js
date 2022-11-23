// Parameters: Integer, n > 0
// Returns: Array with Integers from n to 1

const reverseSeq = (n) => {
    // instantiate result variable
    const result = [];
    // for loop from n with -1 steps to 1
    for (let i = n; i >= 1; i--) {
        // push i into result
        result.push(i);
    }
    // return result
    return result;
};

// Example:
// reverseSeq(10) // return [10,9,8,7,6,5,4,3,2,1]
