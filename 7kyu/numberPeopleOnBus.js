const number = function (busStops) {
    return busStops.reduce((prev, curr) => prev + curr[0] - curr[1], 0);
};
