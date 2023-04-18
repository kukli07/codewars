String.prototype.isUpperCase = function () {
    const str = this.valueOf();

    return str === str.toUpperCase();
};
