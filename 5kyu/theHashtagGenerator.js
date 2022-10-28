function generateHashtag(str) {
  const check = str
    .trim()
    .split(" ")
    .filter((char) => char !== "")
    .join("");
  if (check.length > 140 || check.length < 1) {
    return false;
  }

  const newStr = str
    .trim()
    .split(" ")
    .filter((char) => char !== "")
    .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
    .join("");

  const result = `#${newStr}`;

  if (result.length <= 140) {
    return result;
  }
  return false;
}

// First check if the string is empty or has more than 140 characters
// If it does, return false

// If it doesn't, split the string into an array of words
// Filter out any empty strings
// Map over the array of words
// Capitalize the first letter of each word
// Join the array of words into a string

// Add a hashtag to the beginning of the string
// If the length of the string is less than or equal to 140, return the string
// If it's not, return false
