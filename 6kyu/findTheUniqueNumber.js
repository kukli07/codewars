function findUniq(arr) {
    // initalize map
    const map = {};

    const result = 0;
    // loop over array
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }

    return Number(
        Object.entries(map).find(([number, count]) => count === 1)[0]
    );
}

// Not the most optimized solution, however it works suprisingly fast
