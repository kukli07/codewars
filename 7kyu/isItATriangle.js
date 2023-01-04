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

// Easier solution I tough of after I solved it:
function isTriangle2(a, b, c) {
    return Math.max(a, b, c) < a + b + c - Math.max(a, b, c);
}

// The first math.max() determines which side of the triangle is the longest
// (Basically the "hypotenuse" of the triangle).
// Then the other two sides have to be longer than the longest side according
// to the theorem, thus we subtract the longest side from the sum of all sides.
// Without the restriction that the area should be greater than 0, the comparison
// would be a "<=" instead of a "<" - so a triangle could be a line, but that
// would be a non-physical triangle.
