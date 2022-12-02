// Params: time - Number - >0
// Return: num of litres - Number - Rounded to smallest value

function litres(time) {
    // initialize variable for litres/h
    const litresPerHour = 0.5;
    // multiply litres/h * time & round result to smallest value
    const result = Math.floor(litresPerHour * time);
    // return result
    return result;
}

// Example:
// litres(3) // returns 1
// litres(4) // returns 2

// Comment:
// I know that this could have been returned in one easy line,
// but I wanted to make it more readable and clean.
// I also wanted to make it easier and obvious to change the litres/h for future use.
