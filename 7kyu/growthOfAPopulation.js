// Parameters:
// p0 - Number - initial Population
// percentage - Number - yearly growth rate
// aug - Number - yearly fixed growth in Population (new inhabitants)
// p - Number - limit value

// Returns: n - Number - count of years till pop reaches limit value

function nbYear(p0, percent, aug, p, counter = 1) {
    // calculate the new population
    const pN = Math.floor(p0 + p0 * (percent / 100) + aug);

    // Check if current population is less than the target population
    if (pN < p) {
        // Call the function again with a new population
        return nbYear(pN, percent, aug, p, counter + 1);
    }
    // otherwise return the counter
    return counter;
}

// Example:
// nbYear(100, 10, 50, 500) // returns 5
