function isPangram(string) {
  let uniqueChars = [];
  // Filter all non word chars
  string = string.toLowerCase().match(/[a-z]/g);

  // Go through all chars and add it to the uniqueChars array, if it is a new char.
  string.forEach((char) => {
    if (!uniqueChars.includes(char)) {
      uniqueChars.push(char);
    }
  });

  // The English alphabet consists of 26 unique letters
  if (uniqueChars.length === 26) {
    return true;
  } else {
    return false;
  }
}
