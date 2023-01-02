String.prototype.toAlternatingCase = function () {
    return this.split("")
        .map((char) => {
            if (char.toLowerCase() === char) {
                return char.toUpperCase();
            }
            return char.toLowerCase();
        })
        .join("");
};
