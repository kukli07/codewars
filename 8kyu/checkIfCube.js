const cubeChecker = function (volume, side) {
    return volume <= 0 || side <= 0 ? false : volume === side ** 3;
};
