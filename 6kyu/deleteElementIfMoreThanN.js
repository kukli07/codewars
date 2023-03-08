function deleteNth(arr, n) {
    // initialize map (frequency counter)
    const map = {};
    const result = [];

    arr.forEach((num) => {
        if (map[num]) {
            if (map[num] < n) {
                result.push(num);
                map[num]++;
            }
        } else {
            result.push(num);
            map[num] = 1;
        }
    });
    return result;
}

// I thought about doing a version with .filter(), but
// could not grasp that you can just use the map inside the filter and
// return the boolean of checking the map vs n.

// Normally you would use filter to have just have a direct return
// of a comparison and not other calculations. TIL!
