function sortArray(array) {
  // Replace odd numbers with placeholder empty strings
  const changedArray = array.map((num) => (num % 2 !== 0 ? "" : num));

  // Filter out the odd numbers (sorted in ascending order)
  const oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  // replace empty string with sorted odd numbers
  oddNumbers.forEach((num) => {
    const firstEmptyIndex = changedArray.indexOf("");
    changedArray[firstEmptyIndex] = num;
  });

  return changedArray;
}

// TODO: learn when to use .shift() :D
