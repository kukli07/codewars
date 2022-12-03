function minMax(arr) {
    const sorted = arr.sort((a, b) => a - b);
    return [sorted[0], sorted[sorted.length - 1]];
}
// Hacky solution for fun :)
// actual solution is with Math.min/max and spreaded arr
