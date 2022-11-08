function getMiddle(s) {
  return s.length % 2 !== 0
    ? s[Math.ceil(s.length / 2) - 1]
    : s.slice(Math.ceil(s.length / 2) - 1, Math.ceil(s.length / 2) + 1);
}

// Who needs readability?
