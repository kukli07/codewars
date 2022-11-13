function validatePIN(pin) {
    const re = /[0-9]{4}/;
    const re2 = /[0-9]{6}/;

    if (
        (pin.match(re) && pin.length === 4) ||
        (pin.match(re2) && pin.length === 6)
    ) {
        return true;
    }
    return false;
}

// Regex is very annoying, but I'm glad I got it to work.
// I know you can combine re and re2 with |, however this is more
// readble.
