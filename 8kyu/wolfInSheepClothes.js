function warnTheSheep(queue) {
    const wolfPos = queue.indexOf("wolf");

    if (wolfPos === queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    }
    return `Oi! Sheep number ${
        queue.length - 1 - wolfPos
    }! You are about to be eaten by a wolf!`;
}
