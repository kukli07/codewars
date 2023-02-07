function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const num = arr[i];
        const nextNum = arr[i + 1];

        if (num + 1 !== nextNum) {
            return nextNum;
        }
    }
    return null;
}
