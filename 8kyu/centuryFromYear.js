function century(year) {
    return year % 100 === 0
        ? +Math.floor(Number(year / 100)).toFixed(0)
        : +Math.floor(Number(year / 100)).toFixed(0) + 1;
}
// Took me longer than I am willing to admit
// And Math.ceil() would have been a lot easier haha
