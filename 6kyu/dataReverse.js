function dataReverse(data) {
    // create result array
    const result = [];

    let temp = [];
    // loop over data
    for (let i = 0; i <= data.length; i++) {
        // put byte into temporary array
        if (i % 8 === 0 && i !== 0) {
            result.push([...temp]);
            temp = [];
        }
        temp.push(data[i]);
    }
    // reverse result and flatten
    // return result
    return result.reverse().flat();
}

// actually do not need to create a shallow copy of the temp array,
// as it is immediately reassigned to a new array and thus breaking the binding
