function queueTime(customers, n) {
    // Edge Cases
    // For 0 tills, return 0
    // For 1 till, return sum of customers
    if (n === 0) return 0;
    if (n === 1) return customers.reduce((prev, curr) => prev + curr, 0);
    // ----

    // Sum Variable to count the required time
    let sum = 0;
    // Create tills
    const tills = Array.from({ length: n }, () => 0);

    while (true) {
        // If a till is empty, enqueue a customer
        tills.forEach((till, idx) => {
            if (till === 0) {
                const customer = customers.shift() || 0;
                tills[idx] = customer;
            }
        });

        // Calculate the amount we reduce all tills by (the fastest customer at a till)
        const reduceBy = Math.min(...tills.filter((till) => till !== 0));

        // Reduce every occupied till by the previously calculated amount
        // (The fastest customer is finished)
        tills.forEach((till, idx) => {
            if (till !== 0) {
                tills[idx] -= reduceBy;
            }
        });

        // Increase the sum variable
        sum += reduceBy;

        // Break if the queue is empty and there is noone left at a till
        if (tills.every((till) => till === 0) && customers.length === 0) break;
    }

    return sum;
}

// My solution is actually the same speed as the top solution, so I guess
// it is alright. Just a lot more lines of code

/* I just thought of a way that my solution is way better than the top solution:
For any point in time t, you can evaluate the status of all components
-- you can see the status of the customers queue
-- you can see the status of any given till
-> This allows you to create a good visualization of the whole process over time t

The top solution does not allow that, because it does not capture the aspect of
a queue, as it is solely a "math-based" solution that calculates the time. My solution
conceptualizes the whole process and allows for easy understanding.
(t increases by 1 for each iteration of the while loop)
*/
