const binaryArrayToNumber = (arr) =>
  arr
    .reverse()
    .map((num, index) => num * 2 ** index)
    .reduce((a, b) => a + b);

// Bro, who the f knows about radix from parseInt()?
// Tried to do a solution with just reduce(), however not smart enough :(
// Atleast this works with any length of array
