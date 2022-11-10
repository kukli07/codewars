function comp(array1, array2) {
    if (array1 === null || array2 === null || array1.length !== array2.length) {
        return false;
    }
    const sorted1 = array1.sort((a, b) => a - b);
    const sorted2 = array2.sort((a, b) => a - b);

    return sorted1.every((num, i) => num ** 2 === sorted2[i]);
}
