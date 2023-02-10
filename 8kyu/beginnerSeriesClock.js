function past(h, m, s) {
    // input validation
    if (h > 23 || h < 0) return new Error("0 <= h <= 23");
    if (m > 59 || m < 0) return new Error("0 <= m <= 59");
    if (s > 59 || s < 0) return new Error("0 <= s <= 59");

    // convert h, m, s into ms
    const hMs = h * 60 * 60 * 1000;
    const mMs = m * 60 * 1000;
    const sMs = s * 1000;
    // build sum
    const sum = hMs + mMs + sMs;

    // return sum
    return sum;
}

function past2(h, m, s) {
    const validate = (val, min, max) =>
        val > max || val < min ? new Error(`${min} <= val <= ${max}`) : true;

    const inputs = [h, m, s];
    for (let i = 0; i < inputs.length; i++) {
        const valid = validate(inputs[i], 0, [23, 59, 59][i]);
        if (valid instanceof Error) return valid; // Stop function, if error
    }

    const hMs = h * 60 * 60 * 1000;
    const mMs = m * 60 * 1000;
    const sMs = s * 1000;
    const sum = hMs + mMs + sMs;

    return sum;
}
