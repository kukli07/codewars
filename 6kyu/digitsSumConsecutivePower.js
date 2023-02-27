function sumDigPow(a, b) {
    const result = [];

    for (let currNum = a; currNum <= b; currNum++) {
        let sum = 0;

        for (let j = 1; j <= String(currNum).length; j++) {
            sum += Number(String(currNum)[j - 1]) ** j;
        }
        if (sum === currNum) {
            result.push(currNum);
        }
    }
    return result;
}

// Really poor solution, as it is not efficient at all.
// Many type conversions, as I did not know how to do it mathematically.
