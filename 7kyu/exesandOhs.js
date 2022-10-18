function XO(str) {
  let xCount = 0;
  let oCount = 0;

  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      char === "o" ? oCount++ : char === "x" ? xCount++ : null;
    });

  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
}
