function solution(number) {
    // input validation
    if (number < 0) return 0;

    // initialize result array
    const result = [];

    // for loop from 3 to number - 1
    for (let i = 3; i < number; i++) {
        // check if multiple
        if (i % 5 === 0 || i % 3 === 0) {
            result.push(i);
        }
    }

    // calculate sum of result array and return it
    return result.reduce((prev, curr) => prev + curr, 0);
}

// of course, there is a more efficient way to do this, by summing inside
// the loop, but maybe the numbers are needed for something else.
