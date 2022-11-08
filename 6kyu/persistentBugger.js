function persistence(num, counter = 0) {
  const chars = String(num).split("");
  if (chars.length === 1) {
    return counter;
  }
  const newNum = chars.reduce((prev, curr) => prev * curr);

  return persistence(newNum, counter + 1);
}

// TIL: How to keep track of the number of times a function is called using recursion
// And first time I've used recursion to solve a problem! :)

// Why String(num) instead of num.toString()?
// -> if num is null or undefined, .toString() will throw an error, but String() will
// return "null" or "undefined". Therefor String() is more robust.
