function getRealFloor(n) {
    if (n <= 13 && n > 0) {
        return n - 1;
    }

    if (n > 13) {
        return n - 2;
    }

    return n;
}
