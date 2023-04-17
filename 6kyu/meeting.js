function meeting(s) {
    // convert to following structure [[first,last], ...]
    const names = s
        .toUpperCase()
        .split(";")
        .map((name) => name.split(":"));

    // sort data
    // a & b are equal to a name of [first,last]
    const namesSorted = names.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        return a[1].localeCompare(b[1]);
    });

    // format to desired output
    const namesFormatted = namesSorted.map(
        ([first, last]) => `(${last}, ${first})`
    );

    return namesFormatted.join("");
}
