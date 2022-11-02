function mix(s1, s2) {
  const s1arr = [];
  const s2arr = [];
  const letters = "abcdefghijklmnopqrstuvwxyz";
  // Count occurence of lowercase letters in s1, s2 and save them in arrrays
  s1.split("")
    .filter((c) => c !== " ")
    .forEach((c) => {
      if (s1arr[c]) {
        s1arr[c]++;
      } else {
        s1arr[c] = 1;
      }
    });

  s2.split("")
    .filter((c) => c !== " ")
    .forEach((c) => {
      if (s2arr[c]) {
        s2arr[c]++;
      } else {
        s2arr[c] = 1;
      }
    });
  // Delete letters that occur only once and check if they are only lowercase letters
  Object.keys(s1arr).forEach((c) => {
    if (s1arr[c] === 1) {
      delete s1arr[c];
    }
    if (!letters.includes(c)) {
      delete s1arr[c];
    }
  });
  Object.keys(s2arr).forEach((c) => {
    if (s2arr[c] === 1) {
      delete s2arr[c];
    }
    if (!letters.includes(c)) {
      delete s1arr[c];
    }
  });

  // Transform the entries of the arrays to the correct representation, depending on
  // given conditions
  // c is the key:value pair
  // c[0] is the letter, c[1] is the number of occurences
  const s1arr2 = Object.entries(s1arr).map((c) => {
    if (s2arr[c[0]] === undefined) {
      return `1:${c[0].repeat(c[1])}`;
    }
    if (s2arr[c[0]] > c[1]) {
      return `2:${c[0].repeat(s2arr[c[0]])}`;
    }
    if (s2arr[c[0]] < c[1]) {
      return `1:${c[0].repeat(c[1])}`;
    }
    return `=:${c[0].repeat(c[1])}`;
  });
  const s2arr2 = Object.entries(s2arr).map((c) => {
    if (s1arr[c[0]] === undefined) {
      return `2:${c[0].repeat(c[1])}`;
    }
    if (s1arr[c[0]] > c[1]) {
      return `1:${c[0].repeat(s1arr[c[0]])}`;
    }
    if (s1arr[c[0]] < c[1]) {
      return `2:${c[0].repeat(c[1])}`;
    }
    return `=:${c[0].repeat(c[1])}`;
  });

  // Check if s1arr2 and s2arr2 have same entries, if yes, delete the entry from s2arr2
  s1arr2.forEach((c) => {
    if (s2arr2.includes(c)) {
      s2arr2.splice(s2arr2.indexOf(c), 1);
    }
  });
  // Combine s1arr2 and s2arr2 and sort them in decreasing order of their length
  // and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint)
  const result = s1arr2.concat(s2arr2).sort((a, b) => {
    if (a.length > b.length) {
      return -1;
    }
    if (a.length < b.length) {
      return 1;
    }
    if (a.length === b.length) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
    }
  });

  return result.join("/");
}
