function solution(string) {
    // split word into characters
    const chars = string.split("");

    return (
        chars
            // if the char is uppercase, put a space before it
            .map((char) => (char === char.toUpperCase() ? ` ${char}` : char))
            .join("")
    );
}
