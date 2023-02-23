function accum(s) {
    const arr = s.toLowerCase().split("");

    return arr.map((char, i) => char.toUpperCase() + char.repeat(i)).join("-");
}

// Wow! I got the top rated solution! I'm so happy! :D
