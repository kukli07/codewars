const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0;

    const seq = [];

    for (let i = begin; i <= end; i += step) {
        seq.push(i);
    }

    return seq.reduce((prev, curr) => prev + curr);
};

// Can make it more efficient by summing inside the first loop, however
// maybe we need the sequence for something else later on, so we'll keep it. xd
