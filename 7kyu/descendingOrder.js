function descendingOrder(n) {
    return Number(
        n
            .toString()
            .split("")
            .sort((a, b) => b.localeCompare(a))
            .join("")
    );
}

// Learned the localeCompare() trick from a smart guy! :)
