function twoSort(s) {
    const sortedArray = s.sort();
    const starredString = sortedArray[0].split("").join("***");

    return starredString;
}

// Took longer than I am willing to admit.
// I thought you would need a.localeCompare(b), but that was not the case,
// and somehow does not work for all capital letters?
// Also forgot you can use a custom .join() value, so i did a map and join.
