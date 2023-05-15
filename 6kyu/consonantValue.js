function solve(s) {
    const vowels = ["a", "e", "o", "i", "u"];
    let max = 0;
    const substrings = s.split(/[aeoiu]/);

    substrings.forEach((substr) => {
        const groups = substr.split("");

        const value = groups.reduce((prev, curr) => {
            if (vowels.includes(curr.toLowerCase())) {
                return prev;
            }

            return prev + (curr.toLowerCase().charCodeAt(0) - 96);
        }, 0);

        if (value > max) {
            max = value;
        }
    });

    return max;
}
