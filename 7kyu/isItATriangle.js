// Params: Numbers - (a, b, c) - given length of each side of the triangle
// Returns: Boolean - result - Whether it is possible to create a triangle with a,b,c

function isTriangle(a, b, c) {
    // check Triangle Inequality Theorem
    const test1 = a + b > c;
    const test2 = a + c > b;
    const test3 = c + b > a;
    const result = test1 && test2 && test3;

    // return the result
    return result;
}

// Example:
// isTriangle(1, 2, 2) // returns true

// TIL: The Triangle Inequality Theorem states that the sum of the lengths
// of any two sides of a triangle must be greater than the length of the third side.
