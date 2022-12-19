function maxSequence(arr) {
    let currentNumber = 0;
    let result = 0;
    // let sequence = [];
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // If the number is positive, we use this number as the starting point
        // for the sequence
        if (arr[i] >= 0) {
            currentNumber = arr[i];
            // If the starting point is greater than the sum of a previous sequence,
            // we use this number as the result and starting point (perhaps this single
            // number is larger than any sequence that follows.)
            if (currentNumber > result) {
                result = currentNumber;
            }
            // We create a new variable to hold the sum of the sequence that follows
            let newResult = currentNumber;
            // Loop through the array again, starting at the next number
            for (let j = i + 1; j < arr.length; j++) {
                // If the sum of the sequence is greater than 0, we know that it is possible
                // that the sequence will be greater than the previous sequence.
                if (newResult + arr[j] >= 0) {
                    // We add the next number to the sum of the sequence
                    newResult += arr[j];
                    // If the sum of the sequence is greater than the previous sequence,
                    // we use this number as the result.
                    if (newResult > currentNumber && newResult > result) {
                        result = newResult;
                        // sequence = arr.slice(i, j + 1);
                    }
                }
                // If the sum of the sequence is less than 0, we know that the sequence will
                // not be greater than the previous sequence, so we break out of the loop.
                else {
                    break;
                }
            }
        }
    }
    // console.log(sequence);
    return result;
}

// This was a very ugly solution with bad logic. Below the new solution,
// after learning from the soltuions of others.

function maxSequence2(arr) {
    let result = 0;
    // let sequence = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        for (let j = i; j < arr.length; j++) {
            sum += arr[j];

            if (sum > result) {
                result = sum;
                // sequence = arr.slice(i, j + 1);
            }
        }
    }
    // console.log(sequence);
    return result;
}

// maxSequence2([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6

// A really clever solution with a single loop, that is easy to understand:

function maxSequence3(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(0, currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
