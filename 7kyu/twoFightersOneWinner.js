function declareWinner(fighter1, fighter2, firstAttacker) {
    const firstFighter = fighter1.name === firstAttacker ? fighter1 : fighter2;
    const secondFighter = fighter1.name === firstAttacker ? fighter2 : fighter1;

    while (firstFighter.health > 0 || secondFighter.health > 0) {
        secondFighter.health -= firstFighter.damagePerAttack;
        if (secondFighter.health <= 0) return firstFighter.name;
        firstFighter.health -= secondFighter.damagePerAttack;
        if (firstFighter.health <= 0) return secondFighter.name;
    }
}
