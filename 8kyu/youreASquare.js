const isSquare = function (n) {
    if (n >= 0) {
        if (Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)) === n) {
            return true;
        }
    }
    return false;
};
