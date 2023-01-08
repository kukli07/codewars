function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return [laLigaGoals, copaDelReyGoals, championsLeagueGoals].reduce(
        (a, b) => a + b
    );
}
