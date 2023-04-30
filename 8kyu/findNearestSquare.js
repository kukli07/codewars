function nearestSq(n) {
    const sqrt = Math.sqrt(n);
    const nearest = Math.round(sqrt) ** 2;

    return nearest;
}
