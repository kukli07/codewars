function stockList(listOfArt, listOfCat) {
    // create map of categories
    const categories = {};
    listOfCat.forEach((category) => {
        categories[category] = 0;
    });
    // add up the amount of books in each category
    listOfArt.forEach((book) => {
        const [text, num] = book.split(" ");
        if (Object.keys(categories).includes(text[0])) {
            categories[text[0]] += Number(num);
        }
    });
    // if no books in any category, return empty string
    if (Object.values(categories).reduce((a, b) => a + b, 0) === 0) return "";

    // create result string
    const result = [];
    Object.entries(categories).forEach(([category, amount]) => {
        result.push(`(${category} : ${amount})`);
    });

    return result.join(" - ");
}
