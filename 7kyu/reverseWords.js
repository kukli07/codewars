function reverseWords(str) {
  const words = str.split(" ");
  return words.map((word) => word.split("").reverse().join("")).join(" ");
}

// Get an array containing each word
// Split each word into its chars, reverse and then join them
// Then join the words array back into a string and return it
