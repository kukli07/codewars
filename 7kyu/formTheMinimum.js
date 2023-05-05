function minValue(values) {
    // filter array (no duplicate numbers)
    const filteredValues = [];

    values.forEach((value) => {
        if (!filteredValues.includes(value)) {
            filteredValues.push(value);
        }
    });

    // return sorted array
    return +filteredValues.sort((a, b) => a - b).join("");
}

// I forgot about Set, even tough I used it before.
