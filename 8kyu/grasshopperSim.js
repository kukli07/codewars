// Parameters: Integer, positive, greater than 0
// Return: Integer
const summation = function (num) {
    // Declare a variable sum and initialize it to 0
    let sum = 0;
    // Loop from 1 to num
    for (let i = 1; i <= num; i++) {
        // Add i to sum
        sum += i;
    }
    // Return sum
    return sum;
};

// Example:
// summation(1); // 1
// summation(8); // 36
