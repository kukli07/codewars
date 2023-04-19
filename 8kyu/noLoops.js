function check(a, x) {
    // Base Case
    if (a.length === 0) return false;

    // Check if value is at the end
    if (a[a.length - 1] === x) return true;

    // If not, reduce array size by one
    a.pop();

    // Repeat
    return check(a, x);
}
