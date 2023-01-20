const humanYearsCatYearsDogYears = function (humanYears) {
    const dogYears =
        15 +
        (humanYears > 1 ? 9 : 0) +
        (humanYears > 2 ? 5 * (humanYears - 2) : 0);
    const catYears = dogYears - (humanYears > 2 ? humanYears - 2 : 0);
    return [humanYears, catYears, dogYears];
};

// pretty weird, but it works.
