function gimme(triplet) {
    // have to create copy of triplet, because sort is in place!
    const middle = [...triplet].sort((a, b) => a - b)[1];

    return triplet.indexOf(middle);
}
