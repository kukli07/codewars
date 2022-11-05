function arrayDiff(a, b) {
  if (a.length === 0 || b.length === 0) {
    return a;
  }
  let result = [...a];
  b.forEach((num) => {
    result = result.filter((entry) => entry !== num);
  });

  return result;
}
