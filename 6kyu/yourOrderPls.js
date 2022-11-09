function compareFn(a, b) {
    // sort a before b
    if (
        // We have to check .isNaN(), because Number(string) returns NaN
        // on non integers and apparently NaN is typeof number :))
        +a.split("").find((e) => typeof +e === "number" && !Number.isNaN(+e)) <
        +b.split("").find((e) => typeof +e === "number" && !Number.isNaN(+e))
    ) {
        return -1;
    }
    // sort b before a
    if (
        +a.split("").find((e) => typeof +e === "number" && !Number.isNaN(+e)) >
        +b.split("").find((e) => typeof +e === "number" && !Number.isNaN(+e))
    ) {
        return 1;
    }
    return 0;
}

function order(words) {
    return words.split(" ").sort(compareFn).join(" ");
}

// All the solutions I found on codewars were using regex, which is for cheaters
