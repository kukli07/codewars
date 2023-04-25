function remove(string) {
    return string.endsWith("!") ? string.slice(0, string.length - 1) : string;
}

// TIL: .slice(0, -1) is a thing
