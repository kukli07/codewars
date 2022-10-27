function solution(input, markers) {
  const inputSplit = input.split("\n");

  inputSplit.forEach((subString, index) => {
    markers.forEach((marker) => {
      if (subString.includes(marker)) {
        inputSplit[index] = subString.split(marker)[0].trim();
      }
    });
  });
  const result = inputSplit.join("\n");
  return result;
}

// Split the string into an array of substring for each line
// Loop through the array of substring
// Loop through the array of markers and check if the substring includes the marker

// If true, then Split the substring at the marker
// Take the part before the marker (the first element of the split array)
// Trim the string so that we get rid if any trailing spaces
// Replace the substring with the new string

// Join the array of substrings into a single result string
// Return the result string
