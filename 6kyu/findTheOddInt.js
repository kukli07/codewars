function findOdd(A) {
    // initialize map
    const map = {};

    // loop over A
    A.forEach((num) => {
        // check if num inside map
        if (map[num]) {
            // yes? - increase count
            map[num]++;
        } else {
            // no? - add to map with count = 1
            map[num] = 1;
        }
    });

    // loop over map
    const result = Object.entries(map).find(
        ([num, count]) =>
            // check if count is odd
            count % 2 !== 0
    );
    // return corresponding key
    return Number(result[0]);
}
