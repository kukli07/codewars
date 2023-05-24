function expandedForm(num) {
    const lengthOfNum = Math.floor(Math.log10(num) + 1);
    const parts = [];

    for (let i = 1; i <= lengthOfNum; i++) {
        const part =
            Math.floor((num % 10 ** i) / 10 ** (i - 1)) * 10 ** (i - 1);
        parts.push(part);
    }

    return parts
        .reverse()
        .filter((n) => n !== 0)
        .join(" + ");
}

// lol
