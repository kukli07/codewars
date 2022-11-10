function longest(s1, s2) {
    const newStr = [...new Set(s1 + s2)];
    return newStr.sort().join("");
}

// Power of Math
// TIL: Strings are iterable, therefore you don't need to convert them
// to arrays to use them inside Set()

// Oh wow I got the same solution as the top rated one
