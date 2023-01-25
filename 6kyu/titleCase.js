function titleCase(title, minorWords = "") {
    if (title === "") return "";

    const splitMinorWords = minorWords.toLowerCase().split(" ");
    let splitTitle = title.split(" ");

    // Transform title
    splitTitle = splitTitle.map((char, i) => {
        let newChar;
        // If first word, capitalize
        if (i === 0) {
            newChar = char[0].toUpperCase() + char.slice(1).toLowerCase();
            return newChar;
        }

        // If minor word, lowercase
        if (splitMinorWords.includes(char.toLowerCase())) {
            return char.toLowerCase();
        }

        // Else, capitalize
        newChar = char[0].toUpperCase() + char.slice(1).toLowerCase();
        return newChar;
    });

    return splitTitle.join(" ");
}
