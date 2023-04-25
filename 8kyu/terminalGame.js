function combat(health, damage) {
    const newHealth = health - damage;

    return newHealth >= 0 ? newHealth : 0;
}

// Math.max() would be more elegant
