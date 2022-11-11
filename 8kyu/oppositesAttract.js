function lovefunc(flower1, flower2) {
    return (
        (flower1 % 2 !== 0 && flower2 % 2 === 0) ||
        (flower1 % 2 === 0 && flower2 % 2 !== 0)
    );
}
// This is the same as:
// flower1 % 2 !== flower2 % 2
// I initially had the same solution, but for some reason my brain thought
// the "!==" should be a "&&"????? and I was getting wrong answers.
