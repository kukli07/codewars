const arr = (N) => {
    if (!N) return [];
    return new Array(N).fill(0).map((num, i) => num + i);
};
