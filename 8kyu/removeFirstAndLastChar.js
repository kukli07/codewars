function removeChar(str) {
    const strArr = str.split("");
    strArr.shift();
    strArr.pop();
    return strArr.join("");
}

// Okay, .slice() solution is way cooler, but this way you can
// also use the first and last element, if needed.
