function peopleWithAgeDrink(old) {
    const answers = {
        kid: "drink toddy",
        teen: "drink coke",
        young: "drink beer",
        adult: "drink whisky",
    };
    if (old < 14) return answers.kid;
    if (old < 18) return answers.teen;
    if (old < 21) return answers.young;
    if (old >= 21) return answers.adult;
}
