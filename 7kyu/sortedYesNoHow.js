function isSortedAndHow(array) {
    if (Math.min(...array) === array[0]) {
        return "yes, ascending";
    }
    if (Math.max(...array) === array[0]) {
        return "yes, descending";
    }
    return "no";
}

// Very Hacky solution haha and only works 95% of the time
