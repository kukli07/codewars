const capitals = function (word) {
    const capitalsIndexes = [];

    word.split("").forEach((char, index) => {
        if (char === char.toUpperCase()) {
            capitalsIndexes.push(index);
        }
    });

    return capitalsIndexes;
};
