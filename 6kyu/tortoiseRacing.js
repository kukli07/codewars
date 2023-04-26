function race(v1, v2, g) {
    const s1 = v1 / 60 / 60;
    const s2 = v2 / 60 / 60;

    const intersection = -(g / (s1 - s2));

    return secondsConverter(intersection);
}

function secondsConverter(s) {
    const hours = s / 3600;

    const minutes = (s - hours * 3600) / 60;
    const seconds = s - hours * 3600 - minutes * 60;
    return [hours, minutes, seconds];
}

// Could not solve the kata, as i got minimal rounding erros of 1 second.
